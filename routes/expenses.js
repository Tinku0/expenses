const express = require('express');
const expense = require('../models/expense');

const router = express.Router();

const Expense = require('../models/expense')

router.post('/',(req,res)=>{

    expense - new Expense({

        name : req.params.name,
        purpose : req.params.purpose,
        expenditure : req.params.expenditure,
        date : req.params.date

    });

    expense.save(expense).then((expense)=>{
        res.send(expense);
    }).catch((err)=>{
        res.status(500).json({ status : false , msg : 'Something went wrong' });
    });

})

module.exports = router;