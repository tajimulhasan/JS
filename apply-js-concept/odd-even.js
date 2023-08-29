// const number = 4;
// const  reminder = number % 2;
// console.log(reminder == 0);



function isEven (number){

    if(number %2 == 0){
        return true;
    }
    return false;
}


const myNumber = 1640;
const isNumberEven = isEven(myNumber);
console.log(isNumberEven);


// is odd function

function isOdd(number) {
    if (number  % 2 != 0) {
       return true; 
    }
    return false;
}
const isMynumberOdd = isOdd(myNumber);
console.log(isMynumberOdd);

const isHernumberOdd = isOdd(HerNumber);
console.log(isHernumberOdd);