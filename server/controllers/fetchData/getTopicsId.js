const topics = require('./topics');

const topicId = [];

topics.map(({ id }) => {
  topicId.push(id);
});

module.exports = topicId;
