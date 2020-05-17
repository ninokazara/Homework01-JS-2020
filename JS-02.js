/*
Author: Nino
Lesson 02
Date: 16.05.2020
*/



// object

let car= {
    name: "Audi",
    color: "white",
    model:"A4",
    year: 2019,
    horsepower: 190,
    price: 20000
};
cars = [car];
for(let i=0; i<cars.length; i++) {
    console.log(`This car has the following features: ${cars[i].name}`);
    console.log(`This car has the following features: ${cars[i].color}`);
    console.log(`This car has the following features: ${cars[i].model}`);
    console.log(`This car has the following features: ${cars[i].year}`);
    console.log(`This car has the following features: ${cars[i].horsepower}`);
    console.log(`This car has the following features: ${cars[i].price}`);

}

