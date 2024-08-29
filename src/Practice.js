// let petString = "James has a pet cat.";
// let petRegex = /has/;
// let result = petRegex.match(petString);
// console.log(result);


// ^ Find start of the string
// $ Find end of the string
// [a-b] to match alphabet in between of the string
// [0-1] to match number in between of the string
// . to wildcard (h.) in the string
// [] to single character with multiple posibilities in the string
// i to match case in the string
// g to match global in the string
// ? to match short in the string
// \w to easest way to match alphanumeric in the string
// \W to easest way to find NoN alphanumeric in the string
// \d to easest way to find digit in the string
// + to to match if chacter is occur one or more times in the string`
// * to to match if chacter is occur zero or more times in the string
// [a-z][a-z] means atleast 2 alphabet same goes for number
// \s to find whitespace in a string
// \S to not find whitespace in a string
// {10} to difne length of string.
// ? to chcek possible existence of an element in a string | the previous element is optional.
// (?=u) to check positivelook ahead make sure the element in the search pattern is there, but won't actually match it
// (?!u) to check negativelook ahead make sure the element in the search pattern is not there.
// ( ) to check grouping of the characters.

// let ourStr = "titanic";
// // let ourStr = "James has had had453 hpm a pet that has3 a cat.";
// let ourRegex = /\w/;
// let oddOut = ourStr.match(ourRegex);
// console.log(oddOut)

// let users = { Alan: { online: true }, Jeff: { online: true }, Sarah: { online: false } }

// function countOnline(allUsers) {
//   let a = 0
//   for (let count in allUsers) {
//     if (allUsers[count].online === true) {
//       a++
//     }
//   }
//   return a
// }

// console.log(countOnline(users));


// function rangeOfNumbers(startNum) {
//   if (startNum < 1) {
//     return []
//   } else {
//     let countArray = rangeOfNumbers(startNum - 1);
//     countArray.push(startNum)
//     return countArray;
//   }
// };

// function rangeOfNumbers(startNum) {
//   if (startNum < 1) {
//     return 1
//   } else {
//     let countArray = rangeOfNumbers(startNum - 1);
//     return startNum * countArray;
//   }
// };

// console.log(rangeOfNumbers(5))

// function factorialize(num) {

//   var temp = 1
//   for (let i = 1; i<= num; i++) {
//     temp = temp *i
//   }
//   return temp;
// }

// console.log(factorialize(5));

// const reverseword = (word) => {
//   let a = [...word];
//   return a.reverse().join("")
// }

// function reverseword(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }

// console.log(reverseword('Hello'))


// function findLongestWordLength(str) {
//   let a = str.split(" ")
//   var b = 0
//   for(let i=0; i<a.length; i++) {
//     if (a[i].length > b) {
//       b = a[i].length;
//     }
//   }
//   // console.log(Math.max(...b));

//   return b;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function largestOfFour(arr) {
  var greaterNo = 0
  var greaterNo1 = 0
  var gretarr = arr
  var a = []
  for (var i = 0; i < gretarr.length; i++) {
    for (var j = 0; j < gretarr[i].length; j++) {
      if (gretarr[i][j] > greaterNo1) {
        greaterNo = gretarr[i][j]
        greaterNo1 = gretarr[i][j]
      }
    }
    a.push(greaterNo)
    greaterNo1 = 0
  }
  return a;
}


