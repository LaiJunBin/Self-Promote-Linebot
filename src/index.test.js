const App = require('.');
const messages = require('./messages');
const { ContextSimulator } = require('bottender/dist/test-utils');
const { delay, createString } = require('./lib/utils');
const textKey = require('./const/textKey');

const simulator = new ContextSimulator({
  platform: 'line',
});

/**
 * 複寫一下 createContext() 幫他加上一些 send()，不然測試到 undefined 會出錯。
 * 官方說明不是很完整，看 source code 看起來也沒特別做處理，且只有實現 sendText()
 * https://github.com/Yoctol/bottender/blob/8be34209e90c7b1e130046f258d139a68886592d/examples/browser-only/src/BrowserBot/BrowserContext.js
 */
(function () {
  const createContext = ContextSimulator.prototype.createContext;
  ContextSimulator.prototype.createContext = function (event, state) {
    const context = createContext.call(this, event, state);
    context.send = jest.fn();
    return context;
  };
})();

describe('index.js', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('reply text message', async () => {
    const message = 'Test Message.';
    const context = simulator.createTextContext(message);
    await App(context);

    expect(context.sendText).toBeCalledWith(
      createString(messages.receive, { message })
    );
  });

  it('reply unknown event message', async () => {
    const context = simulator.createContext({
      event: {
        isImage: true,
      },
    });
    await App(context);

    expect(context.sendText).toBeCalledWith(messages.unknown);
  });

  it('reply portfolios', async () => {
    const context = simulator.createTextContext(textKey.portfolios);

    await App(context);
    expect(context.sendText).toBeCalledWith(messages.portfolios.text);

    await delay(messages.portfolios.delay);
    expect(context.push).toBeCalledWith([messages.portfolios.body]);
  });

  it('reply github', async () => {
    const context = simulator.createTextContext(textKey.github);
    await App(context);

    expect(context.send).toBeCalledWith([messages.github]);
  });
});
