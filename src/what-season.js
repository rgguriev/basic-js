const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let seasons = ['spring', 'summer', 'autumn', 'winter'];
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  let g = date.getMonth();
  if (g >= 2 && g <= 4) return seasons[0];
  if (g >= 5 && g <= 7) return seasons[1];
  if (g >= 8 && g <= 10) return seasons[2];
  return seasons[3];
};
