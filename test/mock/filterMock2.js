const MockListOfCars = [
    {
        "_id": "60f8d11fe766a3028f057690",
        "brand": "Lamborghine",
        "model": "IX35",
        "version": "Prata",
        "year": 2022,
        "km": 1000,
        "transmitionType": "Automático",
        "salePrice": 900000,
        "id": "cfd0a1d5-855a-40ea-a22b-f8bed261fdce",
        "__v": 0
    },
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
    },
    {
        "_id": "60f9559392437341beec3b5d",
        "brand": "VW",
        "model": "Gol",
        "version": "1998",
        "year": 2021,
        "km": 10000,
        "transmitionType": "Manual",
        "salePrice": 45000,
        "id": "6ed5b71b-39d7-464a-b5bc-35c5284cea12",
        "__v": 0
    }
]
const mockPriceGreater = [
    {
        "_id": "60f8d11fe766a3028f057690",
        "brand": "Lamborghine",
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
const mockPriceLess = [
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
    },
    {
        "_id": "60f9559392437341beec3b5d",
        "brand": "VW",
        "model": "Gol",
        "version": "1998",
        "year": 2021,
        "km": 10000,
        "transmitionType": "Manual",
        "salePrice": 45000,
        "id": "6ed5b71b-39d7-464a-b5bc-35c5284cea12",
        "__v": 0
    }
]
const mockYearGreater =
    [
        {
            "_id": "60f8d11fe766a3028f057690",
            "brand": "Lamborghine",
            "model": "IX35",
            "version": "Prata",
            "year": 2022,
            "km": 1000,
            "transmitionType": "Automático",
            "salePrice": 900000,
            "id": "cfd0a1d5-855a-40ea-a22b-f8bed261fdce",
            "__v": 0
        },
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
        },
        {
            "_id": "60f9559392437341beec3b5d",
            "brand": "VW",
            "model": "Gol",
            "version": "1998",
            "year": 2021,
            "km": 10000,
            "transmitionType": "Manual",
            "salePrice": 45000,
            "id": "6ed5b71b-39d7-464a-b5bc-35c5284cea12",
            "__v": 0
        }
    ]

const mockYearLess = [
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


const filterCarRangeDataBaseMock = async (query) => {
    if(query.model=='error')
        throw new Error("MongoDB error")
    if (query.salePrice?.$gt)
        return mockPriceGreater
    if (query.salePrice?.$lt)
        return mockPriceLess
    if (query.year?.$gt)
        return mockYearGreater
    if (query.year?.$lt)
        return mockYearLess
    return {}
}
module.exports = filterCarRangeDataBaseMock;
