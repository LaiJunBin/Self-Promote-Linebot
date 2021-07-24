const textKey = require('../../const/textKey');

const data = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'PHP',
  'Python',
  'VB.NET',
  'SQL',
  'GraphQL',
  '...更多相關程式語言 (如 Java、C / C++、Go)',
];

module.exports = `${textKey.skills.languages}:\n${data.join('\n')}`;
