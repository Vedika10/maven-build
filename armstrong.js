const prompt = require('prompt-sync')();
let sum = 0 ;
const number = parseInt(prompt('Enter the three digit number : '));

//logic
let temp =number ;
while(temp > 0 ){
    let remainder = temp % 10 ;
    sum+= remainder*remainder*remainder;
    temp = parseInt(temp / 10);
}
if (sum == number){
    console.log(`The number ${number} is Armstrong number`);
}
else {
    console.log(`The number ${number} is not an armstrong number`);
}