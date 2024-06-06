const getEmail = () =>{
    const inputEmail = document.getElementById('input-field');
    const inputValue = inputEmail.value;
    inputEmail.value = '';

    if(inputValue == 'hasantajimul10@gmail.com'){
        const inputdiV = document.getElementById('c-and-w');
        inputdiV.textContent = '';
        const createP = document.createElement('p');
        createP.classList = 'correct';
        createP.innerText = `*Your Email is correct`;
        inputdiV.appendChild(createP);
    }
     
    else{
        const inputdiV = document.getElementById('c-and-w');
        
        const createP = document.createElement('p');
        createP.classList = 'wrong';
        createP.innerText = `*Your Email is wrong`;
        inputdiV.appendChild(createP);
    }
}