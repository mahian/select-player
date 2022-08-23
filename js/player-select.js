function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    const liParent = document.getElementById('selected-player-container')
    const li = document.createElement('li');
    li.innerText = playerName;

    element.disabled = true;
    if(element.disabled === true){
       element.style.background = '#b0b0b0';
    }

    const selectedList = document.getElementById('selected-player-container');
    const listLength = selectedList.children.length;
    if(listLength != 5){
        liParent.appendChild(li);
    }else{
        alert("you can't get player more than 5");
    }
}