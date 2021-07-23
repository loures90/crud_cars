const cars = require('../model/cars.js')

const updateCarDataBase = async (id, car) => {
    try {
        const result = await cars.findOneAndUpdate({id:id }, car)
        return result
    } catch (err) {
        throw err
    }
}
module.exports = updateCarDataBase;