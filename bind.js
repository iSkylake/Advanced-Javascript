var llorch = {
	firstName: "Llorch",
	sayHi: function(){
		console.log("Hi " + this.firstName);
	},
	addition: function(a,b,c,d){
		console.log(this.firstName + " calculated 1+2+3+4=" + (a+b+c+d));
	},
	bindTimeOut: function(){
		setTimeout(function(){
			console.log("\n======================\nSET TIME OUT WITH BIND\n======================\n");
			console.log("Hi " + this.firstName + " it binds");
		}.bind(this), 1000);
	},
	timeOut: function(){
		setTimeout(function(){
			console.log("\n=========================\nSET TIME OUT WIHTOUT BIND\n=========================\n");
			console.log("Hi " + this.firstName + " not bind");
		}, 1000);
	}
}

var hana = {
	firstName: "Hana"
}

console.log("\n=============\nPASS ALL ARGS\n=============\n");

var hanaAdd = llorch.addition.bind(hana, 1, 2, 3, 4);
hanaAdd();

console.log("\n==============\nPASS SOME ARGS\n==============\n");

var hanaAdd2 = llorch.addition.bind(hana, 1, 2);
hanaAdd2(3, 4);

llorch.bindTimeOut();

llorch.timeOut();