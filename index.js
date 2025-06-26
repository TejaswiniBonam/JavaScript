// function f1(callback){
//     setTimeout(()=>{
//         console.log("TASK 1");
//         callback();
//     }, 3000);
    
// }

// function f2(callback){
//     setTimeout(()=>{
//         console.log("TASK 2");
//         callback();
//     }, 3000);
   
// }

// function f3(callback){
//     setTimeout(()=>{
//         console.log("TASK 3");
//         callback();
//     }, 3000);

// }

// function f4(callback){
//     setTimeout(()=>{
//         console.log("TASK 4");
//         callback();
//     }, 3000);

// }


// /*f1(
//     f2(
//         f3(
//             f4(
//                 ()=>{
//                 console.log("ALL");
//                 }
//             )))); */

// f1(()=>{
//     f2(()=>{
//         f3(()=>{
//             f4(()=>{
//                 console.log("ALL");
//             });
//         });
//     });
// });
// console.log("HIO");
// let x;
// //console.log(" x value : ", x);
// //x = ;
// //let x = 1;
// console.log(" x value : ", x);
// // TO know types of values in js 
// // typeof
// console.log(typeof x);

// THREE WAYS to create a strning js
// let s1 = "abc
// hjk";
// let s2 = 'def
// hjk';
let s3 = `ghi
hjl`; //backticks

//console.log(typeof s1, '\n', s2, '\n', s3);

let name1 = "JAY";
// console.log("Welcome ", name1);
let updated = `WELCOME ${name1}`;
let s2 = "HI " + name1;
//s2.charAt(0) = 'K';

let s4 = "ABC"; //In memory, ABC is created, and s4 is POINTED TOWARDS IT
// s4.charAt(0) = 'K';
s4 = "HELLO";

console.log(s2.charAt(0));

s4 = "HELLO"; //somwhere HELLO created, s4 pointed to it
let s5 = "HELLO"; //s5 also points to the same HELLO


let s6 = new String("qwerty");
let s7 = new String("qwerty"); //objects are always independent


console.log(s6==s7); 
console.log(s6===s7);

// ==, ===
// == -> a==b => a value == b  value ; true/false
// === -> a===b = > a value & reference & type == b valye & ref & type ; true/false






