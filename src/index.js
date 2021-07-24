const messages = require('./messages');
const { delay, createString } = require('./lib/utils');
const textKey = require('./const/textKey');

async function richMenuHandler(context) {
  const { event } = context;
  const { text: message } = event;

  switch (message) {
    case textKey.more:
      await context.linkRichMenu(process.env.MORE_RICH_MENU);
      return await context.sendText('已切換選單!');
    case textKey.back:
      await context.linkRichMenu(process.env.DEFAULT_RICH_MENU);
      return await context.sendText('已切換選單!');
  }

  return false;
}

async function skillMessageHandler(context) {
  const { event } = context;
  const { text: message } = event;

  if (message in textKey.skills) {
    await context.sendText(messages.skills[message]);
    delay(1000).then(() => {
      context.push([messages.morePromote]);
    });
    return true;
  }

  return false;
}

async function normalMessageHandler(context) {
  const { event } = context;
  const { text: message } = event;

  switch (message) {
    case textKey.portfolios:
      await context.sendText(messages.portfolios.text);
      delay(messages.portfolios.delay).then(() => {
        context.push([messages.portfolios.body]);
      });
      break;
    case textKey.github:
      return await context.send([messages.github]);
    case textKey.promote:
      await context.sendText(messages.promote);
      delay(1000).then(() => {
        context.push([
          createString(messages.templates.confirm, {
            text: '還想看更多嗎?',
            yes: textKey.morePromote,
            no: '否',
          }),
        ]);
      });
      break;
    case textKey.morePromote:
      return await context.send([messages.morePromote]);
    case textKey.competition:
      return await context.sendText(messages.competition);
    case textKey.score:
      return await context.sendText(messages.score);
    default:
      return await context.sendText(
        createString(messages.receive, {
          message: message,
        })
      );
  }
}

async function textHandler(context) {
  // rich-menu operations
  if ((await richMenuHandler(context)) !== false) return;

  await delay(500);
  if ((await skillMessageHandler(context)) !== false) return;

  await normalMessageHandler(context);
}

module.exports = async function App(context) {
  const { event } = context;
  switch (true) {
    case event.isText:
      return textHandler(context);
  }

  return await context.sendText(messages.unknown);
};
