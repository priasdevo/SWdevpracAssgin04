const express = require('express');
const dotenv = require('dotenv');
const cookieParser=require('cookie-parser');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path:'./config/config.env'});

// Connect to database
connectDB();

const hospitals = require('./routes/hospital');
const auth = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/hospitals',hospitals);
app.use('/api/v1/auth',auth);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log("Server running in", process.env.NOED_ENV, ' mode on port ', PORT));

// Handle promise rejection
process.on('unhandledRejection',(err,Promise)=>{
    console.log(`Error: ${err.message}`);
    // close server
    server.close(()=>process.exit(1));
})