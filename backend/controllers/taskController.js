const Task = require('../models/taskModel')

const createTask = async (req,res) =>
{
    try
    {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    }catch(error)
    {
        res.json({msg:error.message});
    }
}

const getTasks = async (req,res) =>
{
    try
    {
        const task = await Task.find();
        res.status(200).json(task);
    }catch(error)
    {
        res.status(500).json({msg: error.message});
    }
   
}

const getTask = async (req,res) =>
{
    try
    {
        const task = await Task.findById(req.params.id);
        if(!task)
        {
            return res.status(404).json(`NO task with id ${req.params.id}`)
        }else
        {
            res.status(200).json(task);
        }
    }catch(error)
    {
        res.status(500).json({msg:error.message})
    }
    
}

const deleteTask = async (req,res) =>
{
    try
    {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task)
        {
            return res.status(404).json(`NO task with id ${req.params.id}`)
        }else
        {
            res.status(200).send("Task deleted");
        }
    }catch(error)
    {
        res.status(500).json({msg:error.message})
    }
}

const updateTask = async (req,res) =>
{
    try
    {
        const task = await Task.findByIdAndUpdate({_id : req.params.id},req.body,{new:true, runValidators:true});
        if(!task)
        {
            return res.status(404).json(`NO task with id ${req.params.id}`)
        }
        res.status(200).json(task);
    }catch(error)
    {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {createTask,getTasks,getTask,deleteTask,updateTask}