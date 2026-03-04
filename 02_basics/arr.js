// arrays
/*
let num=[1,22,3,4,5];
//it can contain diff datatypes elements
//it has push and pop and shift and unshift(for inserting elemnt at start)
//shift(deleting elemt from start)

//includes whether something is present or not gives true or fakse which is boolean
//index of gives at which index it is present -1 if not present
const fg=num.join();
console.log(num);
console.log(fg);
console.log(typeof fg);
// slioce and splice great properties

//slics makes a copy of the subarray
//splice remove the subarray from the original array


//one more major change between slice and splice is
// in slice the last oindex no. is not rtaken 
//in splice last index is also taken





console.log("a",num);
const sli=num.slice(1,3);
console.log("b",num);
console.log(sli);

const spli=num.splice(1,3);
console.log("c",num);
console.log(spli);
*/

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

let num=[1,23,4,5];
let num2=[6,7,8,9];
// num.push(num2);
// console.log(num);



let num3=num.concat(num2);
console.log(num3);
//see the difference push treats it as an elemnt and pushes whole array as an element
//but concat merge both arrays elemnts
//we can use this instead of concat

const num4=[...num,...num2];
console.log(num4);

//flat property which arrays of arrays of arrays into a single array


console.log(Array.from("12345"));

// array of   is a property 

