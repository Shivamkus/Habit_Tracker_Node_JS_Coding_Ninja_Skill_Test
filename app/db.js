const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://0.0.0.0:27017/habitTrackerApp');
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"));
    .catch((e)=>console.log("Not Connect Mongodb", e));
}
