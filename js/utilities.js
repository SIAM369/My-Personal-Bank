function getInputFieldValueById(inputId){
    const inputField =  document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

    if(isNaN(inputFieldValue)){
        alert('Please provide a valid number.');
        return null;
    }
    else{
        return inputFieldValue;
    }
}

function getOldValueById(oldElementId){
    const oldElement = document.getElementById(oldElementId);
    const oldValueString = oldElement.innerText;
    const oldValue = parseFloat(oldValueString);
    return oldValue;
}

function setNewValueById(oldElementId, newDepositTotal){
    const oldElement = document.getElementById(oldElementId);
    oldElement.innerText = newDepositTotal;
}

