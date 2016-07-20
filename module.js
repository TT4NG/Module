"use strict";

//object literals module pattern
var Module = {
	
	User: {
		Admin: true,
		FirstName: "Thomas"
		
	},
	
	Greeting: function(){
		console.log("Welcome back: " + this.User.FirstName);
		
	},
	
	TitleCheck: function(){
		console.log("This user is an: " + (this.User.Admin ? "Administrator": "Temporary"));
	}
	
};
console.log("-----------------------------------------");
Module.Greeting();
Module.TitleCheck();
console.log();
console.log("second example");

//Module Pattern, with private/anonymous closures
var Module2 = (function(){
	var counter = 0;
	return{
		incrementCounter: function(){
			return counter++;
		},
		
		ViewCounter: function(){
			console.log("current value: " + counter);
		},
		
		resetIncrement: function(){
			console.log("counter value: " + counter);
			counter = 0;
		}
	};
})();


Module2.incrementCounter();
Module2.incrementCounter();

//wont output
console.log(Module2.counter);
//will access the functions and variables
Module2.ViewCounter();
Module2.resetIncrement();
console.log("-----------------------------------------");


