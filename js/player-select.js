function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    const liParent = document.getElementById('selected-player-container')
    const li = document.createElement('li');
    li.innerText = playerName;
    liParent.appendChild(li);
    element.disabled = true;
}