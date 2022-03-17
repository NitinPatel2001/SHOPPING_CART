const route = require('express').Router()
const User = require('../../db').user

route.get('/',(req,res)=>{
    //that will send all the data from the user table
    
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Couldn't receive users",
            })
        })
})

route.post('/',(req,res) => {

    User.create({
        name: req.body.name,
    })
        .then((user)=>{
            res.status(201).send(user)
        })
        .catch((err)=>{
            res.status(501).send({
                error: 'Could Not add User'
            })
        })
})

exports = module.exports = route