const cars = require('../model/cars.js')

const filterCarDataBase = async(query) => { 
    try {
        const result = await cars.find(query)
        return result
    } catch (err) {
        throw err
    }
}
module.exports = filterCarDataBase;