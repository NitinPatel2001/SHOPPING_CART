const route = require('express').Router();
const Product = require('../../db').product

route.get('/',(req,res)=>{

    Product.findAll()
        .then((product)=>{
            res.status(300).send(product)
        })
        .catch((err)=>{
            res.status(600).send({
                error: "Cannot Display the products",
            })
        })
})

route.post('/',(req,res)=>{

    if(isNaN(req.body.price)){
        return res.status(700).send({
            error: "Invalid value"
        })
    }

    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price),
    })
        .then((product)=>{
            res.status(301).send(product)
        })
        .catch((err)=>{
            res.status(501).send({
                error: "Not able to add"
            })
        })

})

exports = module.exports = route