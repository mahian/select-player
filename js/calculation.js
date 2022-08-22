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
    const playerLength = document.getElementById('selected-player-container');
    playerExpensesField.innerText = perPlayer * 5;
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