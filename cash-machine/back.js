const form = document.getElementById("myForm");
form.addEventListener("submit", (event) =>{
  event.preventDefault();

  const FoodInput = document.getElementById("food-input");
  const foodInputText = FoodInput.value;
  const RentInput = document.getElementById("rent-input");
  const RentInputText = RentInput.value;
  const ClothInput = document.getElementById("clothes-input");
  const ClothInputText = ClothInput.value;

  const sumatioN =
    parseFloat(foodInputText) +
    parseFloat(RentInputText) +
    parseFloat(ClothInputText);
  
  //set Income and update balance section
  
  //Expenses
  const IncomeInputField = document.getElementById("income-input");
  const IncomeInputFieldText = IncomeInputField.value;

  const IncomeInputFieldInText = parseFloat(IncomeInputFieldText);
  
  const IncomeMinusWill = IncomeInputFieldInText - sumatioN;
  // IncomeInputField.value = IncomeMinusWill;
  
  //update/availbale balance
  const BalanceAmount = document.getElementById("balance-amount");
  const BalanceAmountText = BalanceAmount.innerText;
  const BalanceAmountInText = parseFloat(BalanceAmountText);
  
  const TotalBalanceAmount = BalanceAmountInText + IncomeMinusWill;
  BalanceAmount.innerText = TotalBalanceAmount;
  // update Total Expenses amount with summation
  
  const TotalExpense = document.getElementById("total-expenses");
  const TotalExpensesAmount = sumatioN ;
  TotalExpense.innerText = TotalExpensesAmount;


  
});


  const save = () => {
    const IncomeInputField = document.getElementById("income-input");
    const IncomeInputFieldValue = IncomeInputField.value;
    const parseIncomeInputFieldValue = parseFloat(IncomeInputFieldValue);
    const savingInputId = document.getElementById("saving-input");
    const savingInputValue = savingInputId.value;
    const savingInputAmount = parseFloat(savingInputValue);
    const persantageAmount = (parseIncomeInputFieldValue / 100) * savingInputAmount;
    const savingId = document.getElementById("saving-amount");
    savingId.innerText = persantageAmount;


    const BalanceId = document.getElementById("balance-amount");
    const BalanceText = parseFloat(BalanceId.innerText);

    const remainingId = document.getElementById("remaining-balance");
    const RemainingMainBalance = BalanceText - persantageAmount;
    remainingId.innerText = RemainingMainBalance;
 };

 document.querySelector('button[onclick="save()"]').addEventListener('click', save);
