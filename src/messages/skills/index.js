const textKey = require('../../const/textKey');

const objects = {};
for (let key in textKey.skills) {
  objects[key] = require(`./${key}`);
}

module.exports = objects;
