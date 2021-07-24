const messages = require('./messages');
const { delay, createString, parseQuery } = require('./lib/utils');
const textKey = require('./const/textKey');
const postbackKey = require('./const/postbackKey');

async function textHandler(context) {
  const { event } = context;
  const { text: message } = event;

  await delay(500);

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

async function postbackHandler(context) {
  const { event } = context;
  const { data } = event.postback;
  const query = parseQuery(data);

  switch (query.type) {
    case postbackKey.switchRichMenu:
      return await context.linkRichMenu(process.env[query.target]);
    case postbackKey.showSkill:
      await context.sendText(messages.skills[query.target]);
      delay(1000).then(() => {
        context.push([messages.morePromote]);
      });
  }
}

module.exports = async function App(context) {
  const { event } = context;
  switch (true) {
    case event.isText:
      return textHandler(context);
    case event.isPostback:
      return postbackHandler(context);
  }

  return await context.sendText(messages.unknown);
};
