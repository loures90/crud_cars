import cars from '../model/cars.js'

const filterCarDataBase = async(query) => { 
    try {
        console.log("data",query)
        const result = await cars.find(query)
        return result
    } catch (err) {
        throw err
    }
}
export default filterCarDataBase