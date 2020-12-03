const { response } = require('express');
const {Habit} = require('../models/Habit');
const habitRoutes = require('../routes/habitRoutes');

module.exports.getHabits = (req,res) =>{
    Habit.find()
    .then(habits => res.json(habits))
    .catch(err => res.json(err))
}
module.exports.showHabit = (req,res) =>{
    Habit.findById(req.params.id)
    .then(habit => res.json(habit))
    .catch(err=>res.json(err))
}
module.exports.createHabit = (req,res)=>{
    Habit.create(req.body)
    .then(habit=>res.json(habit))
    .catch(err=>res.json(err))
}
module.exports.editHabit = (req,res) =>{
    Habit.findOneAndUpdate({_id:req.params.id},req.body, {new:true, runValidators:true})
    .then(habit => res.json(habit))
    .catch(err=>res.json(err))
}
module.exports.deleteHabit = (req,res) =>{
    Habit.deleteOne({_id:req.params.id})
    .then(habit => res.json(habit))
    .catch(err=>res.json(err))
    
}