/*let name = "Manuel";

const LIMIT = 10;

name = "John";
number = 20;

const users = [
    { 
        id: 1, 
        name: "John" 
    },
    {
        id: 2,
        name: "Jane"
    },
];



for(let index = 0; index<users.length; index++){
    const element = users{index};
    console.log(element.name);
}


function multiply(n1,n2){
    let result = n1 * n2;
    console.log(result);
}

multiply(2,10);

//arrow function
const subtraction = (n1,n2) => {
    let result = n1 * n2;
    console.log(result);
}

subtraction(5,6);
*/
//working with html
//1. Get button
//2. Checking when button is clicked

//1
let button = document.querySelector(".card-btn");

//3
let alertElement = document.querySelecto(".alert");

let counter = 0

//2
button.addEventListener("click", () => {
    console.log("Button is clicked");
    counter++;

    alertElement.innerHTML = 'You have added ${counter} chairs to your basket';
});