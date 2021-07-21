
const getCarBusiness = async(id,getCarDataBase, generateToken) =>{
    try {
        const result = await getCarDataBase(id)
        return result  
    } catch (error) {
        throw ({error: error.message})
    }
}
export default getCarBusiness;