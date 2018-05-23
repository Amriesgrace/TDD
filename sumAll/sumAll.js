var sumAll = function(a, b) {
	
	if( a < 0|| b < 0){return "ERROR";} 
	
	if(typeof a !== "number" || typeof b !== "number"){ return "ERROR";}
	
	if( a > b){
		var x = a ;
		a = b; 
		b = x;
	}
	let finalSum = 0;

	for (var i = a; i < b + 1; i++) {
		//console.log(i)
		finalSum+= i;
		console.log(finalSum)
	}
	return finalSum;
}
sumAll(1,4);

module.exports = sumAll
