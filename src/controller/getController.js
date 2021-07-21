
const getCarController = async(req,res) =>{
    try {
        const id = req.params?.id
        const result = await createTaskBusiness(id, getCarBusiness,getCarDataBusiness)
        res.status(200).send({message: result})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default getCarController;