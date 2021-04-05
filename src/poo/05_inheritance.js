class Animal{
    constructor(name, age, price) {
        this.name = name 
        this.age = age 
        this.price = price
    }

    checkStock(){
        console.log(10)
    }
}

class Doggo extends Animal{
    constructor(name, age, price, race, weight){
        super(name, age, price)
        this.race = race 
        this.weight = weight
    }
}

const dog = new Doggo("Dog", 5, 250, "Fila", 30)

dog.checkStock()

//recomendado ter no maximo classe mãe e filha, 
//se tiver avó pode levar a problemas