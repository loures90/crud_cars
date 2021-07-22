
const filterCarBusiness = async (query, filterCarsDataBase) => {
    try {
        return await filterCarsDataBase(query)
    } catch (error) {
        throw error
    }
}
export default filterCarBusiness;