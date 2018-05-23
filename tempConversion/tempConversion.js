var ftoc = function(temp) {
  	const fc = (( (temp -32 ) *5 ) / 9);
  	let fresult = Math.round(fc * 10)/10;
  	//console.log (fresult);
  	return fresult;
}

var ctof = function(temp) {
  	const cf = ( (temp * 9/5)  + 32 );
   	let cresult = Math.round(cf * 10) /10;
  	console.log(cresult);
  	return cresult;
}

module.exports = {
  ftoc,
  ctof
}
