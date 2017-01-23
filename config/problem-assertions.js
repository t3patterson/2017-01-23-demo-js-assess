let problemGroup = [
   // ex-1: convertInchesToCm()
	{
     //(SETUP-1)
		name: 'convertInchesToCm',   							//(SETUP-2a)                          //(SETUP-2b)
		globalFunc: typeof convertInchesToCm !== 'undefined' && convertInchesToCm || 'undefined-function',
		runTests: function(){
			
		   //(SETUP-4)
			let assertions = []

			//SETUP-5a
			let userOutput_1 = convertInchesToCm(1)
			//SETUP-5b
			let assert_1 = new Assertion({
            assertion_description: '<code>totalCm1  === 2.54</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 2.54,
            actual: userOutput_1
         })


			//PART 2
			let userOutput_2 = convertInchesToCm(20)

			let assert_2 = new Assertion({
            assertion_description: '<code>totalCm2 === 88.82</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 50.8,
            actual: userOutput_2
         })
			
			let userOutput_3 = convertInchesToCm(40)

			let assert_3 = new Assertion({
            assertion_description: '<code>totalCm3 === 101.6</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: 101.6,
            actual: userOutput_3
         })
			
			

			//SETUP-5c
			assert_1.testAssertion(userOutput_1, assert_1.expected)
			assert_2.testAssertion(userOutput_2, assert_2.expected)
			assert_3.testAssertion(userOutput_3, assert_3.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)

			return assertions
		},
		
	},
	
	// ex-2: makes10()
	{
		name: 'makes10',
		globalFunc: typeof makes10 !== 'undefined' && makes10 || 'undefined-function',
		runTests: function(){
			let assertions = []

			//PART 1
			let userOutput_1 = makes10(10, 3) 
			let assert_1 = new Assertion({
            assertion_description: '<code>makes10(10, 3) === false</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: false,
            actual: userOutput_1
         })
        
			
			//PART 2
			let userOutput_2 =  makes10(4, 6)
			let assert_2 = new Assertion({
            assertion_description: '<code> makes10(4, 6) === true </code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
				actual: userOutput_2
         })

			
			let userOutput_3 = makes10(5, 5);
			let assert_3 = new Assertion({
            assertion_description: '<code>makes10(5, 5) !== true</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 !== arg2 },
            expected: true,
				actual: userOutput_3
         })

			// let userOutput_4 = makes10(7, 5);
			// let assert_4 = new Assertion({
         //    assertion_description: '<code>makes10(5, 5) !== true</code>',
         //    assertion_predicate:  function(arg1, arg2){ return arg1 !== arg2 },
         //    expected: false,
			// 	actual: userOutput_4
         // })

			let userOutput_5 = makes10(-350, (200 + 33 + 77 + 50 ));
			// console.log('-----> ', userOutput_5)
			let assert_5 = new Assertion({
            assertion_description: '<code>makes10(-350, (200 + 33 + 77 + 50)) === true</code>',
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: true,
				actual: userOutput_5
         })


			
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)
			assert_3.testAssertion( userOutput_3 , 5 )
			assert_5.testAssertion( userOutput_5 , assert_5.expected )

			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_5)

			return assertions
		},
	},
	
	// ex-3: makeHtmlTag()
	{
		name: 'makeHtmlTag',
		globalFunc: typeof makeHtmlTag !== 'undefined' && makeHtmlTag || 'undefined-function',
		runTests: function(){
			let assertions = []

			//PART 1
			let userOutput_1 = makeHtmlTag('h1', 'A Never Ending Story');
			let assert_1 = new Assertion({
            assertion_description: "<code>makeHtmlTag('h1', 'A Never Ending Story') === '«h1»A Never Ending Story«/h1»'</code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '«h1»A Never Ending Story«/h1»',
            actual: userOutput_1
         })
        
			
			//PART 2
			let userOutput_2 =  makeHtmlTag('p', 'I really want to tell you this story');
			let assert_2 = new Assertion({
            assertion_description: "<code> makeHtmlTag('p', 'I really want to tell you this story') === '«p»I really want to tell you this story«/p»' </code>",
            assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
            expected: '«p»I really want to tell you this story«/p»',
				actual: userOutput_2
         })

				
			assert_1.testAssertion( userOutput_1, assert_1.expected)
         assert_2.testAssertion( userOutput_2, assert_2.expected)

			assertions.push(assert_1)
			assertions.push(assert_2)

			return assertions
		},
	},


]
