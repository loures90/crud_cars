import deleteCarDataBase from '../database/deleteData.js'
import deleteCarBusiness from '../business/deleteBusiness.js'

const deleteCarController = async(req,res) =>{
    try {
        const id = req.params.id
        const result = await deleteCarBusiness(id,deleteCarDataBase)
        res.status(200).send({message: result})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default deleteCarController;