console.log(largestOfFour([[4, 5, 1, 3, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;  

// }

// console.log(confirmEnding("Bastian", "n"));


// function repeatStringNumTimes(str, num) {
//   var a =""
//   for (var i = 1; i<= num; i++) {
//       a= a + str
//   }

//   return a
// }

// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return ""
//   } else {
//     const a = str + repeatStringNumTimes(str, num - 1);
//     return a
//   }
// }

// console.log(repeatStringNumTimes("abc", 3));

// function pow(x, n) {
// 	if (n == 1) {
// 		return x;
// 	} else {
// 		return x * pow(x, n - 1);
// 	}
// }

// console.log(pow(2, 5));


// let company = { // the same object, compressed for brevity
// 	sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
// 	development: {
// 		sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
// 		internals: [{ name: 'Jack', salary: 1300 }]
// 	}
// };


// The function to do the job
// function sumSalaries(department) {
// 	if (Array.isArray(department)) { // case (1)
// 		return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
// 	} else { // case (2)
// 		let sum = 0;
// 		for (let subdep of Object.values(department)) {
// 			sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
// 		}
// 		return sum;
// 	}
// }

// console.log(sumSalaries(company))

// const sumTo = (val) => {
// 	if (val === 1) {
// 		return val
// 	} else {
// 		let sum = val + sumTo(val - 1)
// 		return sum
// 	}
// }

// console.log(sumTo(100))

// sumTo(2) = 2 + 1 = 3

// function truncateString(str, num) {

//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }

// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// function findElement(arr, func) {
//   var a = []
//   for (let index = 0; index < arr.length; index++) {
//     if (func(arr[index])) {
//        a.push(arr[index])
//     }
//   }
//   return a;
// }

// console.log(findElement([1, 3, 5,6 , 7, 8, 9, 10], num => num % 2 === 0));

// function titleCase(str) {
//   let a = str.split(" ")
//   var ac = []
//   var e = []
//   for (let index = 0; index < a.length; index++) {
//     // e[index] = a[index].toLowerCase().replace(a[index].charAt(0),a[index].charAt(0).toUpperCase() )
//     e[index] = a[index].toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())

//     // Another  code
//     let element = a[index][0].toUpperCase();
//     let element2 = a[index].slice(1).toLowerCase();
//     var element3 = element + element2
//     ac[index] = element3
//   }
//   console.log(e.join(" "));
//   return ac.join(" ");
// }

// console.log(titleCase("I'm bAs a little tea pot"));

// function frankenSplice(arr1, arr2, n) {
//   // console.log(arr2.splice(i, 0, arr1[j]));
//   var a = []
//   for (let i = 0; i < arr2.length; i++) {
//     for (var j = 0; j < arr1.length; j++) {
//       if (i === n) {
//         arr2.splice(i, 0, arr1[j])
//       }
//     }
//     console.log(arr2);
//   }

//   console.log(a);


//   return arr2;
// }

// function frankenSplice(arr1, arr2, n) {

//   var a = []
//   for (let i = 0; i < arr2.length; i++) {
//        if(i==n){
//          a.push(...arr1 , arr2[n])

//        }
//        else{

//           a.push(arr2[i])

//        }
//   }


//   return a;
// }

// function frankenSplice(arr1, arr2, n) {
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }

// function frankenSplice(arr1, arr2, n) {
//   return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }

// function getIndexToIns(arr, num) {
//   var a = arr.sort((a, b) => a - b);

//   for (var i in a) {
//     if (a[i] >= num) {
//       return i
//     }
//   }
//   return arr.length
// }

// console.log(getIndexToIns([2, 5, 10], 3));

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// function mutation(arr) {

//   var a = arr;

//   console.log(a);

//   return arr;
// }

// function mutation(arr) {
//   const test = arr[1].toLowerCase();
//   const target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }

// console.log(mutation(["Alien", "line"]));

// divide arr into chunk of arr


// function chunkArrayInGroups(arr, size) {
//   var a = [];

//   for (let i = 0; i < arr.length; i+=size) {
//     let b = arr.slice(i,i + size)
//     a.push(b)
//   }

//   return a;
// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// --------------------------------------------------------------------

// function sumAll(arr) {
// 	let a = arr.sort((a, b) => a - b)

// 	let c = 0
// 	while (a[0] <= a[1]) {
// 		c = a[0] + c;
// 		a[0]++
// 	}
// 	return c;
// }

// console.log(sumAll([20, 5]));


// ----------------------------------------------------------------------

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   // newArr.push(arr2.filter(el => arr1.indexOf(el) === -1))

//   function onlyInFirst(first, second) {
//     for (let i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {
//         newArr.push(first[i]);
//       }
//     }
//   }

//   onlyInFirst(arr1, arr2);
//   onlyInFirst(arr2, arr1);

//   return newArr;
// }

// function diffArray(arr1, arr2) {
//   let str = [...arr1, ...arr2]
//   console.log(str)
//   var c = []
//   let a = {};

//   for (let i = 0; i < str.length; i++) {
//     if (a[str[i]] == undefined && a[str[i]] !== " ") {
//       a[str[i]] = 1;
//     } else {
//       a[str[i]] = a[str[i]] + 1;
//     }
//   }

//   for (let b in a) {
//     if (a[b] === 1) {
//       c.push(b)
//     }
//   }
//   return c
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// ------------------------------------------------------------------------

// function destroyer(arr, ...a) {
//   let b = a
//   let c = []
//   for (let i = 0; i < arr.length; i++) {
//     if (b.indexOf(arr[i]) === -1) {
//       c.push(arr[i])
//     }
//   }

//   return c;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3, 5], 2, 3,5));
//  ---------------------------------------------------------------------------

// function whatIsInAName(collection, source) {

//   const collectionMatches = [];

//   for (let i = 0; i < collection.length; i++) {
//     let foundMismatch = false;

//     for (const sourceProp in source) {
//       if (collection[i][sourceProp] !== source[sourceProp]) {
//         foundMismatch = true;
//       }
//     }
//     if (!foundMismatch) {
//       collectionMatches.push(collection[i]);
//     }
//   }
//   return collectionMatches;
// }

// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 2, "bat": 2 }], { "apple": 1 }));
// --------------------------------------------------------------------------------------------------------------------

// function spinalCase(str) {
//   var regex = /\s+|_+/g;

//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   console.log(str);
//   return str.replace(regex, "-").toLowerCase();
// }

// console.log(spinalCase('AllThe-small Things'));
// -----------------------------------------------------------------

// function translatePigLatin(str) {
//   let a = /^[a,e,i,o,u]/;
//   let arr = ""
//   let arr1 = ""
//   for (let i = 0; i <= str.length; i++) {
//     if (a.test(str)) {
//      return str += 'way'
//     }
//     if (!a.test(str[i])) {
//       arr += str.slice(i, i + 1);
//       arr1 = str.slice(i + 1)
//     } else {
//       return arr1 + arr + 'ay'
//     }
//   }
//   return arr;
// }

// console.log(translatePigLatin("ght"))
// -------------------------------------------------------------------

// function myReplace(str, before, after) {
//   let reg = /^[A-Z]/;
//   let reg1 = /^[a-z]/;
//   if (reg.test(before[0])) {
//     var b = after.replace(after[0],after[0].toUpperCase())
//     return str.replace(before, b)
//   } else if ((reg1.test(before[0]))) {
//     // return str.replace(before, after)
//     var b = after.replace(after[0],after[0].toLowerCase())
//     return str.replace(before, b)
//   }
// }

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
// -------------------------------------------------------------------

// function pairElement(str) {
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {

//     switch (str[i]) {
//       case "A":
//         arr.push(["A", "T"]);
//         break;
//       case "T":
//         arr.push(["T", "A"]);
//         break;
//       case "C":
//         arr.push(["C", "G"]);
//         break;
//       case "G":
//         arr.push(["G", "C"]);
//         break;
//       default:
//         console.log("Not Found")
//     }
//   }
//   return arr;
// }

// console.log(pairElement("GCG"))
// --------------------------------------------------------------------------------

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// function findMissingLetter(str) {
//   var a = "abcdefghijklmnopqrstuvwxyz"
//   let b = ""
//   let c = ""
//   for (let j in a) {
//     if (str[0] === a[j]) {
//       c = a.slice(j, str.length + +j + 1)
//     }
//   }
//   for (let k in c) {
//     if (str[k] !== c[k]) {
//       return b += c[k];
//     }
//   }
// }

// console.log(findMissingLetter("bcdf"))
// --------------------------------------------------------------------------------

// Palindrome Number

// const palindrome = (str) => {
//   console.log(str);
//   let a = "";
//   for (let i = str.length -1; i >= 0; i--) {
//     a+= str[i]
//   }
//   if (str === a) {
//     return `It's a Palindrome ${str}`
//   } else {
//     return `It's not a Palindrome ${str}`
//   }
// }

// console.log(palindrome('Vishal'));
// --------------------------------------------------------------------------

// function uniteUnique(arr1, arr2, arr3) {
//   const finalArray = [];
//   for (let i = 0; i < arguments.length; i++) {
//     const arrayArguments = arguments[i];

//     for (let j = 0; j < arrayArguments.length; j++) {
//       let indexValue = arrayArguments[j];

//       if (finalArray.indexOf(indexValue) < 0) {
//         finalArray.push(indexValue);
//       }
//     }
//   }

//   return finalArray;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// --------------------------------------------------------------------------
// function convertHTML(str) {
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };

//   return str
//     .split("")
//     .map(entity => htmlEntities[entity] || entity)
//     .join("");
// }

// console.log(convertHTML("Hamburgers < Pizza < Tacos"))
// ----------------------------------------------------------------------------

// function sumFibs(num) {
//   let a = []
//   let b = 0
//   let c = 1
//   let d
//   let e = 0
//   for (let i = 0; i <= num; i++) {
//     d = b + c
//     a.push(b)
//     b = c
//     c = d
//   }
//   console.log(a);
//   for (let j = 0; j <= num; j++) {
//     if (a[j] <= num) {
//       if (a[j] % 2 !== 0) {
//         e = e + a[j]
//       }
//     }
//   }

//   return e;
// }

// console.log(sumFibs(10))
// -------------------------------------------------------------

// function sumPrimes(num) {
//   let a = []

//   function test_prime(n) {

//     if (n === 1) {
//       return false;
//     }
//     else if (n === 2) {
//       return true;
//     } else {
//       for (var x = 2; x < n; x++) {
//         if (n % x === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }

//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (test_prime(i))
//       sum += i;
//   }
//   return sum
// }
// // console.log(3 % 2);
// console.log(sumPrimes(977))

// function primeNumber(n) {
//   if (n === 1) {
//     return false;
//   }
//   else if (n === 2) {
//     return true;
//   } else {
//     for (var x = 2; x < n; x++) {
//       if (n % x === 0) {
//         return "not prime";
//       }
//     }
//     return "prime";
//   }
// }
// // 2,3,5,7
// console.log(primeNumber(8))

// function ob() {

//   // const user = {}
//   const user = {"vish": "sdf","vish1": "sdf"}
//   if (Object.keys(user).length !== 0) {
//     return Object.keys(user).length
//   } else {
//     return Object.keys(user).length
//   }
// }
// console.log(ob())
//  -------------------------------------------------------------------
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
// smallestCommons([1, 5]) should return 60.
// 1*2*3*4*5
// console.log(1*2*3*4*5);
// function smallestCommons(arr) {
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b);
//   const numberDivisors = max - min + 1;
//   // Largest possible value for SCM
//   let upperBound = 1;
//   for (let i = min; i <= max; i++) {
//     upperBound *= i;
//   }
//   // Test all multiples of 'max'
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     // Check if every value in range divides 'multiple'
//     let divisorCount = 0;
//     for (let i = min; i <= max; i++) {
//       // Count divisors
//       if (multiple % i === 0) {
//         divisorCount += 1;
//       }
//     }
//     if (divisorCount === numberDivisors) {
//       return multiple;
//     }
//   }
// }

// console.log(smallestCommons([1, 5]))

// smallestCommons([1,5]);
// ---------------------------------------------------------------------------

//  function dropElements(arr, func) {
//   let a = arr;
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return a.slice(i, arr.length)
//     }
//   }
//   return []
// }

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
// -----------------------------------------------------------------------------
// Flatten a nested array. You must account for varying levels of nesting.

// function steamrollArray(arr) {
//   let a = arr.flat(Infinity)
//   return a;
// }

// function steamrollArray(arr) {
//   const flattenedArray = [];

//   // Loop over array contents
//   for (let i = 0; i < arr.length; i ++) {
//     if (Array.isArray(arr[i])) {
//       // Recursively flatten entries that are arrays
//       //  and push into the flattenedArray
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       // Copy contents that are not arrays
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// };

// console.log(steamrollArray([1, [2], [3, [[4]]]]))
// --------------------------------------------------------------------------
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// function binaryAgent(str) {
//   return str;
// }

// function binaryAgent(str) {

//   // let a = "a";
//   // console.log(a.charCodeAt(0).toString(2))
//   // let b = []

//   // for (let j = 0; j < a.length; j++) {
//   //   b.push((a[j].charCodeAt(0)).toString(2))
//   // }
//   // console.log(b.join(" "));

//   var biString = str.split(" ");
//   var uniString = [];

//   /*using the radix (or base) parameter in parseInt, we can convert the binary
//       number to a decimal number while simultaneously converting to a char*/
//       // 10000001
//       // 128 64 32 16 8 4 2 1  1 1001
//   for (var i = 0; i < biString.length; i++) {
//     uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
//   }

//   // we then simply join the string
//   return uniString.join("");
// }
// //  I have clear the first round of interview and they mailed to call for second round but i havnt received the call.
// //  so i want to write a follow up mail regarding that
// // console.log(111, (20).toString(2))
// // console.log(111, parseInt("00010100", 2))
// console.log(1234,binaryAgent("01010110 01001001 01010011 01001000 01000001 01001100"))
// console.log(binaryAgent("1000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
// --------------------------------------------------------------------------------

// function truthCheck(collection, pre) {
//   let a = []

//   for (let i = 0; i < collection.length; i++) {
//     // for (let j in collection[i]) {
//       if (collection[i].hasOwnProperty(pre)) {
//         if (Boolean(collection[i][pre])) {
//           a.push(true)
//         } else {
//           a.push(false)
//         }
//       }
//     // }
//   }
//   console.log(a);
//   if (a.includes(false)) {
//     return false
//   }

//   return true;
// }

// // console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"))
// console.log(truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id"))
// console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"))
// ------------------------------------------------------------------------------------

// Vishal@123
// Vishal#123
// Vishal@786
// vishal@123
// vishal@786
// Pass@123
// 9320010198
// function addTogether() {
//   const [first, second, third] = arguments;
//   console.log(arguments);

//   function addSecond(second) {
//     if (typeof (second) === "number") return first + second;
//   }

//   if (typeof (first) === "number") {
//     if (arguments.length === 1) return addSecond;
//     if (arguments.length === 2) return addSecond(second);
//   }
// }

// console.log(addTogether(8, 2))
// ---------------------------------------------------------------

// const Person = function(first, last) {
//   let firstName = first;
//   let lastName  = last;

//   this.getFirstName = function() {
//     return firstName;
//   };

//   this.getLastName = function() {
//     return lastName;
//   };

//   this.getFullName = function() {
//     return this.getFirstName() + " " + this.getLastName();
//   };

//   this.setFirstName = function(first) {
//     return firstName = first;
//   };

//   this.setLastName = function(last) {
//     return lastName = last;
//   };

//   this.setFullName = function(first, last) {
//     this.setFirstName(first);
//     this.setLastName(last);
//     return this.getFullName();
//   };
// };

// const Tushar = new Person("Bob", "Ross");
// console.log(Tushar.setsamefirstLast("vishal"))
// ---------------------------------------------------------

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const a = 2 * Math.PI;
//   console.log(a);
//   const newArr = [];

//   const getOrbPeriod = function (obj) {
//     const c = Math.pow(earthRadius + obj.avgAlt, 3);
//     const b = Math.sqrt(c / GM);
//     const orbPeriod = Math.round(a * b);
//     // create new object
//     return { name: obj.name, orbitalPeriod: orbPeriod };
//   };

//   for (let elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }
//   return newArr;
// }


// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))

// console.log(typeof (Math.trunc(13.564)));
// ------------------------------------------------------------------------

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

// function palindrome(str) {
//   let a = "";
//   let b = ""
//   let c = /[^_\W]+/
//   let d = str
//   for (let j = 0; j < str.length; j++) {
//     if (c.test(str[j])) {
//       b += str[j].toUpperCase()
//     }
//   }
//   console.log(b);

//   for (let i = d.length - 1; i >= 0; i--) {
//     if (c.test(d[i])) {
//       a += d[i].toUpperCase()
//     }
//   }
//   console.log(a);

//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome("Race Car"))

// var getSum = function (a, b) { 
//   if (b == 0) {
//     return a;
//   } else {
//     return getSum(a ^ b, (a & b) << 1)
//   }
// };


// const getSum = (a, b) => {
//   let arr = [];
//   for (let i = 0; i < a; i++) {
//     arr.push(a)
//   }
//   for (let i = 0; i < b; i++) {
//     arr.push(b)
//   }
//   return arr.length
// }
// 0 & 0	0
// 0 & 1	0
// 1 & 0	0
// 1 & 1	1
// 0 ^ 0	0
// 0 ^ 1	1 
// 1 ^ 0	1
// 1 ^ 1	0 


// console.log(getSum(41, 9))
// let a = "101001"
// console.log(333,parseInt(a, 2))
// -------------------------------------------------------

// Two Pointer Approach to sum two number

// var twoSum = function (nums, target) {
//   let newNum = nums.sort((a,b) => a-b)
//   // let newNum = nums
//   let a = 0;
//   let b = newNum.length - 1
//   let c = 0
//   let d = []
//   // 2,7,8,11,15
//   // 11, 2, 8, 15, 7
//   while (newNum[a] > 0) {
//     c = newNum[a] + newNum[b];
//     if (c === target) {
//       d.push(a, b);
//       return d
//     } else if (c < target) {
//       a++
//     } else if (c > target) {
//       b--
//     }
//   }
// };
// function twoSum(nums, target) {
//   let sum = ''
//   let arr = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       sum = nums[i] + nums[j]
//       if (sum === target && !arr.includes(nums[j])) {
//         arr.push(i, j)
//       }
//     }
//   }
//   return arr
// }

// console.log(twoSum([11, 2, 8, 15, 7], 26));
// --------------------------------------------------------

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// var lengthOfLongestSubstring = function (s) {

//   let arr = []
//   let len = 0

//   for (let i = 0; i < s.length; i++) {
//     if (arr.includes(s[i])) {
//       if (len < arr.length) len = arr.length
//       // let index = arr.indexOf(s[i])
//       arr.splice(0, arr.length - 1)
//     }
//     arr.push(s[i])
//   }
//   if (len < arr.length) {
//     return arr.length
//   }
//   else { return len }
// };

// console.log(lengthOfLongestSubstring("abcdabcdebb"));
// ---------------------------------------------------------

// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// var longestPalindrome = function (s) {
//   let longstring = ''
//   let substring = ''
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; j > i; j--) {
//       substring = s.slice(i, j)
//       if (ispallindrome(substring) && longstring.length < substring.length) {
//         longstring = substring
//       }
//     }
//   }
//   return longstring
// };

// function ispallindrome(substring) {
//   for (let i = 0; i < substring.length; i++) {
//     if (substring[i] != substring[substring.length - (1 + i)]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(longestPalindrome("babad"));
// -----------------------------------------------------------------------

// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

// var maxArea = function (height) {

//   let max = 0;
//   let left = 0;
//   let right = height.length - 1;

//   while (left < right) {
//     const h = Math.min(height[left], height[right]);
//     const w = right - left;
//     const area = h * w;

//     max = Math.max(max, area);

//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return max;
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// -------------------------------------------------------------------------------------

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.


// console.log(threeSum([-1, 0, 1, 2, -1, -4]))


// function threeSum(nums) {
//   const results = []

//   // obviously irrelevant if we don't have at least 3 numbers to play with!
//   if (nums.length < 3) return results
//   // [-4,-1,-1,0,1,2]
//   // having the numbers in ascending order will make this problem much easier.
//   // also, knowing the overall problem  will take at least O(N^2) time, we can
//   // afford the O(NlogN) sort operation
//   nums = nums.sort((a, b) => a - b)

//   // if the question asks us for a custom target, we can control it here
//   let target = 1

//   for (let i = 0; i < nums.length - 2; i++) {
//     // `i` represents the "left" most number in our sorted set.
//     // once this number hits 0, there's no need to go further since
//     // positive numbers cannot sum to a negative number
//     if (nums[i] > target) break

//     // we don't want repeats, so skip numbers we've already seen
//     if (i > 0 && nums[i] === nums[i - 1]) continue

//     // `j` represents the "middle" element between `i` and `k`.
//     // we will increment this up through the array while `i` and `k`
//     // are anchored to their positions. we will decrement `k` for
//     // for each pass through the array, and finally increment `i`
//     // once `j` and `k` meet.
//     let j = i + 1

//     // `k` represents the "right" most element
//     let k = nums.length - 1

//     // to summarize our setup, we have `i` that starts at the beginning,
//     // `k` that starts at the end, and `j` that races in between the two.
//     //
//     // note that `i` is controlled by our outer for-loop and will move the slowest.
//     // in the meantime, `j` and `k` will take turns inching towards each other depending
//     // on some logic we'll set up below. once they collide, `i` will be incremented up
//     // and we'll repeat the process.

//     while (j < k) {
//       let sum = nums[i] + nums[j] + nums[k]

//       // if we find the target sum, increment `j` and decrement `k` for
//       // other potential combos where `i` is the anchor
//       if (sum === target) {
//         // store the valid threesum
//         results.push([nums[i], nums[j], nums[k]])

//         // this is important! we need to continue to increment `j` and decrement `k`
//         // as long as those values are duplicated. in other words, we wanna skip values
//         // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
//         // [[-2,0,2], [-2,0,2]].
//         //
//         // (i'm not a fan of this part because we're doing a while loop as we're
//         // already inside of another while loop...)
//         while (nums[j] === nums[j + 1]) j++
//         while (nums[k] === nums[k - 1]) k--

//         // finally, we need to actually move `j` forward and `k` backward to the
//         // next unique elements. the previous while loops will not handle this.
//         j++
//         k--

//         // if the sum is too small, increment `j` to get closer to the target
//       } else if (sum < target) {
//         j++

//         // if the sum is too large, decrement `k` to get closer to the target
//       } else { // (sum > target)
//         k--
//       }
//     }
//   }

//   return results
// };


// --------------------------

// Let is block scope i.e. it can be updated inside the defined block like {}, [], ().
// const cannot be redeclared or updated.
// var is a functional and global scope
// only + operator converts its operand to string and rest operators converts its operand into number
// = operator has the lowest precedence
// , operator has the lowest precedence than = operator and it evalutes its all expression but return only its last expression.
// precedence *,/,+,-,=,,
// increment / decrement operation has prefix(++a) and postfix(a++)
// Prefix increment the value and show the incremented value imediately
// postfix increment the value but show the previous value
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NAN
// "  -9  " + 5 // " -9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NAN
// " \t \n" - 2 // -2
// 'use Strict' mode will make whole script work in the mordern way of js it should be put on the top of the code.
// Strings are compared letter-by-letter in the “dictionary” order.
// The values null and undefined equal == each other and do not equal any other value.
// === is strict mode in it value is not converted to number.
// == value is converted to number while comparing

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).

// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.

// String, Number, Null, undefined, Boolean, BigInt, Object, Symbol
// NAN is sticky any futher operations on NAN returns NAN
// typeof Null is special so object is recognized error of typeof
// The precedence of AND && operator is higher than OR ||.

// ?? allows to check null or undefined.

// Arrow function is basically the imporve/shoter version of function expression.

// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

// objects are used to store keyed collections of various data and more complex entities.
// In object property key also known as "name" or "Identifier"
// in Object key can be access using dot notation(.)/ square bracket (allows to take key from the variable).

// A function that is a property of an object is called its method.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.

// A Key diffrence between Object and Primitive values are object are stored and copy by refrence whereas (string, number) are always copied as "whole value".
// To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function
// Optional Chaining: The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

// Arrays are Object
// Array slice method can also be used to copy array.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items. (It modify the array itself,)
// 1 to delete element and 0 for intsert element
// var arr1 = [2, 3, 5, 7];
// var del = arr1.splice(1, 1)
// console.log(del)
// console.log(arr1)

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// var arr1 = [2, 3, 5, 7];
// var del = arr1.slice(1, 4)
// console.log(del)
// console.log(arr1)

// Objects are used for storing keyed collections.
// Arrays are used for storing ordered collections.

// Data Structure and Algorithms ---
// Arrays
// Linked Lists
// Stacks
// Queues
// Trees (Binary Trees, Binary Search Trees)
// Hash Tables
// Heaps
// Graphs

// Study fundamental algorithms:
// Sorting algorithms (Bubble Sort, Quick Sort, Merge Sort)
// Searching algorithms (Binary Search, Linear Search)
// Recursion
// Dynamic Programming
// Greedy Algorithms
// Divide and Conquer

// In summary, the spread operator is used to spread elements, whether in arrays or objects,
// while the rest operator is used to collect elements, typically in function parameters or destructuring.
// The commonality is the use of the ... syntax, but their roles are distinct.

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.

// A function can be called with any number of arguments, no matter how it is defined.

// In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.
// The Lexical Environment object consists of two parts:

// Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
// A reference to the outer lexical environment, the one associated with the outer code.
// A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

// A closure is a function that remembers its outer variables and can access them.
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// Eg
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();
// let name = "John";

// function sayHi() {
// 	console.log("Hi, " + name);
// }

// name = "Pete";
// sayHi();

// function makeWorker() {
// 	let name = "Pete";

// 	return function() {
// 	  console.log(name);
// 	};
//   }

//   let name = "John";

//   // create a function
//   let work = makeWorker();

//   // call it
//   work(); // what will it show?

// function makeCounter() {
// 	let count = 0;

// 	return function() {
// 	  return count++;
// 	};
//   }

//   let counter = makeCounter();
//   let counter2 = makeCounter();

//   console.log( counter() ); // 0
//   console.log( counter() ); // 1

//   console.log( counter2() ); // ?
//   console.log( counter2() ); // ?

// function Counter() {
// 	let count = 0;

// 	this.up = function() {
// 	  return ++count;
// 	};
// 	this.down = function() {
// 	  return --count;
// 	};
//   }

//   let counter = new Counter();

//   console.log( counter.up() ); // ?
//   console.log( counter.up() ); // ?
//   console.log( counter.down() ); // ?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi () {
//     return `${phrase}, ${user}`;
//     // console.log(`${phrase}, ${user}`);
//   }
// }

// console.log(sayHi())

// let x = 1;

// function func() {
// 	console.log(x); // ?

// 	let x = 2;
// }

// func();

// function makeArmy() {
// 	let shooters = [];

// 	let i = 0;
// 	while (i < 10) {
// 		let j = i
// 		let shooter = function () { // create a shooter function,
// 			console.log(j); // that should show its number
// 		};
// 		shooters.push(shooter); // and add it to the array
// 		i++;
// 	}

// 	// ...and return the array of shooters
// 	return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

// console.log(130 * 3)

// console.log(false + "1")
// console.log("------------------")

// let mapObj = { jhon: "Hey there" };

// let map = new Map();

// map.set("vishal", "boy")
// map.set(mapObj, 12);
// console.log("myObj", mapObj)

// console.log(map.get("vishal"))

// console.log(practice(3));

// function practice(val) {
// 	const a = "This is Function Declaration..";

// 	let firstName = null;
// 	let lastName = null;
// 	let nickName = undefined;
// 	let whatsForLunchToday = ""

// 	console.log(firstName ?? lastName ?? nickName ?? whatsForLunchToday ?? "Vishal")
// 	return null == undefined;
// }

// let heyVis = function () {
// 	return "This is Funciton Expression.."
// }

// console.log(heyVis())

// let arrowFun = (a, b) => { return a + b; }

// // console.log(arrowFun(2,3));
// let val = "Vishal";
// let val2 = "age"

// let newObject = {
// 	[val]: "tushar",
// 	[val2]: 30,
// }

// // console.log(newObject.age ?? undefined);

// newObject.sayHi = function () { return "Hello there !!!" }
// console.log(newObject)

// console.log(newObject.sayHi())

// var result = new Date().setDate(new Date().getDay() + 3);
// console.log(new Date(result))


// var isValid = function (s) {
// 	let stack = [];
// 	for (let c of s) {
// 		if (c === '(' || c === '{' || c === '[') {
// 			stack.push(c); // push it onto the stack
// 		} else { // if the character is a closing bracket
// 			if (!stack.length || // if the stack is empty or
// 				(c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
// 				(c === '}' && stack[stack.length - 1] !== '{') ||
// 				(c === ']' && stack[stack.length - 1] !== '[')) {
// 				return false; // the string is not valid, so return false
// 			}
// 			stack.pop(); // otherwise, pop the opening bracket from the stack
// 		}
// 	}
// 	return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
// 	// so the string is valid, otherwise, there are unmatched opening brackets, so return false
// };

// console.log(isValid("([]])"))

// -------24/01/2024-------------------------------------------------------------------------------------------------------------------------------

// Declarations are hoisted, but assignments are not.
// function sayHi() {
// 	var phrase;
// 	console.log(phrase);

// 	phrase = "Hello"
// }
// sayHi()

// If the function is declared as a Function Expression (not in the main code flow), and it carries the name,
// then it is called a Named Function Expression. The name can be used inside to reference itself, for recursive calls or such.

// Another way to write function but it has access to global env not to outer lexical env
// eg :- let mul = new Function('a', 'b', 'return a * b');
// console.log( mul(3, 2) ); // 3

// -------------------------------------------------------------------
// 25-01-2024
// Function Binding

// Arrow functions:

// Do not have this
// Do not have arguments
// Can’t be called with new
// They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance

// Object properties, besides a value, have three special attributes (so-called “flags”):

// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
// eg  :-
// let user = {
// 	name: "John"
// };

// Object.defineProperty(user, "name", {
// 	// writable: false
// 	enumerable: true,
// 	configurable: true
// });

// user.name = "Pete";
// console.log(user.name)

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// for (let i = 0; i <= 6; i++) {

// 	setTimeout(() => {
// 		console.log(i);
// 	})
// }

// ---------------12/02/2024---------------------------------------------
// The async keyword before a function has two effects:

// Makes it always return a promise.
// Allows await to be used in it.
// The await keyword before a promise makes JavaScript wait until that promise settles, and then


// function trimSpace(str) {
//   // let reg = /\s/g
//   // let result = str.match(reg)
//   let result = ""
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       result += str[i]
//     }
//   }
//   return result

// }

// console.log(trimSpace("abc def g hi"))

// function triangleNumberPattern(val) {
//   let n = 5; // height of pattern
//   let string = "";
//   let count = 1
//   // External loop
//   for (let i = 1; i <= n; i++) {
//     // Internal loop
//     // for (let j = 1; j <= i; j++) {
//     for (let j = n; j >= i; --j) {
//       string += j;
//       // count++
//     }
//     string += "\n";
//   }
//   console.log(string);

// }
// console.log(triangleNumberPattern())

// function middletriangleNumberPattern(val) {
//   let n = 5;
//   let string = "";
//   // External loop
//   for (let i = 1; i <= n; i++) {
//     // creating spaces
//     for (let j = 1; j <= n - i; j++) {
//       string += " ";
//     }
//     // creating numbers
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       string += "k";
//     }
//     string += "\n";
//   }
//   console.log(string);
//   // ****5
//   // ***555
//   // **55555
// }
// console.log(middletriangleNumberPattern(5))

// ------------- Object Deep Cloning --------------------

// function deepClone(obj) {

//   let o = { vishal: "123" }

//   let b = JSON.parse(JSON.stringify(o));
//   // let b = Object.assign(o)
//   // o.vishal = "456"
//   b.vishal = "321"
//   console.log("oooo", o); 
//   console.log("bbbb", b); 
// }

// console.log(deepClone({ vishal: "123" }))

// --------------- Recurrsive Fibonacci Series -----------

// function RecFibonacci(val) {
//   if (val <= 1) {
//     return val
//   } else {
//     return RecFibonacci(val - 1) + RecFibonacci(val - 2)
//   }
// }
// // 0,1,1,2,3,5

// console.log(RecFibonacci(6));

// ----------------Bubble Sorting--------------

// Go through the array, one value at a time.
// For each value, compare the value with the next value.
// If the value is higher than the next one, swap the values so that the highest value comes last.
// Go through the array as many times as there are values in the array.
// const bubbleSorting = (array) => {
//   let temp
//   for (let i = 0; i <= array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp
//       }
//     }
//   }
//   return array
// }

// console.log(bubbleSorting([64, 34, 25, 12, 22, 11, 90, 5]))

// ------------------- Selection Sorting ---------------
// The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

// const SlectionSorting = (array) => {
//   let n = array.length;

//   for (let i = 0; i < n; i++) {
//     // Finding the smallest number in the subarray
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if (min != i) {
//       // Swapping the elements
//       let tmp = array[i];
//       array[i] = array[min];
//       array[min] = tmp;
//     }
//   }
//   return array;
// }

// console.log(SlectionSorting([64, 34, 25, 5, 22, 11, 90, 12]))

// ----------- Insertion Sorting ------------------------

// The Insertion Sort algorithm uses one part of the array to hold the sorted values,
// and the other part of the array to hold values that are not sorted yet.


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}
console.log(insertionSort([64, 34, 90, 12]))

/*
Variables in Memory
Let's imagine that we want to store the integer "17" in a variable myNumber. For simplicity, let's assume the integer is stored as two bytes (16 bits), and the address in memory to myNumber is 0x7F30.

0x7F30 is actually the address to the first of the two bytes of memory where the myNumber integer value is stored. When the computer goes to 0x7F30 to read an integer value, it knows that it must read both the first and the second byte, since integers are two bytes on this specific computer.

The image below shows how the variable myNumber = 17 is stored in memory.

*/

// Binary search algorithm
// The Binary Search algorithm searches through an array and returns the index of the value it searches for.
// find the lowest value in linklist using react js 

function BinarySearch(arr) {
  let target = 11;
  let left = 0;
  let right = arr.length - 1
  let middle = 0
  for (let i = middle; i < arr.length; i++) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return arr[middle];
    } else if (target > arr[middle]) {
      left = middle + 1
    } else if (target < arr[middle]) {
      right = middle - 1
    }
  }

  return -1
}

