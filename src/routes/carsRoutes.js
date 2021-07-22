import express from 'express';
import deleteCarController from '../controller/deleteController.js';
import getCarController from '../controller/getController.js';
import saveCarController from '../controller/saveController.js';
import updateCarController from '../controller/updateController.js';

export const carsRoutes = express.Router()

carsRoutes.get('/', getCarController)
carsRoutes.post('/', saveCarController)
carsRoutes.patch('/:id', updateCarController)
carsRoutes.get('/:id', getCarController)
carsRoutes.delete('/:id',deleteCarController)
