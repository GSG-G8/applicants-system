const fs = require('fs');
const { join } = require('path');

const writToLog = (erors) => {
  const logEror = JSON.stringify(erors);
  fs.writeFileSync(join(__dirname, 'bugs.log'), `\n ${logEror}`, {
    flag: 'a',
  });
};

module.exports = writToLog;
