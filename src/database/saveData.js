const cars = require('../model/cars.js')

const saveCarDataBase = async (car) => {
    try {
        const result = await cars.create(car)
        return result
    } catch (err) {
        throw err
    }
}

module.exports = saveCarDataBase;
