const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    purpose : {
        type : String,
        required : true
    },
    expenditure : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    },

});

module.exports = new mongoose.model('Expense', expenseSchema);