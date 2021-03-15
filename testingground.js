const { count } = require("yargs");

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// b) Create the function that makes the test pass.

// create a function that is called determineFullHouse
// it takes in an array an returns a boolean
// if theres 3 of integer and 2 of something then full house is true
// 0 and compare iterating thought the array and checking against the character looking at the 
// find two unique values and check to see iff there is three of one two of the other
const determineFullHouse = (arr) => {
    let fullHouse = false;
    let count2 = [];
    let count3 = [];
    arr.forEach((value,index) =>{
        if (count3.length === 0){
            count3.push(value)
        }else if(count3[0] === value && count3.length < 3){
            count3.push(value)
        }else if(count2.length === 0){
            count2.push(value)
        }else if (count2[0] === value){
            count2.push(value)
    }})     
    if (count3.length === 3 && count2.length === 2){
        fullHouse = true
    }
console.log(count2)
console.log(count3)
return fullHouse
}
console.log(determineFullHouse(hand2))