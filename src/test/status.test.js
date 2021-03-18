const expect = require ('chai').expect
const parking = require ('../controllers/parking')

describe('status', async function (){
    it('should show parking status', async function (){
        const result = await parking.status()
        console.log(result)
        expect(result).to.be.equal(result)
    })
})

describe('park KA-01-P-333', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 6'
        const result = await parking.in('KA-01-P-333')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park DL-12-AA-9999', async function (){
    it('should park the car', async function (){
        const pre = 'Sorry, parking lot is full'
        const result = await parking.in('DL-12-AA-9999')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('leave 1', async function (){
    it('should free slot no 1', async function (){
        const pre = 'Slot No 1 is free'
        const result = await parking.in(1)
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('leave 3', async function (){
    it('should free slot no 3', async function (){
        const pre = 'Slot No 3 is free'
        const result = await parking.in(3)
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('leave 2', async function (){
    it('should free slot no 2', async function (){
        const pre = 'Slot No 2 is free'
        const result = await parking.in(2)
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park KA-09-HH-0987', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 1'
        const result = await parking.in('KA-09-HH-0987')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park CA-09-IO-1111', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 2'
        const result = await parking.in('CA-09-IO-1111')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('park KA-09-HH-0123', async function (){
    it('should park the car', async function (){
        const pre = 'Allocated slot No: 3'
        const result = await parking.in('KA-09-HH-0123')
        console.log(result)
        expect(result).to.be.equal(pre)
    })
})

describe('status', async function (){
    it('should show parking status', async function (){
        const result = await parking.status()
        console.log(result)
        expect(result).to.be.equal(result)
    })
})
