import idGenerator from "../src/services/idGenerator.js"
// const idGenerator = require("../src/services/idGenerator.js")
describe("IDGENERATOR", ()=>{
    it("Should return an id",()=>{
        const id = idGenerator()
        expect(typeof id, "")
    })
})