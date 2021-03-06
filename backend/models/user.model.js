const mongoose = require("mongoose")

const User = mongoose.model(
    "User",
    new mongoose.Schema({
       username: String,
       email: String,
       password: String,
       roles: [
            {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Role"
           }
       ],
       todos: [],
       savedJobs: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SavedJob"
            }
       ],
       codingGoal: Number,
       appGoal: Number,
       network: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Network"
            }
        ]
    })
)

module.exports = User