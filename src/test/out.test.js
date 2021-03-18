const expect = require ('chai').expect
const parking = require ('../controllers/parking')

describe('leave 6', async function () {
    it('should free slot no 6', async function (){
        const pre = 'Slot No 6 is free'
        const result = await parking.out(6)
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})