const express =require('express');
const deleteCarController =require('../controller/deleteController');
const filterCarController =require('../controller/filterController');
const getCarController =require('../controller/getController');
const saveCarController =require('../controller/saveController');
const updateCarController =require('../controller/updateController');

const carsRoutes = express.Router()

carsRoutes.get('/car/', filterCarController)
carsRoutes.get('/', getCarController)
carsRoutes.post('/', saveCarController)
carsRoutes.patch('/:id', updateCarController)
carsRoutes.get('/:id', getCarController)
carsRoutes.delete('/:id',deleteCarController)

module.exports = carsRoutes;