console.log("hello world");
let firstName="sewit";
console.log(firstName);
let lastName = 'tadesse;'
let age= 40;
console.log(lastName);
console.log(age);
let life=true;
console.log(life);
const interestRate= 0.3;

console.log(interestRate);
let person = { 
    name:'sewit',
    age : 40,
    adress: '1148 marshfield rd '
}
console.log(person);

console.log(person.name);
person.name ="haymi";
console.log(person.name);
let selectedColors=['red','blue','green'];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
selectedColors[3]='white';
console.log(selectedColors);
console.log(selectedColors.length);
function greet( name){
console.log ('hello '+ name);
}
greet ("haymi");
greet ('moges');
function greet (name,lastName){
    console.log ('hello '+name+' '+lastName);

}
greet ('sara','moges');
function square( number){
    return number*number;
}
console.log(square(2));
(function(){
    console.log('hello anonymous');
})();

let show=function(){
  console.log('aninymous function2'); 
}
show();
function sum(a,b){
    return a+b
}
let sum2=(a,b)=>a+b

function isPostive(number){
    return number >=0
}
let isPostive2=(number)=> number>=0
function randomNumber(){
    return Math.random
}
let randomNumber2=()=>Math.random