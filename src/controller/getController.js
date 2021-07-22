import getCarBusiness from "../business/getBusiness.js"
import getCarsDataBase from "../database/getData.js"
import getCarByIdDataBase from "../database/getCarByIdData.js"

const getCarController = async (req, res) => {
    try {
        const id = req.params?.id
        const result = await getCarBusiness(id, getCarsDataBase, getCarByIdDataBase)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}
export default getCarController;