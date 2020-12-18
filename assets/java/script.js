// Global variables
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numericElements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "?", "/", ",", "<", ".", ">", "`", "~"];

// Assignment code here
function generatePassword() {
  // Get desired password length
  var passwordLength = prompt("How many characters would you like your password to be? \nThe minimum number is 8 and the maximum is 128.");
  var passwordLength = Number(passwordLength);
  console.log("Your password length is " + passwordLength);

  // Check if user entered a valid number for password length
  if (isNaN (passwordLength)) {
    alert("ERROR \nPlease enter a number.");
    generatePassword();
  } else if (passwordLength < 8) {
    alert("ERROR \nThe minimum length is 8 characters.");
    generatePassword();
  } else if (passwordLength > 128) {
    alert("ERROR \nThe maximum length is 128 characters.");
    generatePassword();
  }

  var lowercaseConfirm = confirm("Do you want to include lowercase letters in your password?");
  var uppercaseConfirm = confirm("Do you want to include uppercase letters in your password?");
  var numericConfirm = confirm("Do you want to include numeric characters in your password?");
  var specialConfirm = confirm("Do you want to include special characters in your password?");





  return passwordLength;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
