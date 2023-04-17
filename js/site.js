//Controller
function getValues() {
    //Get Inputs From DOM
    let userString = document.getElementById('userString').value;

    //Check if its a pallindrome
    let palindromeBool = isPallindrome(userString);

    //Display result on page
    displayResult(userString, palindromeBool);
}

//Business Logic
function isPallindrome(userString) {

    //strip userString to raw letters
    let rawString = userString.toLowerCase();
    let regx = /[^a-z0-9]/gi;
    rawString = rawString.replace(regx, "");

    //reverse userString and store into new variable
    let reversedString = '';
    for (let index = rawString.length - 1; index >= 0; index--) {
        reversedString += rawString[index];
    };

    //compare if two are the same & return result
    if (rawString == reversedString) {
        return true;
    } else {
        return false;
    }
}

//View
function displayResult(userString ,palindromeBool) {
    //Recive a boolean value, display on page

    if (palindromeBool == true) {
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userString}</span> is a Palindrome`;
        document.getElementById('resultsAlert').classList.add('alert-success');
    } else {
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userString}</span> is not a Palindrome`;
        document.getElementById('resultsAlert').classList.add('alert-danger');
    }
    document.getElementById('resultsAlert').classList.remove('d-none');
}