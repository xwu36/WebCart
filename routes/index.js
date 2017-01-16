var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, docs){
		var productChunks = [];
		var chunkSize = 3;
		for(var i = 0; i < docs.length; i += chunkSize){
			productChunks.push(docs.slice(i, i + chunkSize));
		}
		res.render('index', { title: 'Shoppingcart', products: productChunks });
	});
});

router.get('/add-to-cart/:id', function(req, res, next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	Product.findById(productId, function(err, product){
		if(err){
			return res.redirect('/');
		}
		cart.add(product, product.id);
		//console.log(cart);
		req.session.cart = cart;
		res.redirect('/');
	});
});

router.get('/shopping-cart', function(req, res, next){
  if(!req.session.cart){
  	return res.render('shopping-cart', {products:null});
  }
  var cart = new Cart(req.session.cart);
  var arr = cart.generateArray();
  res.render('shopping-cart', { products: arr, totalPrice: cart.totalPrice });
});

module.exports = router;
