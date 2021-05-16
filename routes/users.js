const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.post('/',(req,res) => {
    
    user = new User({ 
        name : req.body.name
    });

    user.save(user).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.status(500).json({ status : false , msg : 'Something went wrong: ',err });
    })

})

router.get('/',(req,res) => {

    User.find().then((users)=>{
        res.send(users);
    }).catch((err)=>{
        console.log(err);
    })

})

router.delete('/:id',(req,res) => {

    User.findById(req.params.id).then((user)=>{
        if(user == null){
            res.status(400).json({ status : false , msg :`There exists no user with id ${req.params.id}` });
        }else{
            User.findByIdAndRemove(req.params.id).then((user)=>{
                res.status(200).json({ status : true , msg : 'Deleted succesfully'});
            }).catch((err)=>{
                res.status(500).json({ status : false , msg : 'Something went wrong: ',err });
            })
        }
    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;