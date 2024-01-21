const express = require('express');
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const cors = require('cors');
const taskRoutes = require("./routes/taskRoute")
const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin : ["http://localhost:3000","https://mern-task-app-oq9p.onrender.com","https://mern-task-app-oq9p.onrender.com/"]
}));

app.use("/api/tasks",taskRoutes)

mongoose
.connect("mongodb://127.0.0.1:27017/Task-Manager")
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

