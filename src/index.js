const messages = require('./messages');
const { createString } = require('./lib/utils');

async function textHandler(context) {
  const { event } = context;
  const { text: message } = event;

  switch (message) {
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
