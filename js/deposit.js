document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-input');
    
    const oldDepositTotal = getOldValueById('deposit-total');
    
    const newDepositTotal = oldDepositTotal + newDepositAmount;

    setNewValueById('deposit-total', newDepositTotal);



    const oldAmountTotal = getOldValueById('amount-total');

    const newAmountTotal = oldAmountTotal + newDepositAmount;
    
    setNewValueById('amount-total', newAmountTotal);
})