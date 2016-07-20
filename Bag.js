"use strict";

var bag = (function(){
	var bag = [];
	return{
		AddItem: function(items){
			bag.push(items);
			console.log("Item added")
		},
		
		BagCount: function(){
			return bag.length;
		},
		
		BagItems: function(){
			console.log(bag);
		}
		
	};
})();
console.log("-----------------------------------------");
bag.AddItem("apples");
bag.AddItem("oranges");
bag.AddItem("tissues");
console.log("bag size: " + bag.BagCount());
bag.BagItems();
console.log(bag.bag);
console.log("-----------------------------------------");