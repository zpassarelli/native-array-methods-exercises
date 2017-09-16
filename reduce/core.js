function sum (array) {
  return array.reduce(function(prev,curr){
    return prev + curr;
  });
}

function productAll (array) {
  return array.reduce(function(prev,curr){
    return prev * curr.reduce(function(pre2,cur2){
      return pre2 * cur2;
    },1);
  },1);
}

function objectify (array) {
  return array.reduce(function(prev,curr){
    prev[curr[0]] = curr[1];
    return prev;
  },{})
}

function luckyNumbers (array) {
  return array.reduce(function(prev,curr,ind){
    if(array.length - 1 === ind){
      return prev + 'and ' + curr
    } else {
      return prev + curr + ', ';
    }
  },'Your lucky numbers are: ');

}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
