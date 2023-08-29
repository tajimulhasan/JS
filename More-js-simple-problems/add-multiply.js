const myFirstNum = 66;
const mySecondNum = 35;
const total = myFirstNum + mySecondNum;

// console.log(total);


function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const addTwonum = add(32, 44);
// console.log(addTwonum);
const secondTwonum = add(13, 54);
// console.log(secondTwonum);

function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const firstResult = multiply(2, 3);
// console.log(firstResult);



/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    //wood calculationn
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perbedWood;


    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}


const firstPotion = woodCalculator(12, 3, 4);
console.log(firstPotion);


