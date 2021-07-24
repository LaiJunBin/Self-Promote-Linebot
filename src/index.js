const messages = require('./messages');
const { delay, createString } = require('./lib/utils');
const textKey = require('./const/textKey');

async function textHandler(context) {
  const { event } = context;
  const { text: message } = event;

  switch (message) {
    case textKey.portfolios:
      await context.sendText(messages.portfolios.text);
      delay(messages.portfolios.delay).then(() => {
        context.push([messages.portfolios.body]);
      });
      break;
    default:
      return await context.sendText(
        createString(messages.receive, {
          message: message,
        })
      );
  }
}

module.exports = async function App(context) {
  const { event } = context;
  switch (true) {
    case event.isText:
      return textHandler(context);
  }

  return await context.sendText(messages.unknown);
};
