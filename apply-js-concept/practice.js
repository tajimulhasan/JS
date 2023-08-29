// leap year  start......

// function getLeapyear (year){
//     if( year %4 ==0){
//         return true;
//     }
//  else{
//     return false;
//  }
// }

// const fixedleapYear = 1972;
// const myLeapYearwill = getLeapyear(fixedleapYear);
// console.log(myLeapYearwill);

// leap year  end......

// odd-even start.....

// odd
// function getOdd (number){
//     if(number % 2 != 0){
//         return true;
  
//   }
//   return false;
// } 

// const OddNumber = 338864257;
// const MyOddnumber = getOdd(OddNumber);
// console.log(MyOddnumber);


// even number 

// function getEven (number){
//     if(number % 2 == 0){
//         return  true;
//     }
//     else{
//         return false;
//     }
// }

// const MynumbeR = 3988742;
// const GetMyEvenNumber = getEven(MynumbeR);
// console.log(GetMyEvenNumber);

// celsius To Fahrenheit.....

// function GetFahrenheit (celsius){
//     var fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// const ClasserAc = GetFahrenheit(25);
// console.log('tahole amader cass er ac fahrenheit e achee....', ClasserAc);


// // fahrenheit To celsius 


// function Getcelsius (farenheit){
//     var Celsius = (farenheit -32) * 9/5;
//     return Celsius;
// }
// const HumanbodyinCelsius = Getcelsius(98.6);
// console.log('Human body temperature in celsius', HumanbodyinCelsius);


// factorial with while and for loop 


function getFactorialwithWhile (number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
    factorial = factorial * i;
        i++;

    }
    return factorial;
}
const MyFactorialValueis = getFactorialwithWhile(8);
console.log(MyFactorialValueis);


function GetFactorialwithforLoop (number){
    let geTfactorial = 1;
    for(let i = 1; i <= number; i++){
        geTfactorial = geTfactorial * i;
    }
    return geTfactorial;
}

const GetFactowhithForloop = GetFactorialwithforLoop(9);
console.log('eijeeee.......',GetFactowhithForloop);