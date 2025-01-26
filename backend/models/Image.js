const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    imagePath: { type: String, required: true }
});

module.exports = mongoose.model('Upload', imageSchema);