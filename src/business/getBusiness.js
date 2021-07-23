
const getCarBusiness = async (id, getCarsDataBase, getCarByIdDataBase) => {
    try {
        if (id)
            return await getCarByIdDataBase(id)
        else
            return await getCarsDataBase()

    } catch (error) {
        throw  error
    }
}
module.exports =  getCarBusiness;