import connection from "../connection";

const DataSchema = new connection.Schema({
    id:String,
    brand: String,
    model: String,
    version: String,
    year: Integer,
    km: Integer,
    transmitionType: String
})

const cars = connection.model('cars', DataSchema)
export default cars;