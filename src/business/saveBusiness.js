
const saveCarBusiness = async (car, saveCarDataBase, idGenerator) => {
    try {
        if (!car.brand || !car.model || !car.year || !car.km || !car.version || !car.salePrice)
            throw new Error("Insert valid values for model, year, brand, ")
        car.id = idGenerator()

        const result = await saveCarDataBase(car)
        return result
    } catch (error) {
        throw error
    }
}
module.exports =  saveCarBusiness;