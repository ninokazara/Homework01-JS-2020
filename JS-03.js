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



// function getAvg(prices) {
//     let total = prices.reduce((acc, c) => acc + c, 0);
//     return total / prices.length;
    
// }
// let average = getAvg(prices);
// console.log(`Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის : ${average}`);

function getMax(array) {
    if (array.length === 0) {
        return undefined;
    }
     
let max = array[0];

for(let i = 1; i < array.length; i++) {
    if(array[i] > max) {
        max = array[i];
    }
}
return max;
}


let prices = [car1.price, car2.price, car3.price, car4.price];

let maxElement = getMax(prices);

console.log(maxElement);


// დავალება N 02

// let username = "Nina1989"
// let password = "1989"


// let user1 = {
//     username: "Gio1995",
//     password: "1995"
// }

// let user2 = {
//     username: "Megi1988",
//     password: "1988"
// }

// let user3 = {
//     username: "Elena1987",
//     password: "1987"
// }

// let user4 = {
//     username: "Keti1985",
//     password: "1985"
// }

// let users = [];
// users.push(user1);
// users.push(user2);
// users.push(user3);
// users.push(user4);

// function findUser(users, possibleUsername) {
//     for(let i = 0; i < users.length; i++) {
//         if(users[i].username === possibleUsername) {
//             return users[i];
//         }
//     }
// }

// function checkPassword(user, possiblePassword) {
//     return user.password === possiblePassword;
// }

// function login(username, password) {
//     let possibleUser = findUser(users, username);
//     if(!possibleUser) {
//         console.log("მოცემული სახელით მომხმარებელი არ მოიებნა");
//     } else {
//             let isPasswordValid = checkPassword(possibleUser, password);
//             if (isPasswordValid) {
//               console.log("შეხვედით სისტემაში წარმატებით");
            
//         } else {
//             console.log("პაროლი არასწორია");
         
//         }
//         if(password.length <=8) {
//             console.log("შეხვედით სისტემაში წარმატებით,თუმცა გთხოვთ შეცვალოთ პაროლი");
//         }
//     }

// }


// login("Gio1995", "1995");