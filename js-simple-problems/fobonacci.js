// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/*
const fibo = [0, 1]
for(let i = 2; i <= 10; i++){
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
*/


// function fibonacciSeries(num){
//     const fibo = [0, 1,];
//     for(let i = 2; i <= num; i++){
//         fibo[i] = fibo[i -1] +
// fibo[i-2];
//     }

// return fibo;
// }

// const fiboSeries = fibonacciSeries('khh');
// console.log(fiboSeries);

function fibonacciSeries(num){
   if(typeof num != 'number'){
    return 'please give a numbers';
   }
   if(num < 2){
    return 'Please enter a positive number grater than 1'
   }
    const fibo = [0, 1,];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i -1] +
fibo[i-2];
    }

return fibo;
}

const fiboSeries = fibonacciSeries(-34);
console.log(fiboSeries);