import mongoose from "mongoose";

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
export default cars;