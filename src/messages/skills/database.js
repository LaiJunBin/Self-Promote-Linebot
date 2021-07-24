const textKey = require('../../const/textKey');

const data = [
  'MySQL / MariaDB',
  'MongoDB',
  'Cloud Firestore',
  'AWS DynamoDB',
  'Redis',
  'SQLite',
];

module.exports = `${textKey.skills.database}:\n${data.join('\n')}`;
