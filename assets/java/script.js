// Global variables
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numericElements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "?", "/", ",", "<", ".", ">", "`", "~"];

var passwordBank = [];

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

// Function to generate password
function generatePassword() {
  // Gets desired password length
  var passwordLength = prompt("How many characters would you like your password to be? \nThe minimum number is 8 and the maximum is 128.");
  var passwordLength = Number(passwordLength);
  console.log("Your password length is " + passwordLength);

  // Checks if user entered a valid number for password length
  while (isNaN (passwordLength) || passwordLength < 8 || passwordLength > 128) {
    if (isNaN (passwordLength)) {
      alert("ERROR \nPlease enter a number.");
      var passwordLength = prompt("How many characters would you like your password to be? \nThe minimum number is 8 and the maximum is 128.");
      var passwordLength = Number(passwordLength);
    } 
    else if (passwordLength < 8) {
      alert("ERROR \nThe minimum length is 8 characters.");
      var passwordLength = prompt("How many characters would you like your password to be? \nThe minimum number is 8 and the maximum is 128.");
      var passwordLength = Number(passwordLength);
    } 
    else if (passwordLength > 128) {
      alert("ERROR \nThe maximum length is 128 characters.");
      var passwordLength = prompt("How many characters would you like your password to be? \nThe minimum number is 8 and the maximum is 128.");
      var passwordLength = Number(passwordLength);
    }
  }

  // Ensures user selects at least one character type for password
  while (!uppercaseConfirm && !lowercaseConfirm && !numericConfirm && !specialConfirm){
    var uppercaseConfirm = confirm("Do you want to include uppercase letters in your password?");
    console.log("Include uppercase letters: " + uppercaseConfirm);
    var lowercaseConfirm = confirm("Do you want to include lowercase letters in your password?");
    console.log("Include lowercase letters: " + lowercaseConfirm);
    var numericConfirm = confirm("Do you want to include numeric characters in your password?");
    console.log("Include numeric characters: " + numericConfirm);
    var specialConfirm = confirm("Do you want to include special characters in your password?");
    console.log("Include special characters: " + specialConfirm);
    
    
    if (!uppercaseConfirm && !lowercaseConfirm && !numericConfirm && !specialConfirm){
      alert("ERROR \nYou must include at least one character type in your password");
    }
  }

  // Adding characters to password bank depending on user feedback
  if (uppercaseConfirm) {
    passwordBank = passwordBank.concat(uppercaseLetters);
  }
  if(lowercaseConfirm) {
    passwordBank = passwordBank.concat(lowercaseLetters);
  }
  if(numericConfirm) {
    passwordBank = passwordBank.concat(numericElements);
  }
  if(specialConfirm) {
    passwordBank = passwordBank.concat(specialCharacters);
  }


  // Randomly selects a character from password bank and creates password of the desired length
  var i;
  var randomPassword = "";
  for (i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordBank[randomNumber(0, passwordBank.length)];
  }

  console.log(passwordBank);
  console.log(randomPassword);


  return randomPassword;
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
