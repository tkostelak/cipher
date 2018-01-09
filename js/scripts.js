function userInput() {
    userString = prompt("Enter a string.");
    return userString;
}
function capTopBottom(userInput) {
    firstChar = userInput.charAt(0);
    lastChar = userInput.charAt(userInput.length - 1);
    return firstChar.toUpperCase() + lastChar.toUpperCase();
}
function reverseOrder(userInput) {
    firstChar = userInput.charAt(0);
    lastChar = userInput.charAt(userInput.length - 1);
    return lastChar + firstChar;
}

function main() {
    userInput = userInput();
    newUserInput = capTopBottom(userInput);
    reverseOrder = reverseOrder(newUserInput);
    finalInput = userInput + reverseOrder;
    middleChar = combineInputs(userInput);
    input = middleChar + finalInput;
    return reverseString(input);
}

function combineInputs(userInput) {
    return userInput.charAt(userInput.length / 2); 
}

alert(main());

function reverseString(input) {
    var loop = input.length
    var stringFinal = "";
    for (i = 0; i < loop; i++)  {
        var lastChar = input.charAt(i);
         stringFinal = lastChar + stringFinal;
        }
    return stringFinal;
}