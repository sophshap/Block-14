// ONLY ODDS

// create a variable for the array
// want loop thats looks through the numbers
// then identifies the odd numbers
// then prints out only the odd numbers


const oddNumber = [2, 4, 6, 8, 11, 20, 15, 22];
for (let i = 0; i < oddNumber.length; i++) {

    if (oddNumber[i] % 2 !== 0) {

        console.log(oddNumber[i]);
    }
}


//VOWELS VS CONSONANTS

//create variables for the sentence array
//variables that count up how many vowels or consonants there are
//make code that looks at a string of letters
//identify whether they're vowels or consonants
//print word, how many consonants, how many vowels


const word = "ukelele"
let vowelCounter = 0;
let consonantCounter = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
        vowelCounter++
    } else {
        consonantCounter++
    }
}

console.log(word + " has " + consonantCounter + " consonants and " + vowelCounter + " vowels")


// REVERSE ARRAY PSEUDOCODE
// use the countdown technique to reverse the numbers
// put the numnbers into a new array with in  reverse order
// put the numnbers into a new array with Array.from() in reverse order

// NOTES:
// https://www.geeksforgeeks.org/how-to-convert-a-number-into-array-in-javascript/
// declare arr before the for loop, so can be messed with after
// anything that happens once lives outside the loop!
// when you're in a local scope, you have everything in the parent scope available to you
// nothing that's declared in another scope is avail to you
// inside the for loop, you can use outside stuff; anything declared inside the for loop only works there

const reversal = [1, 2, 3];
const arr = []
for (let i = reversal.length - 1; i >= 0; i--) {


    console.log(reversal[i]);
    arr.push(reversal[i])
};


// push the results into an array

console.log(arr)


// FIZZBUZZ

//print each number 1-100
//multiples of 3 are fizz
//multiples of 5 are buzz
//multples of both are fizzbuzz

//if number % 3 === 0 && if number % 5 === 0 then fizzbuzz
//if number % 3 === 0 then fizz
//if number % 5 === 0 then buzz

//n, n+1, n+2..... n+99
//for n... as long as the result isn't more than 100... keep going

//n, n+1, etc up to 5


let n = 1

for (let index = 0; index <= 99; index++) {

    if (((n * index) + 1) % 3 === 0 && ((n * index) + 1) % 5 === 0) {
        console.log("fizzbuzz")
    }

    else if (((n * index) + 1) % 5 === 0) {
        console.log("buzz")
    }

    else if (((n * index) + 1) % 3 === 0) {
        console.log("fizz")
    }

    else {
        console.log((n * index) + 1)
    }
}