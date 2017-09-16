// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function(val){
    return val % 2 === 0;
  })
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  var type = typeof input[0];
  return input.every(function(val){
    return typeof val === type;
  })
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function(val){
    if(Array.isArray(val) === false){
      return false;
    }
    return val.every(function(innerVal){
      return innerVal > 0;
    });
  });
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input.every(function(val){
    return (typeof val === 'string') && vowelCheck(val);
  });
};

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
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