console.log(BinarySearch([2, 3, 7, 7, 11, 15, 25]));

// program to check an Armstrong number of n digits=
function amSt(val) {

  let sum = 0;
  let spredNum = [...val]
  let j = 0
  for (let i = 0; i < spredNum.length; i++) {
    let temp2 = spredNum[i]
    while (j < spredNum.length - 1) {
      temp2 = temp2 * spredNum[i]
      j++
    }
    sum += temp2
    j = 0
  }

  if (sum == val) {
    return `${val} is an Armstrong number`
  }
  else {
    return `${val} is not an Armstrong number.`
  }

}

console.log(amSt("371"));

// -------------------------------Combinatin Sum---------------------------------

/*
Given an array of distinct integers candidates and a target integer target,
return a list of all unique combinations of candidates where the chosen numbers sum to target.
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target
is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
*/

// var combinationSum = function (candidates, target) {
//   const result = [];
//   const path = [];
//   candidates.sort((a, b) => a - b);
//   console.log(123,candidates);
//   backtrack(candidates, 0, target, path, result);
//   return result;
// };

// function backtrack(candidates, start, target, path, result) {
//   if (target === 0) {
//     result.push([...path]);
//     return;
//   }
//   if (target < 0) {
//     return;
//   }
//   for (let i = start; i < candidates.length; i++) {
//     path.push(candidates[i]);
//     backtrack(candidates, i, target - candidates[i], path, result);
//     path.pop();
//   }
// }

