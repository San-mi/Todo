const Activity=require("../models/activity");
const createActivity=(req,res)=>{
    if (!req.body || !req.body.activity_id || !req.body.todo_description) {
        return res.status(400).json({ error: "Missing required fields: activity_id or todo_description" });
    }
    // Validate activity_id is a number
    const activityId = Number(req.body.activity_id);
    if (isNaN(activityId)) {
        return res.status(400).json({ error: "activity_id must be a number" });
    }
    Activity.create({
        activity_id: activityId,
        todo_description: req.body.todo_description
    })
    .then(data=>{
        res.status(200).json({
            message: "Activity created successfully",
        });
    })
    .catch(err=>{
        res.status(400).json({
            error: err.message
        });
    });
};
const getActivity=(req,res)=>{
    Activity.find()
    .then(data=>{
        res.status(200).json({
            message: "Activities retrieved successfully",
            data: data
        });
    })
    .catch(err=>{
        res.status(400).json({
            error: err.message
        });
    });
};
const deleteActivity=(req,res)=>{
    // Validate id is a number
    const activityId = Number(req.params.id);
    if (isNaN(activityId)) {
        return res.status(400).json({ error: "activity_id must be a number" });
    }
    Activity.findOneAndDelete({ activity_id: activityId })
    .then(data=>{
        if (!data) {
            return res.status(404).json({ error: "Activity not found" });
        }
        res.status(200).json({ message: "Activity deleted successfully" });
    })
    .catch(err=>{
        res.status(400).json({ error: err.message });
    });
};
module.exports={createActivity, getActivity, deleteActivity};