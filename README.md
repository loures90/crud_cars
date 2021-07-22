# crud_cars
This is a CRUD of a table of cars. The API is made with NodeJS and MongoDB, frameworks Express, Mongoose and jest. It does not have authentication.

## Installation

After cloning this repository, install all dependences. 

        npm install

Make sure you have MongoDB Compass in your machine. Then create a new Schema called 'cars'. Than use the command 

        npm run start

Use Postman or other app to access the api.

#
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
### example:

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
#
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
### example:

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

#
### Description : Delete a car by id.
### Method: DELETE
### Url: http://localhost:3003/cars/:id
### Params: id (String)
### example:

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
#
### Description : Get a car by id.
### Method: GET
### Url: http://localhost:3003/cars/:id
### Params: id (String)
### example:

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

#
### Description : list all saved cars.
### Method: GET
### Url: http://localhost:3003/cars/
### example:

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

#
### Description : Filters of cars
List and filter cars using query params. 'Year' and 'sale price' can be selected in a range, like year > 2019 and salePrice < 20000, for example.  
### Method: GET
### Url: http://localhost:3003/cars/?queryParams
### Query Params:
Select the filter property defining it value, for example, 

        http://localhost:3003/cars/?brand=VW&model=Fusca$version=77&year=1977&transmissionType=Manual&salePrice=5000

It will return a car with brand VW, model Fusca, version 77, year 1977, transmissionType Manual and price 5000. For salePrice and year properties you can select a range using the values yearGreaterThan, yearLessThan, priceGreaterThan and priceLessThan, for example:


        http://localhost:3003/cars/?priceGreaterThan=5000&yearLessThan=2015

It returns a list of cars with sale price Greater than 5000 and produced before the year of 2015. It does not allows mixing year with yearGreater or yearLessThan, same for salePrice and priceGreaterThan or priceLessThan.

### example:

                GET http://localhost:3003/cars/car/?yearGreaterThan=2000&model=IX35&priceGreaterThan=10000
                Content-Type: application/json

### Response:
An array of objects cars. Like the example below:


                [
                {
                "_id": "60f8d11fe766a3028f057690",
                "brand": "Hyunday",
                "model": "IX35",
                "version": "Prata",
                "year": 2022,
                "km": 1000,
                "transmitionType": "Automático",
                "salePrice": 900000,
                "id": "cfd0a1d5-855a-40ea-a22b-f8bed261fdce",
                "__v": 0
                }
                ]