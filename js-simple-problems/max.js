const bussiness = 450;
const minister  = 350;
const army = 654;
// if(bussiness > minister){
//     console.log('bussiness bigger');
// }
// else{
//     console.log('minister er pola boro');
// }
// if (bussiness > minister && bussiness > army){
//     console.log('bussiness i borooo...');
// }
// else if(minister > bussiness && minister > army){
//     console.log ('minister bororooo..');
// }
// else{
//     console.log('army boooroooo')
// } 



// another way 


// let max = Math.max(bussiness, minister, army);
// console.log(max);





// function dia dekhleee

// function FindleargestNumber(first, second){
//     if (first > second){
//         return first;
//     }
//     else {
//         return second;
//     }
// }
// const GetboroNumber = FindleargestNumber(3445,345);
// console.log(GetboroNumber);



function FindlargestNUmber (first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if (second > first && second > third){
        return second;w
    }
    else{ return third;}
    return nahoileNai;

}

const getbigNUMber = FindlargestNUmber( 2323, 43432, 3432);
console.log(getbigNUMber);