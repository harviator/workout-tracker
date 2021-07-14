const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const path =require('path')
const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//home routes
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'))

 
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))

 
});


app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'))

 
});

//api routes
app.get('api/workouts',(req,res)=>{
db.Workout

db.Workout.aggregate( [
  {
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" } ,
    }
  },
  
] ).then(dbWorkouts=>{
  res.json(dbWorkouts)
})


})
 // db.Workout.find({})
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
