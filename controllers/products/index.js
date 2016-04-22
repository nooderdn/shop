/**
 * A very simple product editor
 */
'use strict';
var Product = require('../../models/productModel');

module.exports = function(router) {

    /**
     * Retrieve a list of all products for editing.
     */
    router.get('/', function(req, res) {

        Product.find(function(err, prods) {
            if (err) {
                console.log(err);
            }
            prods.forEach(function(prod) {
                prod.prettyPrice = prod.prettyPrice();
            });
            var model = {
                products: prods
            };
            res.render('products', model);
        });

    });


    /**
     * Add a new product to the database.
     * **** PLEASE READ THE COMMENT BELOW! ****
     */
    // router.post('/', function(req, res) {
    //     var name = req.body.name && req.body.name.trim();
    //     var price = parseFloat(req.body.price, 10);
    //     var discount = parseFloat(req.body.discount, 10);
    //     var image_link = req.body.image_link.trim();
    //     var description = req.body.description;
    //     //Some very lightweight input checking
    //     if (name === '' || isNaN(price)) {
    //         res.redirect('/products#BadInput');
    //         return;
    //     }
    //
    //     var newProduct = new Product({
    //         name: name,
    //         price: price,
    //         discount: discount,
    //         image_link: image_link,
    //         description: description
    //     });
    //
    //     //Show it in console for educational purposes...
    //     console.log(newProduct.whatAmI());
    //
    //     /* The call back recieves to more arguments ->product/s that is/are added to the database
    //      and number of rows that are affected because of save, which right now are ignored
    //      only errors object is consumed*/
    //     newProduct.save(function(err) {
    //         if (err) {
    //             console.log('save error', err);
    //         }
    //
    //         res.redirect('/products');
    //     });
    // });

    /**
     * Delete a product.
     * @paaram: req.body.item_id Is the unique id of the product to remove.
     */
    router.delete('/', function(req, res) {
        console.log('Da vao ham delete!');
    });


    /**
     * Edit a product.
     * Not implemented here
     */
    router.put('/', function(req, res) {
        console.log('PUT received. Ignoring.');
        res.redirect('/products');
    });

};
