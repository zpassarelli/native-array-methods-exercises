function sum (array) {
  return array.reduce(function(pre,cur){
    return pre + cur;
  });
}

function productAll (array) {
  return array.reduce(function(pre,cur){
    return cur.reduce(function(pre2,cur2){
      return pre2 * cur2;
    });
  });
}

function objectify (array) {
  return array;
}

function luckyNumbers (array) {
  return array;

}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
