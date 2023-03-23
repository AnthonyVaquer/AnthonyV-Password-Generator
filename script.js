var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  var passwordLength = parseInt(
    prompt(
      "Please select a password length. Selection must be between 8 and 128."
    )
  );
  if (
    isNaN(passwordLength) === true ||
    passwordLength < "8" ||
    passwordLength > "128"
  ) {
    alert("Must select a number between 8 and 128.");
    return null;
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var includeSpecialChars = confirm(
    "Would you like to include special characters in your password?"
  );
  var includeNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  var includeLowerCaseChar = confirm(
    "Would you like to include lower case letters in your password?"
  );
  var includeUpperCaseChar = confirm(
    "Would you like to include upper case letters in your password?"
  );
  if (
    !includeSpecialChars &&
    !includeNumbers &&
    !includeLowerCaseChar &&
    !includeUpperCaseChar 
  ) {
    alert("Error: Must select at least one character set.");
    return null;
  }

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  
  var returnValue = [];
  var finalPassword = [];

  if (includeSpecialChars === true) {
    returnValue = returnValue.concat(specialCharacters);
  }
  if (includeNumbers === true) {
    returnValue = returnValue.concat(numericCharacters);
  }
  if (includeNumbers === true) {
    returnValue = returnValue.concat(lowerCasedCharacters);
  }
  if (includeNumbers === true) {
    returnValue = returnValue.concat(upperCasedCharacters);
  }

  for (var i = 0; i < passwordLength; ++i) {
    var randomIndex = Math.floor(Math.random() * returnValue.length);
    var randomizedCharacter = returnValue[randomIndex];
    finalPassword.push(randomizedCharacter);
  }
  return finalPassword.join("");
}
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated



// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
