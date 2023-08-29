// for(let i = 1; i<6; i++){
//     console.log(i);
// }

// same

function consoleNumber (i){
    if(i > 6){
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);


// recursion 