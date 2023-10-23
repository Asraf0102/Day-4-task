//arrow function
//1. Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10]

let oddNUm = () => {
    for(let odd of arr){
        if(odd %2 != 0){
            console.log(odd)
            
        }
            
    }
}
oddNUm()

// 2. Convert all the strings to title caps in a string array

let myStringArray = ["happy", "independence", "day"];
let myNewArray = [];
let xyZ=[]

let arr = () => {
  for (let myString of myStringArray) {
    if (myString.match(/ /gi)) {
      var myBContent = myString.split(" ");
      for (let i = 0; i < myBContent.length; i++) {
        myNewArray.push(
          myBContent[i][0].toUpperCase() + myBContent[i].slice(1)
        );
      }
    } else {
      myNewArray.push(myString.charAt(0).toUpperCase() + myString.slice(1));
    }
  }
  console.log(myNewArray);

};
arr()

// 3. Sum of all numbers in an array

let arr =[12, 55 , 41, 10 ,5]
let sum= 0

let mySum = () => {
    for (let myArray of arr){
        sum += myArray
    }
    console.log(sum)

}
mySum()

// 4. Return all the prime numbers in an array

var myPrimeArray = [2, 3, 6, 9, 27, 17, 177];
let sortArray = [];

let prime = () => {
  for (let myPrime of myPrimeArray) {
    let factor = 0;
    for (let i = 0; i <= myPrime; i++) {
      if (myPrime % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      sortArray.push(myPrime);
    }
  }
  console.log(sortArray);
};
prime()

// 5. Return all the palindromes in an array

let palindrome = ["civic", "malayalam", "Array", "appa", "History"]

let palin = () => {
    for (let str of palindrome){
        let myStr = str.split("").reverse().join("")
        if(str === myStr ){
            console.log(str)
            }else{
            
            }
        
