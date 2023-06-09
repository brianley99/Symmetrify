//Controller
function getValues() {
    //Get Inputs From DOM
    let userString = document.getElementById('userString').value;

    //Validate Input
    if (userString.replace(" ", "") == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter some text',
        })
    } else {
        //Input succesfully validated

        //Check if its a palindrome
        let palindromeBool = isPalindrome(userString);

        //Display result on page
        displayResult(userString, palindromeBool);
    };
}

//Business Logic
function isPalindrome(userString) {

    //strip userString to raw letters
    let rawString = userString.toLowerCase();
    let regx = /[^a-z0-9]/gi;
    rawString = rawString.replace(regx, "");

    //Check if string is empty after removing symbols
    if (rawString == "") {
        return false
    } else {

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
        };
    };
}

//View
function displayResult(userString ,palindromeBool) {
    //Recive a boolean value, display on page

    if (palindromeBool == true) {
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userString}</span><br> is a Palindrome`;
        document.getElementById('resultsAlert').classList.add('alert-success');
        document.getElementById('resultsAlert').classList.remove('d-none', 'alert-danger');
    } else {
        document.getElementById('msg').innerHTML = `<span class="fw-bold">${userString}</span><br> is not a Palindrome`;
        document.getElementById('resultsAlert').classList.add('alert-danger');
        document.getElementById('resultsAlert').classList.remove('d-none', 'alert-success');
    }
}