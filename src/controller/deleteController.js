const deleteCarDataBase = require('../database/deleteData')
const deleteCarBusiness = require('../business/deleteBusiness')

const deleteCarController = async (req, res) => {
    try {
        const id = req.params.id
        const result = await deleteCarBusiness(id, deleteCarDataBase)
        res.status(200).send({ message: result })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
module.exports = deleteCarController;