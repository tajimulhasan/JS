 // 1. Make text color
 const hello = document.getElementById("top-players-id");
 const getColor = hello.style.color = "orange";
 console.log(getColor);

// 2. Make div background color with rgba

const playerBG = document.getElementById('player-bg').style.backgroundColor = 'rgba(255, 171, 215, 0.8)';
console.log(playerBG);

// 3. All a li tag in a ul list by clicking button

document.getElementById('info-button').addEventListener('click', function(){
  const li = document.createElement('li');
  li.innerText = 'common Hello';
  li.classList.add('list-i');
  const parent = document.getElementById('list-parent');
  parent.appendChild(li);
});

// 4. Create a input field and a button. When you click a button, input field's number will be inreased. And it starts from 0, you will be continuing until reatch 5 number.

document.getElementById('button-field').addEventListener('click', function(){

if(numbeR <= 5){
  InputField.value = numbeR;
  numbeR++;
}
else{
  numbeR = 0;
}
if(numbeR > 5){
  ButtonField.disabled = true;
}

});
const InputField = document.getElementById('input-field');
let numbeR = 0;
const ButtonField = document.getElementById('button-field');

// its from chat GPT

// const numberInput = document.getElementById('input-field');
// const incrementButton = document.getElementById('button-field');

// let currentNumber = 0;

// incrementButton.addEventListener('click', () => {
//     if (currentNumber <= 5) {
//         numberInput.value = currentNumber;
//         currentNumber++;
//     } else {
//       currentNumber = 0;
//     }

// });

