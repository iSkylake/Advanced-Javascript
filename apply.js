var person = {
	firstName: "Llorch",
	sayHi: function(){
		console.log("Hi " + this.firstName);
	},
	addition: function(a, b, c, d){
		console.log(this.firstName + " calculates: 1+2+3+4=" + (a+b+c+d));
	}
}

var notLlorch = {
	firstName: "NotLlorch"
}

person.addition.apply(notLlorch, [1, 2, 3, 4]);