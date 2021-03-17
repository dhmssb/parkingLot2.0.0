const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//user Input
let coba = () => {
    rl.on('line', async (input) => {
        input = input.split(' ')
        
        switch (input[0]) {
            case ('create_parking_lot'):


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