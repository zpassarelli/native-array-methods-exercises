function onlyEven (array) {
  return array.filter(function(val){
    return !(val%2);
  });
}

function onlyOneWord (array) {
  return array.filter(function(val){
    return val.indexOf(' ') === -1;
  });
}

function positiveRowsOnly (array) {
  return array.filter(function(val){
    return !(val.some(function(val2){
      return val2 < 0;
    }));
  });
}

function allSameVowels (array) {
  return array.filter(function(val){

  });
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
