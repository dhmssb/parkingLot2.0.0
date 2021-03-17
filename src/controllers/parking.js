let vehicles = []
let size = 0
let slot = []

exports.createParkinglot = async function (lot){
    try {
        size = parseInt(lot)
    }catch(err) {
        return 'no number allowed!'
    }

    for (let i = 1; i <= size; i++){
        slot.push(i)
    }
    return `Created parking lot with ${slot.length} slots`

}

exports.startParking = async function (plat, charge){
    if (size === 0 ){
        return 'parking lot is not initiated'
    }else if (size === vehicles.length) {
        return 'Sorry, parking lot full'
    }else {
        let isi = slot[0]
        vehicles.push({
            'slot': isi,
            'plat': plat,
            'charge': charge

    })
    slot.shift()
    
    return `Allocated slot number: ${slot}`


}