const App = require('.');
const messages = require('./messages');
const { ContextSimulator } = require('bottender/dist/test-utils');
const { delay, createString } = require('./lib/utils');
const textKey = require('./const/textKey');

const simulator = new ContextSimulator({
  platform: 'line',
});

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
});
