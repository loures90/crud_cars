
const updateCarBusiness = async (id,car, updateCarDataBase, generateToken) => {
    try {
        if (!id)
            throw new Error("Id Not Valid")
        if (!car.brand || !car.model || !car.year || !car.km || !car.version || !car.salePrice)
            throw new Error("Insert valid values for model, year, brand, version or sale price. ")

        const result = await updateCarDataBase(id, car)
        return result
    } catch (error) {
        throw error
    }
}
export default updateCarBusiness;