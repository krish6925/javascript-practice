//primitive 
// 7types: string number boolean niull undefined  bigint symbol


//reference data type or non primitive
// arrays objects functions

//it is a dynamically typed lguage
//there is nothing as float only numbers eyrything isa in numbers

/*
let id=Symbol('123');
let ih=Symbol('123');
console.log(id==ih);
console.log(id===ih)
const a=9999999999999999999999999999999999n;
console.log(typeof id);
console.log(typeof a);


///arrays

const heroes=["shanti","krish","dogs"];
let myobj={
    name:"krish",
    age:20
}
const my=function(){
    console.log("hello world");
}

console.log(typeof heroes)
console.log(typeof myobj)
console.log(typeof my);



//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//stack and heap mwmory
//stack means primitive;


let nam="krish";
let jh=nam;
jh="lkl";
console.log(nam);
console.log(jh);



let userone={
    nam:"hira",
    age:23

}
let user2=userone;
user2.age=55;
console.log(userone.age);
console.log(user2.age);*/

 // string properties;


 const name="krish";
 const age=23;
 console.log(`my name is ${name} and my age is${age}`);


 //rem
 const game=new String('krish');
 console.log(game[0]);
 console.log(game.length);

 /// charat or indexof or touppercase 
 //use substring or slics(also take negative indexed values)


 //trim is alaso a propety which remove starting and ending spaces

 // replace also used to search something and relace it
 //includes check if it is present or not


 const agge=new Number(23);
 console.log(agge);

 //properties to string changes it into string .length is property of string tells its length
 // to fixed is a property which determines no. of number occuring after decimal
 // to precision is also a property
 // to locale string is used to insert commas according to any country rules


 //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 //maths library
// abs or round or ceil or floor

//min or max in an array of numbers
//important one is math.random
console.log(Math.random());


const max=20;
const min=10;
console.log(Math.floor( ( ( Math.random()) *(max-min+1) )  +min ));

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//dates 
 let mydate=new Date();
 console.log(mydate);
 console.log(mydate.toString());
 console.log(mydate.toDateString());
 console.log(mydate.toLocaleString());


 //let ano=new date(year,month,day) or date(year,month,day,hour,minute,second);
 let time =Date.now;
 //i will give in milliseconds
 // to get in econds divid it by 1000 and round off it
 

 // we can use `` and ${ }  to print date or anything in any form

 // mydate.localestring('default,{
     //weekday:'long and many other things'})

     