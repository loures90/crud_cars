import cars from '../model/cars.js'
const saveCarDataBase = async(car) => { 
    try {
        const result = await cars.create(car)
        return result
    } catch (err) {
        throw err
    }
}
export default saveCarDataBase