// console.log(combinationSum([2,3,6,7], 7))

// -----------------------------------------------------------

/*
Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two
elements in A[] whose sum is exactly x.

Examples:

Input: arr[] = {0, -1, 2, -3, 1}, x= -2
Output: Yes
Explanation: If we calculate the sum of the output,1 + (-3) = -2

Input: arr[] = {1, -2, 1, 0, 5}, x = 0
Output: No



*/

// const SumNum = () => {
//   let arr = [1, -2, 1, 0, 5];
//   let target = 0

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum = arr[i] + arr[j]

//       if (sum === target) {
//         return "yes"
//       }
//     }
//   }
//   return "No"
// }

// console.log(SumNum());

// ----------------------------------------------------------------------

/*
Given an array prices[] of length N, representing the prices of the stocks on different days, 
the task is to find the maximum profit possible by buying and selling the stocks on different 
days when at most one transaction is allowed.

Note: Stock must be bought before being sold.

Examples:

Input: prices[] = {7, 1, 5, 3, 6, 4}
Output: 5
Explanation:
The lowest price of the stock is on the 2nd day, i.e. price = 1. Starting from the 2nd day, the highest price of the stock is 
witnessed on the 5th day, i.e. price = 6. 
Therefore, maximum possible profit = 6 – 1 = 5. 

Input: prices[] = {7, 6, 4, 3, 1} 
Output: 0
Explanation: Since the array is in decreasing order, no possible way exists to solve the problem.

*/


