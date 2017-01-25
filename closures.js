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

function Nintendo(){
	var games = ["Smash Bros", "Mario Kart"]
	return{
		getGames: function(){
			console.log(games);
		},
		addGames: function(game){
			games.push(game);
			console.log(games);
		}
	}
}

console.log("\nCOLLECTION I");
collection1 = Nintendo();
collection1.getGames();
collection1.addGames("Pokemon");

console.log("\nCOLLECTION II");
collection2 = Nintendo();
collection2.getGames();