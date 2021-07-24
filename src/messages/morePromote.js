const textKey = require('../const/textKey');

module.exports = {
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    title: '相關技能',
    text: '點選下列按鈕進行操作',
    actions: Object.keys(textKey.skills).map((key) => ({
      type: 'message',
      label: textKey.skills[key],
      text: key,
    })),
  },
};
