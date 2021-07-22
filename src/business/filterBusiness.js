
const filterCarBusiness = async (query, filterCarsDataBase, filterCarRangeDataBase) => {
    try {
        if (!query.priceGreaterThan && !query.priceLessThan && !query.yearGreaterThan && !query.yearLessThan)
            return await filterCarsDataBase(query)
        let range = { ...query }
        
        //if range of year exist it can not have year, same for salePrice.
        if (query.year && (query.yearGreaterThan || yearLessThan) ||
            query.salePrice && (query.priceGreaterThan || priceLessThan))
            throw new Error("Invalid filter")

        // Validating ranges
        if (query.yearGreaterThan) {
            range.year = { $gt: Number(query.yearGreaterThan) }
            delete range.yearGreaterThan
        }
        if (query.yearLessThan) {
            range.year = { $lt: Number(query.yearLessThan) }
            delete range.yearLessThan
        }
        if (query.priceGreaterThan) {
            range.salePrice = { $gt: Number(query.priceGreaterThan) }
            delete range.priceGreaterThan
        }
        if (query.priceLessThan) {
            range.salePrice = { $lt: Number(query.priceLessThan) }
            delete range.priceLessThan
        }
        console.log("range", range)
        return await filterCarRangeDataBase(range)

    } catch (error) {
        throw error
    }
}
export default filterCarBusiness;