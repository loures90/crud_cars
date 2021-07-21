import connection from "../connection";

const DataSchema = new connection.Schema({
    brand: String,
    model: String,
    version: String,
    year: Integer,
    km: Integer,
    transmitionType: String
})

const cars = connection.model('cars', DataSchema)
export default cars;