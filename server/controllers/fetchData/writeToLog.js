const fs = require('fs');
const { join } = require('path');

const writeToLog = (errors) => {
  const logError = JSON.stringify(errors);
  fs.writeFileSync(join(__dirname, 'bugs.log'), `\n ${logError}`, {
    flag: 'a',
  });
};

module.exports = writeToLog;
