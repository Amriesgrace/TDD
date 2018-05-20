var reverseString = function(str) {
	var splitString = str.split("");
	var reverseString = splitString.reverse();
	var joinString = reverseString.join("");
	return joinString;
}
reverseString("hello");
module.exports = reverseString