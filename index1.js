function getNumber(num){
    return num;
}
function myANumber(num2){
    return num2;
}
let myNumber=getNumber();
console.log(myNumber);
console.log(myANumber);
function getRealNumber(){
    let myNumberParse= parseInt(myNumber);
    if (isNaN(myNumberparse)){
        console.log('you did not give me a number')
        return getRealNumber();
    } else {
        console.log('you give me a number');
    }
}



