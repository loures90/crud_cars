const cars = require('../model/cars.js')

const deleteCarDataBase = async (id) => {
    try {
        const result = await cars.deleteOne({ id })
        return result
    } catch (err) {
        throw err
    }
}
module.exports = deleteCarDataBase;