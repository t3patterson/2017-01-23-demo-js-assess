
/**
 * PART 02 : makes10()
 *
  * write a function called makes10(). 
 * it should take two numbers as inputs
 * if the numbers add up to 10, the function
 * should return true. 

 * if the two number inputs do not add up to 10
 * then, it should return false
 */

var makes10 = function(num1, num2){
	// console.log(num1)
	// console.log(num2)
	// console.log(num1 + num2)
	// console.log('---')
	if(num1 + num2 === 10){
		return true
	} else {
		return false
	}
}

console.assert( makes10(10, 3) === false );
console.assert( makes10(4, 6) === true );
console.assert( makes10(5, 5) === true );
// console.assert( makes10(7, 5) !== true );
console.assert( makes10(-350, (200 + 33 + 77 + 50) ) === true );


