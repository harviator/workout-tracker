const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
            },
            type: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
            },
            weight: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
            },
            sets: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
            },
            reps: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
            },
            duration: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
            },
            distance: {
                type: String,
                trim: true,
                required: "Enter the name of the exercise"
            },
        }
    ]

}) 