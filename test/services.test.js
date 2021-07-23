const idGenerator =require("../src/services/idGenerator")

describe("IDGENERATOR", ()=>{
    it("Should return an id",()=>{
        const id = idGenerator()
        expect(typeof id).toBe("string")
    })
})