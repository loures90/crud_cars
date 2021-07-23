const cars = require('../model/cars.js')

const filterCarRangeDataBase = async(query) => { 
    try {
        console.log("data",query)
        const result = await cars.find(query)
        return result
    } catch (err) {
        throw err
    }
}
module.exports = filterCarRangeDataBase;