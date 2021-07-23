const fusca = [{
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
}]


const filterCarsDataBaseMock = async (query) => {
    if (query.model == 'error')
        throw new Error("MongoDB error")
    if (query.model == "Fusca")
        return fusca
    return []
}

module.exports = filterCarsDataBaseMock;
