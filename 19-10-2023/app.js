
const resetData = () =>{
    const displayNumber = document.getElementById('display-num');
    displayNumber.textContent = '';
    get = '';
}


let get = 0;

const increaseNum = () => {
get++;
const displayNumber = document.getElementById('display-num');
displayNumber.textContent = '';
const h2 = document.createElement('h2');
h2.style.textAlign = 'center';
    
h2.innerText = `${get}`;
displayNumber.appendChild(h2);
// loadData ()
}

function loadData (){
    onclick = alert(`${get}`);
}


