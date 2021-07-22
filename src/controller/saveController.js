import saveCarBusiness from "../business/saveBusiness.js"
import saveCarDataBase from "../database/saveData.js"
import idGenerator from "../services/idGenerator.js"

const saveCarController = async(req,res) =>{
    try {
        const car = req.body
        const result = await saveCarBusiness(car,saveCarDataBase, idGenerator)
        res.status(200).send( result)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default saveCarController;