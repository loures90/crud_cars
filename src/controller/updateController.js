
const updateCarController = async(req,res) =>{
    try {
        const car = req.body
        const result = await updateCarBusiness(car,updateCarDataBase)
        res.status(200).send({message: result})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default updateCarController;