
/* convertInchesToCm() 
 * =================================
 * write a function that accepts a number
 * value for inches and returns 
 * the equivalent conversion value in cm.
 *
 * HINT: there are 2.54 cm in an inch  
 */   

var convertInchesToCm = function(numbrrr){
	return numbrrr * 2.54;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var totalCm1 = convertInchesToCm(1)
console.assert( totalCm1  === 2.54 );

var totalCm2 = convertInchesToCm(20)
console.assert( totalCm2 === 50.8);

var totalCm3 = convertInchesToCm(40)
console.assert( totalCm3 === 101.6);
