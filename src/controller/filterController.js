import filterCarBusiness from "../business/filterBusiness.js"
import filterCarDataBase from "../database/filterData.js"
import filterCarRangeDataBase from "../database/filterRangeData.js"

const filterCarController = async (req, res) => {
    try {
        const query = req.query
        const result = await filterCarBusiness(query, filterCarDataBase, filterCarRangeDataBase)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default filterCarController;