var person = {
	firstName: "Llorch",
	sayHi: function(){
		console.log("Hi " + this.firstName);
	},
	determineCotext: function(){
		console.log("this === person: " + (this === person));
	},
	computer:{
		sayHello: function(){
			console.log("Hello " + this.firstName);
		},
		determineCotext: function(){
			console.log("this === person: " + (this === person));
		}
	}
}

person.sayHi();
person.determineCotext();

console.log("\n=====================\nWITHOUT CALL FUNCTION\n=====================\n");

person.computer.sayHello();
person.computer.determineCotext();

console.log("\n==================\nWITH CALL FUNCTION\n==================\n");

person.computer.sayHello.call(person);
person.computer.determineCotext.call(person);