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
    const totalIncomeAmount = parseFloat(totalIncomeInput.value);



    // errors for not number and if the field is empthy
    const incomeErrorString = document.getElementById('inocme-input-error-1');
    const incomeErrorNegative = document.getElementById('inocme-input-error-2');
    const expensesErros = document.getElementsByClassName('expenses-error');
    const negativeBalance = document.getElementById('negative-balance-error');

    if (isNaN(totalIncomeAmount)) {
        incomeErrorString.classList.remove('d-none');
        incomeErrorNegative.classList.add('d-none');
    }
    else if (totalIncomeAmount < 0) {
        incomeErrorNegative.classList.remove('d-none')
        incomeErrorString.classList.add('d-none')
    } else if (isNaN(totalEspensesAmount) || totalEspensesAmount < 0) {

        for (const error of expensesErros) {
            error.classList.remove('d-none')
        }
    } else if (totalEspensesAmount > totalIncomeAmount) {
        negativeBalance.classList.remove('d-none')
        // removeing the errors
        incomeErrorString.classList.add('d-none')
        incomeErrorNegative.classList.add('d-none')
        for (const error of expensesErros) {
            error.classList.add('d-none')
        }
    }
    else {
        // updating total espenses and balance vlue
        const totalEspenses = document.getElementById('total-expenses');
        const totalBalance = document.getElementById('total-balance');
        totalEspenses.innerText = totalEspensesAmount;
        totalBalance.innerText = totalIncomeAmount - totalEspensesAmount;

        // removing the errors
        incomeErrorString.classList.add('d-none')
        incomeErrorNegative.classList.add('d-none')
        negativeBalance.classList.add('d-none')
        for (const error of expensesErros) {
            error.classList.add('d-none')
        }
    }
})
