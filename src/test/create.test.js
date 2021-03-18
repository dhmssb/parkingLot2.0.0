const expect = require ('chai').expect
const parking = require ('../controllers/parking')

describe('create_parking_lot 6', async function (){
    it('should create 6 parking slots', async function (){
        let pre = 'Create a parking lot with 6 slots'
        let result = await parking.in(6)
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})