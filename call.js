var person = {
	firstName: "Llorch",
	sayHi: function(){
		console.log("Hi " + this.firstName);
	},
	verifyThis: function(){
		console.log("this === person: " + (this === person));
	},
	computer:{
		sayHello: function(){
			console.log("Hello " + this.firstName);
		},
		verifyThis: function(){
			console.log("this === person: " + (this === person));
		}
	}
}

person.sayHi();
person.verifyThis();

console.log("\n=====================\nWITHOUT CALL FUNCTION\n=====================\n");

person.computer.sayHello();
person.computer.verifyThis();

console.log("\n==================\nWITH CALL FUNCTION\n==================\n");

person.computer.sayHello.call(person);
person.computer.verifyThis.call(person);

console.log("\n======================\nUSING CALL FOR METHODS\n======================\n")

var llorch = {
	firstName: "Llorch",
	addition: function(a, b, c, d){
		console.log(this.firstName + " calculated: " + (a+b+c+d));
	}
}

var hana = {
	firstName: "Hana"
}

llorch.addition.call(hana, 1, 2, 3, 4);