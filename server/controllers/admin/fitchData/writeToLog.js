const fs = require('fs');
const { join } = require('path');

const writToLog = (type, json) => {
  const logEror = JSON.stringify({ type, json });
  fs.writeFileSync(join(__dirname, 'bugs.log'), `\n ${logEror}`, {
    flag: 'a',
  });
};

module.exports = writToLog;
