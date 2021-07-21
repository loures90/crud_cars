
const saveCarBusiness = async(car,saveCarDataBase, generateToken) =>{
    try {
        const result = await saveCarDataBase(car)
        return result  
    } catch (error) {
        throw ({error: error.message})
    }
}
export default saveCarBusiness;