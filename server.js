const express = require("express")
const dotenv = require("dotenv").config();
const port = process.env.port || 5000;
const app = express();
app.use('/',require('./routes/contactRoutes'));
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})