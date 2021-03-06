const updateCarBusiness = require("../business/updateBusiness")
const idGenerator = require("../services/idGenerator")
const updateCarDataBase = require("../database/updateData")

const updateCarController = async (req, res) => {
    try {
        const car = req.body
        const id = req.params.id
        const result = await updateCarBusiness(id,car, updateCarDataBase, idGenerator)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
module.exports = updateCarController;