// PART 03 : makeHtmlTag()

// Write a function called `makeHtmlTag()` that takes two strings as input
// The first imput is the tag name and the second input 
// is the content inside the tag

var makeHtmlTag = function(tagName, txtInput){
	var openingTag = '«' + tagName + '»'
	var closingTag = '«/' + tagName + '»'

	var htmlSyntaxString = openingTag + txtInput + closingTag
   console.log(htmlSyntaxString)
	
	return htmlSyntaxString
} 



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( makeHtmlTag('h1', 'A Never Ending Story') === '«h1»A Never Ending Story«/h1»' )
console.assert( makeHtmlTag('p', 'I really want to tell you this story') === '«p»I really want to tell you this story«/p»' )

