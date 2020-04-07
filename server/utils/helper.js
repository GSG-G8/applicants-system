const firstName = (string) =>
  string.trim().toUpperCase().split(' ')[0].toString();

const lastName = (string) => {
  const strArr = string.trim().toUpperCase().split(' ');
  return strArr[strArr.length - 1].toString();
};

module.exports = { firstName, lastName };
