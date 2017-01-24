function outerFunction(){
	var outerVar = "This is the outer variable";
	return function innerFunction(){
		return outerVar;
	}
}

console.log(outerFunction()());
var outer = outerFunction();
console.log(outer());

function power(a){
	return function(b){
		return Math.pow(a, b);
	}
}

var powerVar = power(5);
console.log(powerVar(2));