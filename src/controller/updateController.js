import updateCarBusiness from "../business/updateBusiness.js"
import idGenerator from "../services/idGenerator.js"
import updateCarDataBase from "../database/updateData.js"

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
export default updateCarController;