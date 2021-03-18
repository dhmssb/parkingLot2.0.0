const helper = require ('../helpers/helper')

let vehicles = []
let size = 0
let slotKosong = []

exports.createParkinglot = async function (lot){
    try {
        size = parseInt(lot)
    }catch(err) {
        return 'no number allowed!'
    }

    for (let i = 1; i <= size; i++){
        slotKosong.push(i)
    }
    return `Created parking lot with ${slotKosong.length} slots`

}

exports.in = async function (plat, hours){
    if (size === 0 ){
        return 'parking lot is not initiated'
    }else if (size === vehicles.length) {
        return 'Sorry, parking lot full'
    }else {
        let slot = slotKosong[0]
        vehicles.push({
            'slot': slot,
            'plat': plat,
            'hours': hours
    })
    slotKosong.shift()
    
    return `Allocated slot No: ${slot}`
    }
}

exports.status = async function (){
    if (size === 0){
        return 'parking lot is not initiated'
    }else if(vehicles.length > 0){
        console.log('Slot No. \tPlat No.\t Hours')
        vehicles.forEach(function(baris){
            console.log(`${baris.slot}\t      ${baris.plat}\t    ${baris.hours}`)
        })
    }else {
        return 'Parking lot empty'
    }
}

exports.out = async function (slot) {
    slot = parseInt(slot)
    if(size === 0){
        return 'parking lot is not initiated'
    }else if (vehicles.length > 0) {
        if(await helper.search(slot, 'slot', vehicles)){
            vehicles = await helper.remove(slot, 'slot', vehicles)
        
        slotKosong.push(slot)
        slotKosong.sort()
        return `Slot No ${slot} is free`
        }else{
            return `Slot ${slot} already empty`
        }
        console.log('Car =>', vehicles)
    }else {
        return 'Parking lot is empty'
    }
}

exports.getSlotFromPlat = async function (plat){
    if (size === 0) {
        return 'parking lot is not initiated'
    }else if(vehicles.length > 0){
        
        let hsl
        vehicles.forEach(function (baris){
            if (baris.plat === plat) {
                hsl = baris.slot
            }
        })
        if (hsl === undefined) return 'Not Found!'

        return hsl

    }else{
        return 'Not Found!'
    }
}