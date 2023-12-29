const mongoose = require('mongoose');

const bmiRecordSchema = new mongoose.Schema({
    weight: Number,
    height: Number,
    age: Number,
    gender: String,
    unit: String,
    bmi: Number,
    timestamp: Date,
});

const BMIRecord = mongoose.model('BMIRecord', bmiRecordSchema);

module.exports = BMIRecord;