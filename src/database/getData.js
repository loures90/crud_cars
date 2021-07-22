import cars from '../model/cars.js'

const getCarDataBase = async() => { 
    try {
        const result = await cars.find()
        return result
    } catch (err) {
        throw err
    }
}
export default getCarDataBase