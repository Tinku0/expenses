const express = require('express');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config({path:'./config/config.env'});

const app = express();

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}).then(()=>{
    console.log('Database connected');
}).catch(err=>{
    console.log(err);
})

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

// Routes
app.use('/api/expense',expenseRoute);

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
});