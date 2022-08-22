// calculate
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueStr = inputField.value;
    const inputValue = parseInt(inputValueStr);
    inputField.value = '';
    return inputValue;
}

document.getElementById('calculate').addEventListener('click', function(){
    const perPlayer = getInputValue('per-player-cost');
    const playerExpensesField = document.getElementById('player-expenses');
    const selectedList = document.getElementById('selected-player-container');
    const listLength = selectedList.children.length;
    if(listLength > 5){
        alert("you can't get player more than 5");
    }else{
        playerExpensesField.innerText = perPlayer * listLength;
    }
});
document.getElementById('calculate-total').addEventListener('click', function(){
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    // player cost field
    const playerCostField = document.getElementById('player-expenses');
    const playerCost = parseInt(playerCostField.innerText);
    // total cost field
    const totalCostField = document.getElementById('total-cost');
    totalCostField.innerText = playerCost + managerCost + coachCost;
});