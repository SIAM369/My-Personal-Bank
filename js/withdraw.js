document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-input');

    const oldWithdrawTotal = getOldValueById('withdraw-total');

    const oldAmountTotal = getOldValueById('amount-total');

    if(newWithdrawAmount > oldAmountTotal){
        alert('Your input exceeded from your savings. Try again.');
        return;
    }

    const newWithdrawTotal = oldWithdrawTotal + newWithdrawAmount;
    
    setNewValueById('withdraw-total', newWithdrawTotal);

    const newAmountTotal = oldAmountTotal - newWithdrawAmount;
    
    setNewValueById('amount-total', newAmountTotal);
})