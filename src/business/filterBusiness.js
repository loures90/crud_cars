
const filterCarBusiness = async (query, filterCarsDataBase, filterCarRangeDataBase) => {
    try {
        if (!query.greaterThan && !query.lessThan)
            return await filterCarsDataBase(query)
        let range = { ...query }
        if (query.year && query.greaterThan) {
            range.year = { $gt: Number(query.year) }
            delete range.greaterThan
        }
        if (query.year && query.lessThan){
            range.year = { $lt: Number(query.year) }
            delete range.lessThan
        }
        if (query.salePrice && query.greaterThan){
            range.salePrice = { $gt: Number(query.salePrice) }
            delete range.greaterThan
        }
        if (query.salePrice && query.lessThan){
            range.salePrice = { $lt: Number(query.salePrice) }
            delete range.lessThan
        }
        console.log("range", range)
        return await filterCarRangeDataBase(range)

    } catch (error) {
        throw error
    }
}
export default filterCarBusiness;