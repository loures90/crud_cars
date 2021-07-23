const filterCarsDataBaseMock = require('../mock/filterMock')
const filterCarRangeDataBaseMock = require('../mock/filterMock2')
const filterCarBusiness = require('../../src/business/filterBusiness')
// const filterCarRangeDataBaseMock =require('../mock/filterMock')
// const filterCarRangeDataBaseMockError =require('../mock/filterMock')

describe("BUSINESS", () => {
    describe("FILTER BUSINESS", () => {
        it("Should a select with using a single params model", async () => {
            const query = { model: "Fusca" }
            const res = await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            expect(res.length).toBe(1)
            expect(res[0].model).toBe("Fusca")
        })

        it("Should return an error because it uses params year and yearGreaterThan", async () => {
            const query = { model: "Fusca", year: 2000, yearGreaterThan: 2000 }
            try {
                await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            } catch (err) {
                expect(err.message).toBe("Invalid filter")
            }
        })

        it("Should return an error because it uses params salePrice and priceGreaterThan", async () => {
            const query = { model: "Fusca", salePrice: 2000, priceGreaterThan: 2000 }
            try {
                await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            } catch (err) {
                expect(err.message).toBe("Invalid filter")
            }
        })

        it("Should return an error because it uses params year and yearLessThan", async () => {
            const query = { model: "Fusca", year: 2000, yearLessThan: 2000 }
            try {
                await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            } catch (err) {
                expect(err.message).toBe("Invalid filter")
            }
        })

        it("Should return an error because it uses params salePrice and priceLessThan", async () => {
            const query = { model: "Fusca", salePrice: 2000, priceLessThan: 2000 }
            try {
                await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            } catch (err) {
                expect(err.message).toBe("Invalid filter")
            }
        })

        it("Should cars with priceGreaterThan 200000", async () => {
            const query = { priceGreaterThan: 200000 }
            const result = await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            expect(result.length).toBe(1)
            expect(result[0].salePrice).toBe(900000)
        })

        it("Should cars with priceLessThan 2000", async () => {
            const query = { priceLessThan: 2000 }
            const result = await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            expect(result.length).toBe(2)
            expect(result[0].salePrice).toBe(45000)
            expect(result[1].salePrice).toBe(45000)
        })

        it("Should cars with yearLessThan 2000", async () => {
            const query = { yearLessThan: 2000 }
            const result = await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            expect(result.length).toBe(1)
            expect(result[0].year).toBe(1977)
        })

        it("Should cars with yearGreaterThan 2000", async () => {
            const query = { yearGreaterThan: 2000 }
            const result = await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            expect(result.length).toBe(3)
            expect(result[0].year).toBe(2022)
            expect(result[1].year).toBe(2021)
        })

        it("Should return DataBase at function filterCarsDataBase", async () => {
            const query = { model: "error", year: 2000 }
            try {
                await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            } catch (err) {
                expect(err.message).toBe("MongoDB error")
            }
        })

        it("Should return DataBase at function filterCarRangeDataBase", async () => {
            const query = { model: "error", yearGreaterThan: 2000 }
            try {
                await filterCarBusiness(query, filterCarsDataBaseMock, filterCarRangeDataBaseMock)
            } catch (err) {
                expect(err.message).toBe("MongoDB error")
            }
        })
    })
})