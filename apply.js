var person = {
	firstName: "Llorch",
	sayHi: function(){
		console.log("Hi " + this.firstName);
	},
	addNumbers: function(a, b, c, d){
		console.log(this.firstName + " adds: " + (a+b+c+d));
	}
}

var notLlorch = {
	firstName: "NotLlorch"
}

person.addNumbers.apply(notLlorch, [1, 2, 3, 4]);