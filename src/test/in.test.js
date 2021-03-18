const expect = require ('chai').expect
const parking = require ('../controllers/parking')

describe('park KA-01-HH-1234', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 1'
        const result = await parking.in('KA-01-HH-1234')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park KA-01-HH-9999', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 2'
        const result = await parking.in('KA-01-HH-9999')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park KA-01-BB-0001', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 3'
        const result = await parking.in('KA-01-BB-0001')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park KA-01-HH-7777', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 4'
        const result = await parking.in('KA-01-HH-7777')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park KA-01-HH-2701', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 5'
        const result = await parking.in('KA-01-HH-2701')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park KA-01-HH-3141', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 6'
        const result = await parking.in('KA-01-HH-3141')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})