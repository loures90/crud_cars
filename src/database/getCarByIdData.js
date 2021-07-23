const cars = require('../model/cars.js')

const getCarByIdDataBase = async(id) => { 
    try {
        const result = await cars.find({id:id})
        return result
    } catch (err) {
        throw err
    }
}

module.exports = getCarByIdDataBase;