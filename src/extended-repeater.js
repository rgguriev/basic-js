module.exports = function repeater(str, options) {

  let res = ``;

  let separator = options.separator;
  let add = options.addition;
  let repeat = options.repeatTimes;
  let addRepeat = options.additionRepeatTimes;
  let addSeparator = options.additionSeparator;
  
  if (!separator) {
    separator ='+';
  }
  if (!repeat) {
    repeat = 1;
  }
  if (!addRepeat && add) {
    addRepeat = 1;
  }
  if (!addSeparator) {
    addSeparator = '|'
  }


  for (let i = 0; i < repeat; i++) {
    res += str;
    if (addRepeat) {
      for (let j = 0; j < addRepeat; j++) {
        res += add;
        if (j !== addRepeat - 1) {
          res += addSeparator;
        }
      }
    }
    if (i !== (repeat - 1)) {
      res += separator;
    }
  }

  return res;
};

