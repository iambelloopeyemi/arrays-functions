1; /* What are the differences between mutating array methods and non-mutation array methods in JavaScript.
List 5 array methods that fall under each of them.
*/

/* Mutation in context of JavaScript arrays is basically changing the 
array itself instead of returning a new array with the new changes 
whereas Non-Mutation is returning a whole new array which has 
all the changes
 */

/** Mutating Array
 * prototype. pop()
 * prototype. push()
 * prototype. shift()
 * prototype. unshift()
 * prototype. splice()
 * */

/** Non-mutating Array
 * prototype. map()
 * prototype. filter()
 * prototype. concat()
 * prototype. slice()
 * */

2;
/* Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them
 * Add ‘Kotlin’ to the end of the array
 * Add ‘Java’ after ‘Ruby’
 * Remove the first item in the array
 * Add ’Scala’ and ‘Swift’ to the beginning of the array
 * Replace ‘PHP’ with ‘Go’ and ‘Rust’
 */

const programmingLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
const programmingLanguagesUpdate1 = programmingLanguages.push("Kotlin");
const programmingLanguagesUpdate2 = programmingLanguages.splice(3, 0, "Java");
const programmingLanguagesUpdate3 = programmingLanguages.shift();
const programmingLanguagesUpdate4 = programmingLanguages.unshift(
  "Scala",
  "Swift"
);
const programmingLanguagesUpdate5 = programmingLanguages.splice(
  3,
  1,
  "Go",
  "Rust"
);
console.log(programmingLanguages);
console.log(programmingLanguagesUpdate3);

3; /* What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
	function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
  }
*/

let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}

console.log(changeFruit(fruit)); // [ 'apple', 'mango', 'orange' ]

4; /* Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
*/

function value(a, b, c, d) {
  let result = Math.max(a, b, c, d);
  return result;
}

const maximumValue = value(4, 5, 10, -2);
console.log(maximumValue);

5; /* Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
 valTimesIndex([5,10,15]) // [0,10,30]
*/

let index = 2;

let valTimesIndex = [1, 2, 3, 4].map(function (num) {
  let result = num * index;
  return result;
});

console.log(valTimesIndex);
