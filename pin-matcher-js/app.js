function getPin(){
    const pin = Math.round(Math.random() * 10000);
      const pinString = pin + '';
    if(pinString.length == 4){
        return  pin;
    }
    else{
        // console.log('get 3 digit and calling again', pin)
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}



document.getElementById('key-pad').addEventListener('click', function(event){
const number = event.target.innerText;
const calc = document.getElementById('typed-numbers');
if(isNaN(number)){
if(number == 'C'){
    calc.value = '';
}
}
else{
 
const previousCalc = calc.value;
const newCalc = previousCalc + number;
calc.value = newCalc;
}
});


function verifyPin(){
const pins = document.getElementById('display-pin').value;
const typedNumbers = document.getElementById('typed-numbers').value;

const successNotifications = document.getElementById('notify-success');
const failedNotifications = document.getElementById('notify-failed');

if (pins == typedNumbers){
    
    successNotifications.style.display = 'block';
    failedNotifications.style.display = 'none';
}
else{
    
    failedNotifications.style.display = 'block';
    successNotifications.style.display = 'none';
}
}