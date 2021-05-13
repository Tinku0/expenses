const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

require("dotenv").config();

// dotenv.config({path:'/'});

const expenseRoute = require('./routes/expenses')

const app = express();

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('Database connected');
}).catch(error=>{
    console.log(error);
})

const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

// Routes
app.use('/api/expenses',expenseRoute);

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
});