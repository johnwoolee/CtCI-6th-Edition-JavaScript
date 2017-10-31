var urlify = function(str, length) {
  var subStr = str.substring(0, length);
  // or use str.trim

	var strArr = subStr.split('');
  
  var result = strArr.map((item) => {
  	return (item === ' ') ? '%20' : item;
  })
  
  return result.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
