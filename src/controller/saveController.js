const saveCarDataBase = require("../database/saveData")
const saveCarBusiness = require("../business/saveBusiness")
const idGenerator = require("../services/idGenerator")

const saveCarController = async (req, res) => {
    try {
        const car = req.body
        const result = await saveCarBusiness(car, saveCarDataBase, idGenerator)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
module.exports = saveCarController;