function maxProfit(prices, n) {
  let buy = prices[0], max_profit = 0;
  for (let i = 1; i < n; i++) {

    // Checking for lower buy value
    if (buy > prices[i])
      buy = prices[i];

    // Checking for higher profit
    else if (prices[i] - buy > max_profit)
      max_profit = prices[i] - buy;
  }
  return max_profit;
}

// Driver Code

let prices = [7, 6, 4, 3, 1];
let n = 5;
let max_profit = maxProfit(prices, n);
console.log(max_profit);



// const person = {
//   name: 'John',
//   age: 30,
//   greet() {
//     console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//   }
// };

// console.log(person.greet()); 

// function greet() {
//   console.log('Hello, my name is ' + this.name);
//   }

//   const person = {
//   name: 'John',
//   sayHello: greet
//   };

//   const anotherPerson = {
//   name: 'Alice'
//   };

//   greet(); // Output: Hello, my name is undefined
//   person.sayHello(); // Output: Hello, my name is John
//   greet.call(anotherPerson); // Output: Hello, my name is Alice

// const person = {
//   name: "ram",
//   age: 22,
//   greet: () => {
//     return `Hello , you are ${this.age} years old`
//   }
// }
// console.log(person.greet());
// -------------------------------------------------------------------------

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
  let a = [...list1, ...list2]

  return a.sort();
};

