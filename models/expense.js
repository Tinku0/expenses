const mongoose = require('mongoose');

const moment = require('moment'); //moment


var DateOnly = require('mongoose-dateonly')(mongoose);

var utcDate = moment.utc().toDate();

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
        type : String,
        // default: new Date()
        required : true
        // default:new Date("<YYYY-mm-dd>"),
        // max:new Date()
    },

});

module.exports = new mongoose.model('Expense', expenseSchema);