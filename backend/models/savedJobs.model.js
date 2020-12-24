const mongoose = require("mongoose")

const SavedJobs = mongoose.model(
    "SavedJobs",
    new mongoose.Schema({
       location: String,
       language: String,
       title: String,
       heardBack: {
           status: Boolean,
           scheduledInterview: Date,
           closed: Boolean
        }, 
        appliedTo: {
            appStatus: Boolean,
            date: Date,
            notes: [],
        }
    })
)

module.exports = SavedJobs