console.log(mergeTwoLists([], [0]))

// ---------------------------------------------------------------------------------------

/*

    * Javascript Event Loops
    Both the browser and Node.js are constantly running a single-threaded event loop.
    That means they execute only one line of code at a time.
    It's easier to picture it if you imagine a circle. The browser and Node.js repeat the process, checking for code execution.

    Things get spicy here because sometimes developers deliberately queue tasks.
    So, the browser executes them on the next event.
    The event loop checks for pending tasks and runs them in a specific order.
    Thanks to this mechanism, the browser can execute tasks in a non-blocking way,
    which is handy since modern websites have many things going on.

    A. JavaScript Reduce()
    Reduce is a powerful method that takes an array of elements to reduce them by applying a function to each element.
    It accumulates all the elements and returns a single value.

    B. JavaScript Map()
    The Map function allows you to modify each element of an array returning a new identical array.
    You can also accomplish this by using for loops or nesting.
    Map() provides a more elegant way to do it following the functional programming rules.

    C. JavaScript Filter()
    This function can filter an array according to a particular condition and returns a new array with the elements
    that passed the condition. Remember that the original stays as is since it returns a new array.

    D. JavaScript Sort()
    The sort() function allows you to overwrite an array by sorting its elements.
    If it's an array of integers, it'll sort it in ascending order by default.
    On the flip side, if it's an array of strings, it will sort it alphabetically.
    What if you don't want to sort an array in alphabetical or ascending order, you may ask?
    You can easily sort arrays in non-alphabetical or descending order by combining sort() with reverse().
    So after sorting the list, you have to do listname.reverse() to reverse its order.

    8. JavaScript Generators
    You can think of generators as special functions that you can pause and resume.
    Plus, they provide a new way to interact with iterators and regular functions.
    Instead of producing all values simultaneously, they create them as a sequence on the fly.

    That might not sound very clear, so let's show you how they work with a cool example.
    In JavaScript, you can create functions using the function* syntax.
    Then you can use the keyword yield to stop the function and return a value to the user.

    9. JavaScript Hoisting
    This concept will definitely blow your mind if you come from another language.
    Hoisting allows you to declare variables and functions after their assignment.
    It has this name because it is as if the interpreter hoists those variables and functions to the top of the scope.

    10. What are webpacks
    Its primary purpose is to bundle JavaScript to use in the browser.
    Webpack also has many features apart from bundling JavaScript code like hot reload replacement
    feature that removes the pain of having to refresh the browser for every new feature added to the codebase.

    11. What are middleware in react js
    In React Redux apps, middlewares act as gatekeepers for actions.
    They can control what happens to actions, changing or adding to how they work. With middlewares,
    you can log actions, handle asynchronous tasks, and add authentication and authorization rules

    12. what are web workers in react js?
    A web worker is a JavaScript feature that allows you to run scripts in the background, separate from the main thread 
    of your web page. This background execution enables you to perform tasks concurrently without blocking the user 
    interface (UI) or causing it to become unresponsive. Web workers are particularly useful for handling computationally 
    intensive or time-consuming operations without impacting the user's experience.

    13. difference between web workers and service workers?
    Web Workers are used to offload CPU-intensive tasks from the main thread, 
    while Service Workers are used to intercept network requests and provide offline support and push notifications

    14. useLayoutEffect in react js?
    useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
    Most components don’t need to know their position and size on the screen to decide what to render. 
    They only return some JSX. Then the browser calculates their layout (position and size) and repaints the screen.
    Sometimes, that’s not enough. Imagine a tooltip that appears next to some element on hover. 
    If there’s enough space, the tooltip should appear above the element, but if it doesn’t fit, 
    it should appear below. In order to render the tooltip at the right final position, you need 
    to know its height (i.e. whether it fits at the top).


*/

