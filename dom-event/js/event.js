function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle by using add eventlistener
const goldenButton = document.getElementById('make-goldenrod-button');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod (){
    document.body.style.backgroundColor = 'goldenrod';
}