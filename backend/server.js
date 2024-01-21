const express = require('express');
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const dotenv = require("dotenv").config()
const cors = require('cors');
const taskRoutes = require("./routes/taskRoute")
const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin : ["http://localhost:3000","https://mern-task-app-oq9p.onrender.com","https://mern-task-app-nzij.onrender.com"]
}));

app.use("/api/tasks",taskRoutes)

mongoose
.connect(process.env.MONGO_URI)
.then(() =>
{
    app.listen(PORT, () => 
    {
        console.log(`Server is running on ${PORT}`)
    });
})
.catch((error) =>
{
    console.log(error)
})

