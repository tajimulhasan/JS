function updateProductNumber(product, price, isIncreasing){
    const ProductInputField = document.getElementById(product + '-input');
   let InputNumber = ProductInputField.value;
   if(isIncreasing == true){
   InputNumber = parseInt(InputNumber) + 1;
    
   }
   else if(InputNumber > 0){
       InputNumber = parseInt(InputNumber) - 1;
   }



// updat Total 

   ProductInputField.value = InputNumber;
   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = InputNumber * price;

// call subtotal function 

calculateTotal();
}

//subtotal tax and Total calculation
function getInputValue(product){
    const ProductInput = document.getElementById(product + '-input').value;
    const productNumber = parseInt(ProductInput);
    return productNumber;
}


function calculateTotal(){

    const PhonetotaL = getInputValue('phone') * 1219;
    const caseAmountToTal = getInputValue('case') * 59;
    const subTotal = PhonetotaL + caseAmountToTal;
    const taxTotal = subTotal / 10;
    const totalPrice = subTotal + taxTotal;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxTotal;
    document.getElementById('total-amount').innerText = totalPrice;
}





// first plus button 
document.getElementById('button-plus').addEventListener('click', function(){
updateProductNumber('phone', 1219, true);
});

// first minus button
document.getElementById('button-minus').addEventListener('click', function(){
updateProductNumber('phone', 1219, false);
});

//subtotal Total and tax price




// phone case price 


// function updatecaseNumber(iscaseIncreasing){
//     const caseInput = document.getElementById('case-input');
//     let caseInputNumber = caseInput.value;
//     if(iscaseIncreasing == true){
//         caseInputNumber = parseInt(caseInputNumber) + 1;
//     }
//     else if(caseInputNumber > 0){
//         caseInputNumber = parseInt(caseInputNumber) - 1;
//     }
//     caseInput.value = caseInputNumber;
//     const caseInputTotal = document.getElementById('case-total');
//     caseInputTotal.innerText = caseInputNumber * 59;




// }

//second plus button 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});


//second minus button

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});



