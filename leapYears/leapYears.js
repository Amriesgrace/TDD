var leapYears = function(year) {

	if( ((year % 4) == 0) && (  (year % 400 == 0) || (year % 100 !== 0) ) ){
		return true;
		console.log("it is a leap year");
	}
	else{
		return false;
		console.log("It's not a leap year")
	}
}
leapYears(1996)

module.exports = leapYears
