function multiplyBy10 (array) {
  return array.map(function(val){
    return val*10;
  });
};

function shiftRight (array) {
  var newarr = array.map(function(val,i,arr){
    if(i === 0){
      return arr[arr.length-1];
    } else {
      return arr[i-1];
    }
  });
  return newarr;
};

function onlyVowels (array) {
  return array.map(function(val){
    return val.replace(/[^aeiou]/gi,'');
  });
};

function doubleMatrix (array) {
  return array.map(function(val){
    return val.map(function(nums){
      return nums * 2;
    });
  });
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
