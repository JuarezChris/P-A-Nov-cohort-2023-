
class Character{
    constructor(name){
        this.name = name
        this.bigRedBag = 0
    }

    sayHello(){
        console.log("Hello, " + this.name)
        return this
    }
}

let grinch = new Character("Grinch")
console.log(grinch.sayHello().sayHello())


// Grinch.sayHello()
// Mario.sayHello()
// Lugi.sayHello()