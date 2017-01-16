module.exports = function Cart(oldCart){
	this.items = oldCart.items || {};
	this.totalQty = oldCart.totalQty || 0;
	this.totalPrice = oldCart.totalPrice || 0;
	//this.types = oldCart.types || [];

	this.add= function(item, id){
		var storedItem = this.items[id];
		if(!storedItem){
			storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
			//this.types.push(storedItem);
		}
		//console.log(this.types);
		storedItem.qty++;
		storedItem.price = storedItem.item.price * storedItem.qty;
		this.totalQty++;
		this.totalPrice += storedItem.item.price;
	}

	this.generateArray = function(){
		var arr = [];
		for (var id in this.items){
			//console.log(id);
			//console.log(this.items[id]);
			arr.push(this.items[id]);
		}
		console.log(arr);
		return arr;
	}
};