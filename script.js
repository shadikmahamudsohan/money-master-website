// total expenses value counting function
function totalExpensesCount() {
    const foodEspenses = document.getElementById('food-input');
    const foodEspensesValue = parseFloat(foodEspenses.value);
    const rentEspenses = document.getElementById('rent-input');
    const rentEspensesValue = parseFloat(rentEspenses.value);
    const clothesEspenses = document.getElementById('clothes-input');
    const clothesEspensesValue = parseFloat(clothesEspenses.value);

    const totalEspensesValue = foodEspensesValue + rentEspensesValue + clothesEspensesValue;
    return totalEspensesValue;
}

// total expenses value counting calculate buttn click event
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalEspensesAmount = totalExpensesCount();
    const totalIncomeInput = document.getElementById('income-input');
    const totalBalanceAmount = parseFloat(totalIncomeInput.value);

    // updating total espenses and balance vlue
    const totalEspenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('total-balance');
    totalEspenses.innerText = totalEspensesAmount;
    totalBalance.innerText = totalBalanceAmount - totalEspensesAmount;
})
