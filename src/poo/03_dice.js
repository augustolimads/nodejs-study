
class Dice {
    constructor(faces) {
        this.faces = faces
    }
    
    //roll dice 
    roll(){
        const result = this.getRandomInt(1, this.faces)
        console.log(`Dice result of d${this.faces}: ${result}`)
    }

    //random number
    getRandomInt(min, max){
        const _min = Math.ceil(min)
        const _max = Math.floor(max)

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const d4 = new Dice(4)
const d6 = new Dice(6)
const d8 = new Dice(8)
const d10 = new Dice(10)
const d12 = new Dice(12)
const d20 = new Dice(20)

d4.roll()