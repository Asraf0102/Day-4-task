
//anonymous function

//1. Print odd numbers in an array

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = function(){
  for (let number of myArray){
    if (number %2 !=0){
      console.log(number)
    }
  }
}

//anonymous function
// 2. Convert all the strings to title caps in a string array

let myStringArray = ["happy", "independence", "day"];
let myNewArray = [];

let arr = function() {
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

}();

//console.log(myNewArray);


//anonymous function
// 3. Sum of all numbers in an array.

let myArray = [1, 2, 3, 4, 5];
let sum = 0;

(() => {
  for (let Array of myArray) {
    sum += Array;
  }
})();

console.log(sum);

// 4. Return all the prime numbers in an array

var myPrimeArray = [2, 3, 6, 9, 27, 17, 177];
let sortArray = [];

(() => {
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
})();

console.log(sortArray);

// 5. Return all the palindromes in an array

let palindrome = ["civic", "malayalam", "array", "mom", "dad"];

(() => {
  for (let key of palindrome) {
    let myReverseString = key.split("").reverse().join("");
    if (key == myReverseString) {
      console.log(key);
     } 
  }
})();

// 6. Return median of two sorted arrays of the same size

let myArray01 = [11, 12, 13, 14, 15];
let myArray02 = [1, 2, 3, 4, 5];
let myArray03 = [];
let mySum = 0;

(() => {
  myArray03 = [...myArray01, ...myArray02];
  for (let myArray of myArray03) {
    mySum += myArray;
  }
})();

console.log(mySum / myArray03.length);

// 7. Remove duplicates from an array

(() => {
  let myWeekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "friday",
    "monday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    "monday",
  ];
  var obj = [...new Set(myWeekdays)];
  console.log(obj);
})();

// 8. Rotate an array by k times

function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    
    const rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
      
}




