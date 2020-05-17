/*
Author: Nino
Lesson 02
Date: 16.05.2020
*/



// object

let car1 = {
    name: "Audi",
    color: "white",
    model:"A4",
    year: 2019,
    horsepower: 190,
    price: 10000
};

let car2 = {
    name: "BMW",
    color: "blue",
    model:"X7",
    year: 2019,
    horsepower: 200,
    price: 30000
};

let car3 = {
    name: "Mercedes-benz",
    color: "red",
    model:"CLS",
    year: 2018,
    horsepower: 250,
    price: 18000
};

let car4 = {
    name: "Ford",
    color: "black",
    model:"mustang",
    year: 2019,
    horsepower: 300,
    price: 35000
};

let cars = []

cars.push(car1);
cars.push(car2);
cars.push(car3);
cars.push(car4);

let cheapcars = [];
// let expensivecars = [];
for(let i = 0; i < cars.length; i++) {
    if(cars[i].price < 15000) {
        cheapcars.push(cars[i]);
    } else {
        console.log('Unfortunately you can’t buy a car at this price');
    }
}

console.log(cheapcars);
// console.log(expensivecars);







// cars = [car];
// for(let i=0; i<cars.length; i++) {
//     console.log(`This car has the following features: ${cars[i].name}`);
//     console.log(`This car has the following features: ${cars[i].color}`);
//     console.log(`This car has the following features: ${cars[i].model}`);
//     console.log(`This car has the following features: ${cars[i].year}`);
//     console.log(`This car has the following features: ${cars[i].horsepower}`);
//     console.log(`This car has the following features: ${cars[i].price}`);

// }

