module.exports = function(multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = -Infinity;

  var maxValue = Math.pow(10, digits);

  for(var i = 1; i < maxValue; i++) {
    for(var j = 1; j < maxValue; j++) {
      var product = i * j;

      if(isPalindrome(product) && product > palindromeNumber) {
        factor_0 = i;
        factor_1 = j;
        palindromeNumber = product;
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };

  function isPalindrome(product) {
    var numberString = '' + product;
    var reverseString = numberString
                        .split('')
                        .reverse('')
                        .join('');

  return numberString === reverseString;

  }
};