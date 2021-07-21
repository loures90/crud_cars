
const deleteCarBusiness = async(id,deleteCarDataBase, generateToken) =>{
    try {
        const result = await deleteCarDataBase(id)
        return result  
    } catch (error) {
        throw ({error: error.message})
    }
}
export default deleteCarBusiness;