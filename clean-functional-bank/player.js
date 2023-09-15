function setPlayerStyle(player){
    player.style.border = '2px solid green';
    player.style.margin = '3px';
    player.style.padding = '3px';

    player.style.borderRadius = '8px'
}


const players = document.getElementsByClassName('player');
for(const player of players){
setPlayerStyle(player);

   
}

document.getElementById('players').addEventListener('click', function(event){
if(event.target.tagName.toLowerCase() == 'div'){
 event.target.style.backgroundColor = 'red'
}
});

function addPlayer(){
const playersContainer = document.getElementById('players');
const player = document.createElement('div');
player.classList.add('player');
player.innerHTML = `<h3>New player</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur minus ipsa tempora iusto ducimus! Earum non est dolorum iusto, consequatur in similique illo facilis suscipit voluptatibus! Id magni nulla porro!</p>`;

setPlayerStyle(player);
playersContainer.appendChild(player);

}

document.getElementById('player-button').addEventListener('click', function(){

addPlayer();
});