
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

const address = ['4th Cross', 'Bangalore', 'Karnataka', 560037];
const [street, currentCity, state, zipcode] = address;
console.log(`Street: ${street}`);

//const [, , state, zipcode] = address;   // skipping first two items in array
