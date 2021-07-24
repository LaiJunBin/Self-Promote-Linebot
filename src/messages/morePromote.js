const textKey = require('../const/textKey');
const postbackKey = require('../const/postbackKey');

module.exports = {
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    title: '相關技能',
    text: '點選下列按鈕進行操作',
    actions: Object.keys(textKey.skills).map((key) => ({
      type: 'postback',
      label: textKey.skills[key],
      data: `type=${postbackKey.showSkill}&target=${key}`,
    })),
  },
};
