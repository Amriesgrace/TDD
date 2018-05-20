var repeatString = function(str, num) {
	if( num < 0){return ("ERROR")}
	var result = "";
	
	for (var i = 0; i < num; i++){
		 result += str;
	}
	return result;
}
repeatString('hey', 3);

module.exports = repeatString
