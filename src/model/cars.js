const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    id:String,
    brand: String,
    model: String,
    version: String,
    year: Number,
    km: Number,
    transmitionType: String,
    salePrice: Number
})

const cars = mongoose.model('cars', DataSchema)
module.exports = cars;