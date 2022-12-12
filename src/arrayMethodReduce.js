'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let index = 0;
    let accumulator = initialValue;

    if (arguments.length === 1) {
      accumulator = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
