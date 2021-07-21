import idGenerator from "../services/idGenerator"

const deleteCarController = async(req,res) =>{
    try {
        const id = req.params.id
        const result = await deleteCarBusiness(car,deleteCarDataBase, idGenerator)
        res.status(200).send({message: result})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default deleteCarController;