// Very Easy

let num1 = 50;
let num2 = 5;

function minimum(num1, num2) {
    return Math.min(num1, num2);
}
console.log(minimum(num1, num2));

// Easy

const person1 = {
    firstName :"Lionel",
    lastName : "Messi",
    age : 10
};

const person2 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 7
};

const person3 = {
    firstName: "Neymar",
    lastName: "Jr",
    age: 11
};

console.log(`Hello my name is ${person2.firstName} ${person2.lastName} and I am ${person2.age} years old`);

//Medium

let number = prompt(" Enter a number 1-12")

if (number == 1) {
    console.log("January")
}
else if (number == 2) {
    console.log("February")
}
else if (number == 3) {
    console.log("March")
}
else if (number == 4) {
    console.log("April")
}
else if (number == 5) {
    console.log("May")
}
else if (number == 6) {
    console.log("June")
}
else if (number == 7) {
    console.log("July")
}
else if (number == 8) {
    console.log("August")
}
else if (number == 9) {
    console.log("September")
}
else if (number == 10) {
    console.log("October")
}
else if (number == 11) {
    console.log("November")
}
else if (number == 12) {
    console.log("December")
}
else {
    alert("Invaild number");
};

// Hard

let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

const tomBMI = tomMass / tomHeight * 2; 
const jerryBMI = jerryMass / jerryHeight * 2;

console.log("Is Tom's BMI higher than jerry's? " + (tomBMI > jerryBMI));
