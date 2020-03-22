/* Fisrt JavaScript Task for Start.NG 
task Description: Store your name in a varibale. 

Store your courses in an array. 

Display your name and courses and do one of the following: 


1. If the number of courses you are doing is an odd number, find and display all odd numbers from 1-200 (inclusive)
2. If the number of courses you are doing is an even number, find and display all even numbers from 1-200 (inclusive)*/
let myName = 'Akpos Sarakiri: '

let myCourses = ['HTML/CSS', ' JavaScript', ' CSharp', ' Kotlin', ' Design'];

console.log(myName + myCourses);

for (let i = 1; i <= 200; i++) {
    if (i & 4 !== 0)
    console.log(i);
}