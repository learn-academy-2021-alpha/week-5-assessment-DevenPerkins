// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { valueToNode } = require("@babel/types");

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

describe("when bustTheCode is called", () => {
    it("returns 'l4ck4d41s1c4l' when called with 'lackadaisical' ", () => {
        //Arrange 
        const secretCodeWord1 = "lackadaisical";

        //Act
        const actualbustTheCode = bustTheCode(secretCodeWord1);

        //Assert
        expect(actualbustTheCode).toEqual("l4ck4d41s1c4l");
    })
    it("returns 'g0bbl3dyg00k' when called with 'gobbledygook'", () => {
        //Arrange 
        const secretCodeWord2 = "gobbledygook";
    
        //Act
        const actualbustTheCode = bustTheCode(secretCodeWord2);
    
        //Assert
        expect(actualbustTheCode).toEqual("g0bbl3dyg00k");
    })
})

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"





// b) Create the function that makes the test pass.

const bustTheCode = (str) => {
    // create a variable that splits string into array
    var bustArray = str.split("")
    // iterate through each item in the array and change specific numbers.
    bustCode = bustArray.map(value =>{
        if (value.toLowerCase() === 'a'){
            return 4
        }else if(value.toLowerCase() === 'e'){
            return 3
        }else if(value.toLowerCase() === 'i'){
            return 1
        }else if(value.toLowerCase() === 'o'){
            return 0
        }else{
            return value
        }
    })
    // rejoin the array into a string
    return bustCode.join("");
}





// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

describe("when findContainsLetter is called", () => {
    it("returns '[Apple, Banana, Peach]' when called with 'letter_a' ", () => {
        //Arrange 
        const arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
        const letter_a = 'a'

        //Act
        const actualContainsLetter = findContainsLetter(arrayOfWords , letter_a);

        //Assert
        expect(actualContainsLetter).toEqual(["Apple", "Banana", "Peach"]);
    })
    it("returns '[Apple, Plum , Peach]' when called with 'letter_p' ", () => {
        //Arrange 
        const arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
        const letter_p = 'p'

        //Act
        const actualContainsLetter = findContainsLetter(arrayOfWords , letter_p);

        //Assert
        expect(actualContainsLetter).toEqual(["Apple", "Plum", "Peach"]);
    })
    it("returns '[Cherry , Peach]' when called with 'letter_c' ", () => {
        //Arrange 
        const arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
        const letter_c = 'c'

        //Act
        const actualContainsLetter = findContainsLetter(arrayOfWords , letter_c);

        //Assert
        expect(actualContainsLetter).toEqual(["Cherry", "Peach"]);
    })
})

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: ["Apple", "Banana", "Peach"]
//------> **** I know that in the description it said to pick out the letter 'a', but I wanted to make this code more dynamic and added an argument so that other letters could be passed. <-----******
var letter_a = 'a'
var letter_p = 'p'



// b) Create the function that makes the test pass.
//create a function called findContainsLetter
//takes in two arguments one of which is an array and the other which is a letter
const findContainsLetter = (arr , letter) => {
    //created variable that filtered through the array to only include words that contain the letter passed though the argument
    var onlyLetter = arr.filter(value => {
        return value.toLowerCase().includes(letter)
    })
    //return the new variable
    return onlyLetter
}
// console.log(findContainsLetter(arrayOfWords))




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
describe("when determineFullHouse is called", () => {
    it("returns 'true' when called with '[5, 5, 5, 3, 3]' ", () => {
        //Arrange 
        const hand1 = [5, 5, 5, 3, 3];
        

        //Act
        const actualFullHouse = determineFullHouse(hand1);

        //Assert
        expect(actualFullHouse).toEqual(true);
    })
    it("returns 'false' when called with '[5, 5, 3, 3, 4]' ", () => {
        //Arrange 
        const hand2 = [5, 5, 3, 3, 4];

        //Act
        const actualFullHouse = determineFullHouse(hand2);

        //Assert
        expect(actualFullHouse).toEqual(false);
    })
    it("returns 'false' when called with '[5, 5, 5, 5, 4]' ", () => {
        //Arrange 
        const hand3 = [5, 5, 5, 5, 4];

        //Act
        const actualFullHouse =determineFullHouse(hand3);

        //Assert
        expect(actualFullHouse).toEqual(false);
    })
})

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
// find two unique values and check to see if there is three of one two of the other
const determineFullHouse = (arr) => {
    //set the boolean to false as the conditions for full house have not been met yet
    let fullHouse = false;
    //create two storage variables
    let isPair = [];
    let isTriple = [];
    //need to iterate though the array... looks like any higher order function would work.. tested with .map and .filter all worked
    arr.forEach(value =>{
        //if the isTriple is empty put the first value of the array into isTriple 
        //then use the first value to match up with all the other values in the array
        //set condition to limit the array to 3 values once the array reaches the length of 3 then it moves on to next array
        //do the same that was done to isTriple
        if (isTriple.length === 0){
            isTriple.push(value)
        }else if(isTriple[0] === value && isTriple.length < 3){
            isTriple.push(value)
        }else if(isPair.length === 0){
            isPair.push(value)
        }else if (isPair[0] === value){
            isPair.push(value)
    }})     
    //set a condition that checks to see the length of each array is 3 and 2 to indicate the number of duplicates
    //once condition is met fullhouse is set to true.
    if (isTriple.length === 3 && isPair.length === 2){
        fullHouse = true
    }
// my code was flooded with console logs on this one but these two ended up being very helpful in the end.
// console.log(isPair)
// console.log(isTriple)
return fullHouse
}
console.log(determineFullHouse(hand2))
