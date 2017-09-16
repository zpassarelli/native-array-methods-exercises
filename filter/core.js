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
    return vowelCheck(val);
  });
}

function vowelCheck(str){
  var vowel = 'x';
  for(var i = 0, len = str.length; i < len; i++){
    if(vowel == 'x'){
      if('aeiou'.includes(str[i])){
        vowel = str[i];
      }
    } else {
      if('aeiou'.includes(str[i])){
        if(vowel != str[i]){
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
