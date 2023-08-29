// ana to vori 
function anaToVori(ana){
    const oneVoriInAna = 16;
    let Vori = ana / oneVoriInAna;
    return Vori;
}
const ToTalVori = anaToVori(60);
console.log(ToTalVori);



// pandaCost
// 7 10 15
// const singaraPrice = 7;
// const samuchaPrice = 10;
// const jilapiPrice = 15;

function allProductsPrice (singaraPrice, samuchaPrice, jilapiPrice){
    singaraPriceMeasurement = (3);
    samuchaPriceMeasurement = (2);
    jilapiPriceMeasurement = (5);
    let singaraPrice3 = singaraPrice * singaraPriceMeasurement;
    console.log('singarar tk', singaraPrice3);
    let samuchaPrice6 = samuchaPrice * samuchaPriceMeasurement;
    console.log( 'samucha tk',samuchaPrice6);
    let jilapiPrice7 = jilapiPrice * jilapiPriceMeasurement;
    console.log('jilabir tk',jilapiPrice7);
}
const PriceWill = allProductsPrice(7, 10, 15);

//picnicBudget

function  picnicBudget (howmuchGo){
         
}


//oddFriend
const NameArray=['Atik', 'Shumon', 'korim', 'Golam', 'Mojnu', 'Raju', 'Abdullah'];
function OddNumber(Names){
   if (Names.length> 0){
    for(i = 0; i < Names.length; i++){
        let NamesLEnth = Names[i].length;
        if(NamesLEnth %2 != 0){
        return Names[i];
        }
        
    }
   }
   else{
    oddFIriendErrormassege = 'Invalied name charecter';
    return oddFIriendErrormassege;
   }
}


const OddNumberName = OddNumber(NameArray);
console.log(OddNumberName);















// function anaToVori(ana){
//     const oneVori = 16;
//     if(ana>=0){
//     const totalVori = ana /oneVori;
//     return totalVori;
//     }else{
//     anaToVoriErrMsg = "Enter Valid Number";
//     return anaToVoriErrMsg;
//     }
//     }
//     const voriTotal = anaToVori(68);
//     console.log(voriTotal);






//     function pandaCost(singaraQty, samuchaQty, jilapiQty){
//     const singleSingaraPrice = 7;
//     const singleSamuchaPrice = 10;
//     const singleJilapiPrice = 15;
//     if(singaraQty>=0 && samuchaQty >= 0 && jilapiQty>= 0){
//     let singaraTotalPrice = singaraQty * singleSingaraPrice;
//     let samuchaTotalPrice = samuchaQty * singleSamuchaPrice;
//     let jipaliTotalPrice = jilapiQty * singleJilapiPrice;
//     const totalPrice = singaraTotalPrice + samuchaTotalPrice + jipaliTotalPrice;
//     return totalPrice;
//     }else{
//     pandaCostErrorMsg = "Error!! Please Enter Valid/Positive Number";
//     return pandaCostErrorMsg;
//     }
//     }
//     const totalOrderTk = pandaCost(5, 8, 12);
//     console.log(totalOrderTk);





//     function picnicBudget(persons){
//     const firstHundredPerson = 100;
//     const secondHundredPerson = 200;
//     const firstHundredCost = 5000;
//     const secondhundredCost = 4000;
//     const remainCost = 3000;
//     if(persons>0 && persons <= firstHundredPerson){
//     const firstTotalCost = persons * firstHundredCost;
//     return firstTotalCost;
//     }else if(persons > firstHundredPerson && persons <= secondHundredPerson){
//     const firstTotalCost = firstHundredCost * firstHundredPerson;
//     const secondTotalPersonChk = secondHundredPerson - persons;
//     const secondTotalPerson = (secondHundredPerson - secondTotalPersonChk ) - firstHundredPerson;
//     const secondTotalPersonCost = secondTotalPerson * secondhundredCost;
//     const totalCost = firstTotalCost + secondTotalPersonCost;
//     return totalCost;
//     }else if(persons > secondHundredPerson){
//     const firstTotalCost = firstHundredPerson * firstHundredCost;
//     const secondTotalCost = firstHundredPerson * secondhundredCost;
//     const remainTotalPerson = persons - secondHundredPerson;
//     const remainTotalPersonCost = remainTotalPerson * remainCost;
//     const totalCost = firstTotalCost + secondTotalCost + remainTotalPersonCost;
//     return totalCost;
//     }else{
//     totalPicnicBudgetErrorMsg = "Please Enter Valid or Total Persons Number";
//     return totalPicnicBudgetErrorMsg;
//     }
//     }
//     const totalPicnicBudget = picnicBudget(230);
//     console.log(totalPicnicBudget);



//     const friendsName = ['Aman', 'Ridoy', 'Rakib', 'Niyamot', 'Kuwasha', 'Nila'];
//     function oddFriend(names){
//     if(names.length>0){
//     for(let i = 0; i<names.length; i++){
//     let oddLengthChk = names[i].length;
//     if(oddLengthChk%2 != 0){
//     return names[i];
//     }
//     }
//     }else{
//     oddFriendErrorMsg = "Please Enter Valid Array with atleast one name";
//     return oddFriendErrorMsg;
//     }
//     }
//     const oddFriendsName = oddFriend(friendsName);
//     console.log(oddFriendsName);
