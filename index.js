const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const parking = require ('./src/controllers/parking')



//user Input
let coba = () => {
    rl.on('line', async function (input){
        input = input.split(' ')
        
        switch (input[0]) {
            case ('create_parking_lot'):
                try{
                    const result = await parking.createParkinglot(input[1])
                    console.log(result)
                }catch(err){
                    console.log(err)
                }

            break
            case('park'):

            break
            case('leave'):

            break
            case ('status'):

            break
            case ('exit'):
                rl.close()
            break
        default:
            console.log('case sensitive')    
        }
    })
}

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.close()
    })
})

coba()