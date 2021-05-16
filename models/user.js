const mongoose = require('mongoose');

const moment = require('moment'); //moment


var DateOnly = require('mongoose-dateonly')(mongoose);

var utcDate = moment.utc().toDate();

const userSchema = new mongoose.Schema({
    

    name : {
        type : String,
        required : true
    },
    date : {
        type : String,
        default: new Date()
    },

});

module.exports = new mongoose.model('User', userSchema);