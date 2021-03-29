const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (!position) {
      this.arr = [];
      throw Error()
    }
    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = chainMaker;
