const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const Expense = require('../models/expense')

router.post('/',(req,res)=>{

    expense = new Expense({

        name : req.body.name,
        purpose : req.body.purpose,
        expenditure : req.body.expenditure,
        date : req.body.date

    });

    expense.save(expense).then((expense)=>{
        res.send(expense);
    }).catch((err)=>{
        res.status(500).json({ status : false , msg : 'Something went wrong: ',err });
    });

})

router.get('/',(req,res)=>{

    Expense.find().then((expenses)=>{
        let total = 0;
        expenses.forEach(function (item, index) {
            total = total + item.expenditure ;
          });
        res.status(200).json({ expenses : expenses , Total : total });
    }).catch((err)=>{
        res.status(500).json({ status : false , msg : 'Something went wrong'})
    })

})

router.get('/:id',(req,res)=>{

    Expense.findById(req.params.id).then((expense)=>{
        res.send(expense);
    }).catch((err)=>{
        res.status(500).json({ status : false , msg : 'Something went wrong'})
    })

})

router.get('/byname/:name',(req,res)=>{    

    var query = { name : req.params.name };
    Expense.find(query).then((expense)=>{
        let total = 0;
        expense.forEach(function (item, index) {
            total = total + item.expenditure ;
          });
        res.status(200).json({ Expense : expense , Total : total });
    })

})

router.delete('/deleteExpenseById/:id',(req,res)=>{

    if(mongoose.Types.ObjectId.isValid(req.params.id)){
        Expense.findById(req.params.id).then((expense)=>{
            if(expense == null){
                res.status(400).json({ status : false , msg : `There exists no expense with id ${req.params.id}` });
            }else{
                Expense.findByIdAndRemove(req.params.id).then((expense)=>{
                    res.status(200).json({ status : true , msg : 'Expense Deleted succesfully'});
                }).catch((err)=>{
                    res.status(500).json({ status : false , msg : 'Something went wrong: ' });
                })
            }
        })
    }else{
        res.status(400).json({ status : false , msg : 'id pattern mismatched'});
    }

})

module.exports = router;