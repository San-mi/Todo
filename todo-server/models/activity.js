const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activity_id:{
        type: Number,
        required: true,
        unique: true
    },
    todo_description:{
        type: String,
        required: true
    }
});
module.exports=mongoose.model('Activity',activitySchema);