const getCarBusiness = require("../business/getBusiness")
const getCarsDataBase = require("../database/getData")
const getCarByIdDataBase = require("../database/getCarByIdData")

const getCarController = async (req, res) => {
    try {
        const id = req.params?.id
        const result = await getCarBusiness(id, getCarsDataBase, getCarByIdDataBase)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
module.exports = getCarController;