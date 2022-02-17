// total expenses value counting function
function totalExpensesCount() {
    const foodEspenses = document.getElementById('food-input');
    const foodEspensesValue = parseFloat(foodEspenses.value);
    const rentEspenses = document.getElementById('rent-input');
    const rentEspensesValue = parseFloat(rentEspenses.value);
    const clothesEspenses = document.getElementById('clothes-input');
    const clothesEspensesValue = parseFloat(clothesEspenses.value);

    const totalEspensesValue = foodEspensesValue + rentEspensesValue + clothesEspensesValue;
    if (foodEspensesValue < 0 || rentEspensesValue < 0 || clothesEspensesValue < 0) {
        const expensesErros = document.getElementsByClassName('expenses-error');
        for (const error of expensesErros) {
            error.classList.add('d-none')
        }

    } else {
        return totalEspensesValue;
    }
}
// total income function
function totalIncome() {
    const totalIncomeInput = document.getElementById('income-input');
    const totalIncomeValue = parseFloat(totalIncomeInput.value);
    return totalIncomeValue;
}

// total expenses value counting calculate buttn click event
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalIncomeAmount = totalIncome();
    const totalEspensesAmount = totalExpensesCount();


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

// saving button click event
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveInputNumber = parseFloat(saveInput.value);
    // counting the percentage of income
    const totalIncomeAmountNumber = totalIncome();
    const totalSaveAmount = (totalIncomeAmountNumber * saveInputNumber) / 100;
    // counting the remaining balance
    const previousBalance = document.getElementById('total-balance');
    const previousBalanceNumber = parseFloat(previousBalance.innerText);
    const totalRemaingBalance = previousBalanceNumber - totalSaveAmount;

    // errors for fill in the above icome inputs and negative remainig balance
    const giveIncomeError = document.getElementById('give-income-error')
    const negativeRemainingBalanceError = document.getElementById('negative-remaining=balance-error')

    if (isNaN(totalSaveAmount) || isNaN(totalRemaingBalance)) {
        giveIncomeError.classList.remove('d-none')
        negativeRemainingBalanceError.classList.add('d-none')
    } else if (totalRemaingBalance < 0) {
        negativeRemainingBalanceError.classList.remove('d-none')
        giveIncomeError.classList.add('d-none')
    } else {
        // updatin the total saving amount and remaining balance
        const totalSave = document.getElementById('total-save');
        totalSave.innerText = totalSaveAmount;
        const remainingBalance = document.getElementById('remainig-balance');
        remainingBalance.innerText = totalRemaingBalance.toFixed(2);

        // cleaning errors
        giveIncomeError.classList.add('d-none')
        negativeRemainingBalanceError.classList.add('d-none')
    }
})


