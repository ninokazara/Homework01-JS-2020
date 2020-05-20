/*
Author: Nino
Lesson 03
Date: 20.05.2020
*/

// function 
// დავალება-1

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

let prices = [car1.price, car2.price, car3.price, car4.price];

function getAvg(prices) {
    let total = prices.reduce((acc, c) => acc + c, 0);
    return total / prices.length;
    
}
let average = getAvg(prices);
console.log(`Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის : ${average}`);



