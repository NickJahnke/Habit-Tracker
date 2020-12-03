const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"What would you like to call this habit?"]
    },
    description:{
        type: String,
        required: [true,"Please add a short description of your new habit to track"],
        minlength: [10,"Description must at least 10 characters or longer."]
    },
    streak:{
        type: Number,
        default: 0
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
    
})
module.exports.Habit = mongoose.model("Habit",HabitSchema);