import saveCarBusiness from "../business/saveBusiness"

const saveCarController = async(req,res) =>{
    try {
        const car = req.body
        const result = await saveCarBusiness(car,saveCarDataBase, generateToken)
        res.status(200).send({message: result})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default saveCarController;