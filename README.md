# crud_cars
This is a CRUD of a table of cars. The API is made with NodeJS and MongoDB, frameworks Express, Mongoose and jest. It does not have authentication.

## Installation

After cloning this repository, install all dependences. 

        npm install

Make sure you have MongoDB Compass in your machine. Then create a new Schema called 'cars'. Than use the command 

        npm run start

and use Postman or other app to access the api.

## API

### Description : Create a new car.
### Method: POST
### Url: http://localhost:3003/cars/
### Body:
        {
            "brand": "String",
            "model": "String",
            "version": "String",
            "year": Number,
            "km": Number,
            "transmitionType": "String",
            "salePrice": Number
        }
### Exemple:

        POST http://localhost:3003/cars/
        Content-Type: application/json

        {
            "brand": "VW",
            "model": "Gol",
            "version": "2021",
            "year": 2021,
            "km": 10000,
            "transmitionType": "Manual",
            "salePrice": 45000.00
        }
### Response:
The object car created. Like the example below:

        {
            "_id": "60f8e437bd6239209084d2b2",
            "brand": "VW",
            "model": "Gol",
            "version": "2021",
            "year": 2021,
            "km": 10000,
            "transmitionType": "Manual",
            "salePrice": 45000,
            "id": "c736baef-f243-4080-b577-9a43d589c271",
            "__v": 0
        }

### Description : update a car.
### Method: PATCH
### Url: http://localhost:3003/cars/:id
### Body:
        {
            "brand": "String",
            "model": "String",
            "version": "String",
            "year": Number,
            "km": Number,
            "transmitionType": "String",
            "salePrice": Number
        }
### Params: id (String)
### Exemple:

       PATCH http://localhost:3003/cars/e362592b-7628-4b2d-b9e0-af3c239a197e
        Content-Type: application/json

        {
            "brand": "Lamborghine",
            "model": "IX35",
            "version": "Prata",
            "year": 2022,
            "km": 1000,
            "transmitionType": "Automático",
            "salePrice": 900000.00
        }
### Response:
The object car updated. Like the example below:

        {
        "_id": "60f8d11fe766a3028f057690",
        "brand": "Lamborghine",
        "model": "IX35",
        "version": "Prata",
        "year": 2022,
        "km": 1000,
        "transmitionType": "Automático",
        "salePrice": 900000.00
        "id": "cfd0a1d5-855a-40ea-a22b-f8bed261fdce",
        "__v": 0
        }


### Description : Delete a car by id.
### Method: DELETE
### Url: http://localhost:3003/cars/:id
### Params: id (String)
### Exemple:

        DELETE http://localhost:3003/cars/e362592b-7628-4b2d-b9e0-af3c239a197e
        Content-Type: application/json
### Response:
An object describing the deletion. Like the example below:

        {
        "message": {
            "n": 1,
            "ok": 1,
            "deletedCount": 1
        }
        }

### Description : Get a car by id.
### Method: GET
### Url: http://localhost:3003/cars/:id
### Params: id (String)
### Exemple:

        GET http://localhost:3003/cars/e362592b-7628-4b2d-b9e0-af3c239a197e
        Content-Type: application/json
### Response:
An array with one object car. Like the example below:

        [{
            "_id": "60f8d07599331e014f0e5f97",
            "brand": "VW",
            "model": "Fusca",
            "version": "azul",
            "year": 1977,
            "km": 100000,
            "transmitionType": "Manual",
            "salePrice": 50000,
            "id": "4343b3bd-f12b-4a0d-beca-86fe77976ab6",
            "__v": 0
        }]


### Description : list all saved cars.
### Method: GET
### Url: http://localhost:3003/cars/
### Exemple:

        GET http://localhost:3003/cars/
        Content-Type: application/json
### Response:
An array of objects cars. Like the example below:

        [
        {
            "_id": "60f8d07599331e014f0e5f97",
            "brand": "VW",
            "model": "Fusca",
            "version": "azul",
            "year": 1977,
            "km": 100000,
            "transmitionType": "Manual",
            "salePrice": 50000,
            "id": "4343b3bd-f12b-4a0d-beca-86fe77976ab6",
            "__v": 0
        },
        {
            "_id": "60f8d11fe766a3028f057690",
            "brand": "VW",
            "model": "Gol",
            "version": "2021",
            "year": 2021,
            "km": 10000,
            "transmitionType": "Manual",
            "salePrice": 45000,
            "id": "cfd0a1d5-855a-40ea-a22b-f8bed261fdce",
            "__v": 0
        },
        {
            "_id": "60f8d1614d1c7f0346223f37",
            "brand": "VW",
            "model": "Fusca",
            "version": "vermelho",
            "year": 1977,
            "km": 100000,
            "transmitionType": "Manual",
            "salePrice": 50000,
            "id": "00fb3138-209e-4a0d-ae22-9336edde3769",
            "__v": 0
        }
        ]
