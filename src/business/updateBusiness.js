
const updateCarBusiness = async(car,updateCarDataBase, generateToken) =>{
    try {
        const result = await updateCarDataBase(car)
        return result  
    } catch (error) {
        throw ({error: error.message})
    }
}
export default updateCarBusiness;