import cars from '../model/cars.js'
const getCarByIdDataBase = async(id) => { 
    try {
        const result = await cars.find({id:id})
        return result
    } catch (err) {
        throw err
    }
}
export default getCarByIdDataBase