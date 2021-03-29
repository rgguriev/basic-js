const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;
  let dt = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      members[i] = members[i].replace(/\s/g, '');
      dt.push(members[i].charAt(0).toUpperCase());
    }
  }
  return dt.sort().join('');
};