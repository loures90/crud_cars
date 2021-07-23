const filterCarBusiness = require("../business/filterBusiness")
const filterCarDataBase = require("../database/filterData")
const filterCarRangeDataBase = require("../database/filterRangeData")

const filterCarController = async (req, res) => {
    try {
        const query = req.query
        const result = await filterCarBusiness(query, filterCarDataBase, filterCarRangeDataBase)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
module.exports = filterCarController;