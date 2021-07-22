
const deleteCarBusiness = async(id,deleteCarDataBase, generateToken) =>{
    try {
        if(!id)
            throw new Error("id not valid")
        const result = await deleteCarDataBase(id)
        return result  
    } catch (error) {
        throw ({error: error.message})
    }
}
export default deleteCarBusiness;