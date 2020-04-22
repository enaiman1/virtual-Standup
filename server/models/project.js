const mongoose = require('mongoose')

const projectSchema = new mongoose.schema({
    name: {type: String },
    description: { type: String },
    isActive: { type: Boolean, default: true }
})