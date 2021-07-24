const textKey = require('../../const/textKey');

const data = [
  'AWS EC2',
  'AWS S3',
  'AWS IAM',
  'AWS Lambda',
  'AWS API Gateway',
  'AWS SNS',
  'AWS Rekognition',
  'AWS DynamoDB',
  'AWS RDS',
  'CloudFlare',
  'Firebase',
  'GCP',
  'Google Analytics',
];

module.exports = `${textKey.skills.cloud}:\n${data.join('\n')}`;
