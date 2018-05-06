
const person = {
    name: 'Vibhor',
    age: 30,
    location: {
        city: 'Bangalore',
        temp: 31
    }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age} years old.`);

const { city, temp: temperature } = person.location;

if(city && temperature) {
    console.log(`Its ${temperature} degrees celcius in ${city}`);
}