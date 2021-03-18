const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const parking = require ('./src/controllers/parking')

let main = () => {
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
                try{
                    const result = await parking.in(input[1].trim(), input[2].trim())
                    console.log(result)
                }catch(err){
                    console.log(err)
                }

            break

            case('leave'):
                try{
                    const result = await parking.out(input[1])
                    console.log(result)
                }catch(err){
                    console.log(err)
                }

            break

            case ('status'):
                try{
                    const result = await parking.status()
                    console.log(result)
                }catch(err){
                    console.log(err)
                }

            break

            case('registration_number'):
                try{
                    const result = await parking.getSlotFromPlat(input[1].trim())
                }catch(err){
                    console.log(err)
                }

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

main()