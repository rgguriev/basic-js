const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    let current = 1;

    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          current += this.calculateDepth(arr[i]);
        }
        if (current > maxDepth) {
          maxDepth = current
        }
        current = 1;
        
        
      }
    }

    return maxDepth;
  }
};