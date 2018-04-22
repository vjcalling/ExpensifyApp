
//-------------------------------------------

class Person {

    constructor(name='test') {
        this.name = name;
        console.log(this.name);
    }

    getGreeting() {
        return `Hi ${this.name}!`;
    }
}

//-------------------------------------------

const me = new Person("Vibhor");
console.log(me.getGreeting());


//-------------------------------------------