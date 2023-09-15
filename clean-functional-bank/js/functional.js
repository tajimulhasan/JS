function getInputValue(fieldId){
  const inputField = document.getElementById(fieldId);
   const valueInText = inputField.value;
   const value = parseFloat(valueInText);

   inputField.value = '';
   return value;
}
function updateTotal(fieldId, amount){
 const TotalField = document.getElementById(fieldId);
 const previousTotalInText = TotalField.innerText;
 const previousTotalInTotal = parseFloat(previousTotalInText);
const NewTotal = previousTotalInTotal + amount;
TotalField.innerText = NewTotal;
return NewTotal;
}


function balanceUpdate(amount, isAdding){
 const balanceTag = document.getElementById('balance-total');
 const balanceText = balanceTag.innerText;
 const previouuSbalanceTotal = parseFloat(balanceText);
let newBalance;
 if(isAdding == true){
     newBalance = previouuSbalanceTotal + amount;
 }
 else{
     newBalance = previouuSbalanceTotal - amount;
    
 }
 
 balanceTag.innerText = newBalance;
}



//handle diposit
document.getElementById('btn-deposit').addEventListener('click', function(){
const amount = getInputValue('deposit-field');
if(amount > 0){
    updateTotal('deposit-total', amount);
balanceUpdate(amount, true);
}
});


// handle winthdrow
document.getElementById('btn-withdraw').addEventListener('click', function(){
 const amount = getInputValue('withdraw-field');
if(amount > 0){
    updateTotal('withdraw-total', amount);
    balanceUpdate(amount, false);
}
});

