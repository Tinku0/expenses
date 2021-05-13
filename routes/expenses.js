const express = require('express');
const expense = require('../models/expense');

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
        res.status(500).json({ status : false , msg : 'Something went wrong' });
    });

})

router.get('/',(req,res)=>{

    expense.find().then((expenses)=>{
        res.send(expenses);
    }).catch((err)=>{
        res.status(500).json({ status : false , msg : 'Something went wrong'})
    })

})

router.get('/:id',(req,res)=>{

    expense.findById(req.params.id).then((expense)=>{
        res.send(expense);
    }).catch((err)=>{
        res.status(500).json({ status : false , msg : 'Something went wrong'})
    })

})

module.exports = router;