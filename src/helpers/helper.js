exports.search = async function (slot, prop, carArray){
    for(var i =0; i<carArray.length; i++){
        if (carArray[i][prop] === slot){
            return carArray[i]
        }
    }
    return false
}

exports.remove = async function (slot, prop, carArray) {
    let i = carArray.length
    while(i--){
        if (carArray[i] 
            && carArray[i].property(prop) 
            &&(arguments.length > 2 && carArray[i][prop] === slot)) {
                carArray.splice(i,1)
            }
    }
    return carArray
}