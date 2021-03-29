const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Param is not an Array');
  }
  if (arr.length === 0) {
    return arr;
  }
  
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (i === 0 || arr[i - 2] !== '--discard-next') {
        resArr.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        resArr.push(arr[i + 1]);
      }
      
    } else if (arr[i] === '--double-prev') {
      if (i === 0 || arr[i - 2] === '--discard-next') continue;
      resArr.push(arr[i - 1]);
    } else {
      resArr.push(arr[i])
    }
  }

  return resArr;
};

