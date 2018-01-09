function userInput() {
    userString = prompt("Enter a string.");
    return userString;
}

function capitalTopAndBottom(userInput) {
    firstChar = userInput.slice(1);
    lastChar = userInput.slice(-1);
    newString = userInput.substring(1, (userInput.length - 1));
    alert(newString);
    return toUpperCase(firstChar) + newString + toUpperCase(lastChar);
    //caterpillar
}
function reverseTopAndBottom(userInput) {
    firstChar = userInput.slice(1);
    lastChar = userInput.slice(-1);
    newString = userInput.substring(1, (userInput.length - 1));
    return toUpperCase(lastChar) + newString + toUpperCase(firstChar);
} 

function jumbleInput() {
    alert(something(userInput));
    alert(somethingElse(something(userInput())));
}

function something(userInput) {
    firstChar = userInput.slice(1);
    lastChar = userInput.slice(-1);
    return toUpperCase(firstChar) + toUpperCase(lastChar);
}
function somethingElse(twoChars) {
    firstChar = userInput.slice(1);
    lastChar = userInput.slice(-1);
    return lastChar + firstChar;
}
jumbleInput();