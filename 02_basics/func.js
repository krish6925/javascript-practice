//    function one(){
//     const u="krish";
//     function two(){
//         const v="kimapaw";
//         console.log(v);
//     }
//     two();

//    }
//    one();
   /////////////////////////////////////////////////
  //this cant be used with functions    it can be used with onlyobjects
// console.log(this);
//  const chai=function(){
//     let u="krish";
//     console.log(this);
//  }
// //  chai();
//  /// in upper we cant use this properly;

//  const chai=()=>{
//     let u="krish";
//     console.log(this);
//  }
//  chai();
//  in this we can use

///////////////////////////////////
// const add=(num1,num2)=>{
// return num1+num2
// }
// console.log(add(5,3));


// in case of funxtions using ()doesnt write return ;
// it ie use when we have to return objects;


const add=(num1,num2)=>(num1+num2)
console.log(add(5,3));

///////////////////////////////////
// IIFE (IMMEDIATETLY INCOKED FUNC Expression)

(
    function c()
    {
        console.log("hi");
    }
)();

(
    (na)=>
    {
        console.log(na);
    }
)("krish");


// //////////////////////

// ?? is an important operator
// it is only for nul and undefined
// let val=5??10
// then val=5;
// let val=null??10;
// then val=10;same with undefined;



//int his map structure there is no rile of sorting
// INSTEAD OF INSERT HERE IT IS SET

// const map=new Map();
// map.set(5,7);
// map.set(7,9);
// map.set("k","l");
// console.log(map);
// map can be iterted only using for of loop 
// for map camnt use for loop or for in loop

// // it has a for of loop but  cant be used with object

// for(const [i,j] of map)
// {
//     console.log(i);
//     console.log(j);
// }

const obj={
    "5":"4",
    "2":"8",
    "9":"0"
}

// here for in loop is used

for(const i in obj)
{
    console.log(obj[i]);
}
// when for in is uswed with arrays it ptakes indexes 
// as in arrayb  INDEXES ARE KEYS


//FORRACH LOOP

// in array

const x=[1,2,3,4,5];
x.forEach(function (i)
{
    console.log(i);
} )

///////////////////////////////////////

x.forEach(  (i)=>{
    console.log(i);

})

//////////////////////////////////


function print(i)
{
    console.log(i);
}
x.forEach(print);
////////////////////////////////////
//below i means value j means index and k denotes array


 x.forEach((i,j,k)=>
{
    console.log(i,j,k);
})

///////////////////////////////////////
// here shown how to use loop in case of array of objects
const ne=[{lang:"file",
    kite:"lite"
}
]
ne.forEach((i)=>
{
    console.log(i.lang);
})
/////////////////////////////////////////////////
// filter property return the elements
// if used {}bracket then write return 
// else dont use{} as well as return
const s=[1,2,3,4,5,6,7,8];

const na=s.filter((i)=>i>4)
console.log(na);

// to do it with for each;
// create a new array check condition with if and then 
//push ghe eleent int the new emnpty array
// arr.push();


//////////////////////////////////
// MAP PROPERTY OF ARRAY
// it also returns

const g=[1,2,3,4,5,6];

const j=g.map((i)=>i+10);
console.log(j);

///////////////////////////////////////
 //WE CAN USE MAP THEN AGAIN.MAP THEN AGAIN.FILTER AS MUCH AS WE WakeLockSentinel;
// REDUCE IA GREATY PROPERTY STUDY WHEN WE WILL USE IT
 