var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
  return nums1
};

var merge = function (num1, m, num2, n) {
  let j = 0
  for (let i = m; i < m + n; i++) {
    num1[i] = num2[j]
    j++
  }
  return num1.sort((a, b) => a - b)
}


// console.log(333, merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

// var removeElement = function(nums, val) {
//   let index = 0;

//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] != val) {
//           nums[index] = nums[i];
//           index++;
//       }
//   }
//   return index;
// };

// console.log(123,removeElement([3,2,2,3], 4))

/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique
element appears only once. The relative order of the elements should be kept the same.
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

var removeDuplicates = function(nums) {
  nums = nums.sort((a,b) => a-b);
  let i = nums.length - 1;
  while (i > 0) {
      if (nums[i] == nums[i - 1]) {
          nums.splice(i, 1);
      }
      i--;
  }
  return nums.length;
};

console.log(222, removeDuplicates([0,0,1,1,1,2,2,3,3,2,6,4]))
*/

/*
The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// var majorityElement = function(nums) {
//   let obj = {}
//   // for (let i = 0; i < nums.length; i++) {
//   //   if (obj[nums[i]] === undefined) {
//   //     obj[nums[i]] = 1
//   //   } else {
//   //     obj[nums[i]] = obj[nums[i]] + 1
//   //   }
//   // }
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] = (obj[nums[i]] || 0) + 1
//   }
//   let c = 0
//   for (let j in obj) {
//     if (obj[j] > c) {
//       c = j
//     }
//   }
//   console.log(121, c);
//   return obj
// };


// var majorityElement = function (nums) {
//   let candidate, count = 0
//   for (let num of nums) {
//     if (count === 0) {
//       candidate = num
//     }

//     count += (num === candidate) ? 1 : -1
//   }

//   return candidate;
// };
// console.log(123, majorityElement([2, 2, 1, 1, 3, 1, 3, 3, 3, 2,3, 2]))



// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]



// var rotate = function (nums, k) {
//   let j = 0
//   for (let i = nums.length - 1; i < k; i++) {
//     nums.slice(i, 1)
//   }
//   return nums
// };
// //  learn time and space complexity using javascript
// var rotate = function (nums, k) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     nums[i + k] = nums[i];
//   }

//   for (let j = k - 1; j >= 0; j--) {
//     nums[j] = nums.pop();
//   }
//   return nums
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))

// const reverseString = (str) => {
// let rev = '';

// for (let i = str.length -1; i >= 0; i--) {
//     rev += str[i]
// }

// let rev = str.split('').reverse().join('')
// return rev

// recurssion
// if (str.length === 0) 
//   return "";

// else
// console.log(1, str.substr(1))
// console.log(2, str.charAt(0))
//   return reverseString(str.substr(1)) + str.charAt(0);

// Two pointer
// let left = 0;
// let right = str.length - 1;
// let ch = str.split('')
// let temp

// while (right >= left) {
//   temp = ch[left]
//   ch[left] = ch[right]
//   ch[right] = temp
//   left++; 
//   right-- 
// }
// return ch.join("")

//   let stack = []
//   for (let i = 0; i <= str.length -1; i++) {
//     stack.push(str[i])
//   }
//   let a = ''
//   while(stack.length > 0) {
//       a += stack.pop()
//   }
//   return a
// }

// console.log(1, reverseString("Geeks"))

// const leftRotate = (str, n) => {
//   // console.log(1, str.substring(n, str.length) + str.substring(0, n));

//   // let temp = str + str
//   // console.log(11, temp.substring(n, str.length + n))
//   let char_deque = [...str];
//   console.log(char_deque.slice(0, n));
//   char_deque = char_deque.slice(n).concat(char_deque.slice(0, n));

//   return char_deque.join('');
// }
// // const rightRotate = (str, n) => {
// //     console.log(1, str.substring(str.length - n, str.length) + str.substring(0, str.length - n));
// // }

// var str1 = "GeeksforGeeks";
// console.log(2, leftRotate(str1, 2)); // Output left rotation

// var str2 = "GeeksforGeeks";
// console.log(rightRotate(str2, 2)); // Output right rotation

// working on Sort string of characters

// let MAX_CHAR = 26;

// // function to print string in sorted order
// function sortString(str) {

//   // Hash array to keep count of characters.
//   // Initially count of all characters is
//   // initialized to zero.
//   let charCount = new Array(MAX_CHAR);
//   charCount.fill(0);

//   // Traverse string and increment
//   // count of characters
//   for (let i = 0; i < str.length; i++) {

//     // 'a'-'a' will be 0, 'b'-'a' will be 1,
//     // so for location of character in count
//     // array we will do str[i]-'a'.
//     charCount[str[i].charCodeAt() - 'a'.charCodeAt()]++;
//   }
//   console.log(2, charCount);


//   // Traverse the hash array and print
//   // characters
//   for (let i = 0; i < MAX_CHAR; i++)
//     for (let j = 0; j < charCount[i]; j++)
//       console.log(String.fromCharCode('a'.charCodeAt() + i));
// }

// let s = "geeksforgeeks";
// console.log(sortString(s));

// Print the frequency of each character in Alphabetical order

// let MAX = 26; 

// const compressString = (s, n) => {
//   // of the characters 
//   let freq = new Array(MAX);
//   freq.fill(0);

//   // Update the frequency array 
//   for (let i = 0; i < n; i++) {
//     console.log(2, s[i].charCodeAt()) //103
//     console.log(3, 'a'.charCodeAt()) //97
//     console.log(4, s[i].charCodeAt() - 'a'.charCodeAt())
//     freq[s[i].charCodeAt() - 'a'.charCodeAt()]++;
//   }

//   // Print the frequency in alphatecial order 
//   for (let i = 0; i < MAX; i++) {

//     // If the current alphabet doesn't 
//     // appear in the string 
//     if (freq[i] == 0)
//       continue;

//     let a = String.fromCharCode(i + 'a'.charCodeAt()) + "" + freq[i];
//     console.log(a);
//   }
// }

// let s = "geeksforgeeks";
// let m = s.length;

// console.log(compressString(s, m)); 


// Largest three distinct element

// const zeroCount = (arr) => {
// let count= 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     arr[count++] = arr[i];
//   }
// }

// while (count < arr.length)  
//   arr[count++] = 0;

// return arr

// let A = arr
// let n = A.length;
// let j = 0;
// for (let i = 0; i < n; i++) {
//   if (A[i] != 0) {
//     swap(A, j, i);
//     j++;
//   }
// }
// for (let i = 0; i < n; i++) {
//   console.log(A[i] + " ");
//   return (A[i] + " ");
// }


// function swap(A, a, b) {
//   let temp = A[a];
//   A[a] = A[b];
//   A[b] = temp;
// }

//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       count++;

//       // deleting the elearrent froarr vector 
//       //arr.erase(arr.begin() + i);
//       arr.splice(i, 1);
//       // i--;
//     }
//   }

//   for (let i = 0; i < count; i++) {

//     // inserting the zero into vector 
//     arr.push(0);
//   }
//   console.log("array after shifting zeros to right side: ");
//   var str = arr.join(' ');
//   console.log(str)
// }

// console.log(1, zeroCount([1, 2, 0, 4, 3, 0, 5, 0]))


// const minArr = (arr) => {
//   let a = Math.min(arr);
//   return a
// }

// console.log(11,minArr([12, 1234, 45, 67, 1]))

// let a = [2,4,5,6,1,7]

// console.log("123", a.reverse())



var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(1, maxArea(height))

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/


// var letterCombinations = function (digits) {
//   let mob = [
//     { 2: "abc" },
//     { 3: "def" },
//     { 4: "ghi" },
//     { 5: "jkl" },
//     { 6: "mno" },
//     { 7: "pqrs" },
//     { 8: "tuv" },
//     { 9: "wxyz" },
//   ]
//   let match = []

//   for (let i = 0; i < digits.length; i++) {
//     for (let j = 0; j < mob.length; j++) {
//       if (digits[i] === Object.keys(mob[j]).toString()) {
//         match.push(Object.values(mob[j]))
//       }
//     }
//   }

//   return combination(match)

// };

// const combination = (match) => {
//   let output = []
//   if (match.length === 1) {
//     return [...match[0][0]]
//   }
//   if (match.length === 0) {
//     return []
//   }
//   for (let i = 0; i < match[0][0].length; i++) {
//     for (let j = 0; j < match[1][0].length; j++) {
//       output.push(match[0][0][i].concat(match[1][0][j]))
//     }
//   }

//   return output
// }

/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/
// var letterCombinations = function (digits) {
//   if (!digits.length) {
//     return [];
//   }

//   const digitToLetters = {
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz'
//   };

//   const res = [];

//   function backtrack(idx, comb) {
//     if (idx === digits.length) {
//       res.push(comb);
//       return;
//     }

//     for (const letter of digitToLetters[digits[idx]]) {
//       backtrack(idx + 1, comb + letter);
//     }
//   }

//   backtrack(0, "");

//   return res;
// };

// let digits = "23"
// console.log(1, letterCombinations(digits))

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/


//   let k = 0
//   let subStr = ''
//   for (let i = 0; i < haystack.length; i++) {
//     for (let j = 0; j < needle.length; j++) {
//       if (needle[j] === haystack[i]) {
//         subStr += needle[i]
//       } else {
//         subStr = ''
//       }
//     }
//   }
//   return subStr

// };

var searchRange = function (nums, target) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) {
        first = i;
      }
      last = i;
    }
  }

  return [first, last];

};

let nums = [1], target = 1
console.log(searchRange(nums, target))

// var strStr = function (haystack, needle) {
//   if (haystack.length < needle.length) {
//     return -1;
//   }

//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (haystack.substring(i, i + needle.length) === needle) {
//       return i;
//     }
//   }

//   return -1;
// };

// let haystack = "mississippi", needle = "issip"
// console.log(strStr(haystack, needle))

let a = ["vishal", 1, "tushar"]

console.log(123, a.indexOf("tushar"))




const obj = {
  name: "vishal",
  age: 24,
  address: {
    contry: "india",
    state: "maharastra",
    city: "mumbai",
    profile: {
      image: {
        url: "url"
      }
    }

  }
}


// console.log(array.flat(Infinity))

// let { name, address: { profile: { image: { url: url } } }, address } = obj
// console.log(2, address)

// const arrInf = (arr) => {
//   let a = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       a.push(...arrInf(arr[i]))
//     } else {
//       a.push(arr[i])
//     }
//   }
//   return a

// }

const arrInf = (arr) => {
  // let b = arr + []
  // return b

  const arr123 = arr.reduce((acc, val) => {
    console.log("arr", acc);
    return acc.concat(val)
  }, [])
  return arr123
}
let arr = [1, [3, [5, [89]]]]
console.log(1234, arrInf(arr))


// function* generatorFun() {

//   let data1 = "First call";
//   yield data1

//   let data2 = "Second call";
//   yield data2

//   let data3 = "Third call";
//   yield data3
// }

// const generator = generatorFun()

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// console.log(test);

// const arr1 = [1,3,5,6,3,5,7,8,6]

// const repeatLetter = (str) => {
//   let res = ''
//   let len = 0

//   for (let i = 0; i < str.length - 1; i++) {
//     len = str[i + 1].match(/[0-9]/) && (str[i + 2]?.match(/[0-9]/) ? str[i + 1].concat(str[i + 2]) : str[i + 1]?.match(/[0-9]/))
//     if (str[i].match(/[a-z]/) && len) {
//       for (let j = 0; j < len; j++) {
//         res += str[i]
//       }
//     }
//   }

//   return res
// }

const repeatLetter = (str) => {
  let res = '';
  let i = 0;

  while (i < str.length) {
    if (/[a-z]/.test(str[i])) {
      let j = i + 1;
      let numStr = '';

      while (j < str.length && /[0-9]/.test(str[j])) {
        numStr += str[j];
        j++;
      }

      if (numStr) {
        let len = parseInt(numStr, 10);
        res += str[i].repeat(len);
      }

      i = j;
    } else {
      i++;
    }
  }

  return res;
}


// const repeatLetter = (str) => {
//   let res = ''
//   for (let i = 0; i < str.length; i++) {

//     for (let j = 0; j < Number(str[i + 1]) ? str[i + 1] : 1; j++) {
//       res += str[i]
//     }
//   }
//   return res
// }


// const repeatLetter = (str) => {

//   let ans = ""
//   let string = ""
//   let num = ""
//   let count = 0
//   for (let i = 0; i <= str.length; i++) {

//     if (!Number(str[i]) && str[i] !== '0') {
//       string = str[i]
//       num = ""

//     } else {
//       num += str[i]
//       if (Number(str[i + 1]) + "" == "NaN" || i == str.length - 1) {
//         for (let i = 0; i < num; i++) {
//           ans += string
//         }
//       }
//     }

//   }

//   console.log(ans, "ans")
// } 
// console.log(repeatLetter("a5bcf4"))

// test = 9
// console.log(123, test);

function numberToWord(num) {
  let oneToNine = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let tenToNieteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let twentyToNinety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let spltNum = num.toString().split("");

  if (num.toString().length == 1) {
    return oneToNine[num];
  } else if (num.toString().length > 1 && num < 20) {
    return tenToNieteen[spltNum[1]];
  } else if (num.toString().length > 1 && num >= 20 && num < 100) {
    return `${twentyToNinety[spltNum[0] - 2]} ${oneToNine[spltNum[1]]}`
  } else if (num >= 100 && num.toString().length == 3) {
    return `${oneToNine[spltNum[0]]} hundred ${twentyToNinety[spltNum[1]]} ${oneToNine[spltNum[2]]}`
  } else {
    return "Number out of range"
  }
}

console.log(numberToWord(112))

// const swap = () => {

let first = 30; sec = 20;

[first, sec] = [sec, first]
//   first = first + sec
//   sec = first - sec
//   first = first - sec

console.log(1111, first, sec);


// }

// console.log(swap())


// const star = (len) => {
//   let st = ''
//   // let count = 1
//   for (let i = 0; i < len; i++) {

//     for (let j = 0; j < len - i; j++) {
//       st += " "
//     }

//     for (let k = 1; k <= 2*i+1; k++) {
//       st += "k"
//     }
//     st += "\n"
//     // count++
//   }
//   return st
// }

// console.log(star(5))

// const { length } = 'JS'

// console.log(length);


let OO = {
  name: 'vishal',
  age: '24'
}

for (var aa in OO) {
  console.log(aa);
}

const larAr = (array) => {

  let temp = -1;
  let newarr = []
  let aaaaa = 0

  for (let i = 0; i < array.length; i++) {
    // for (let j = 0; j < array[i].length; j++) {
    //   if (temp === -1) {
    //     temp = array[i][j]
    //   } else if (temp > array[i][j]) {
    //     temp = array[i][j]
    //   }
    // }
    // newarr.push(temp)
    // temp = -1
    console.log(Math.min(...array[i]))
  }
  return newarr
}

console.log(111, larAr([[5, 7,2, 85, 21], [8, 85, 55,3, 89], [14, 52, 11, 25]]))