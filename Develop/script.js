// Assignment code here

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+=/?.<';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  //prompt for how many characters password to be >=8 <128
  var passwordLength = window.prompt ("Plesase enter desired length of password between 8 and 128.");
  console.log (passwordLength);
  var lowercase = window.confirm( "Would you like your password to include lowercase letters?");
  console.log (lowercase);
  var upercase = window.confirm( "Would you like your password to include upercase letters?");
  console.log (upercase);
  var numbers = window.confirm("Would you like your password to contain numbers");
  console.log (numbers);
  var special = window.confirm("Would you like your password to contain special characters?");
  console.log (special);

   var confirm = window.confirm("Please confirm your choices. You would like your password to be " + passwordLength + "  characters long and lowercase " + lowercase + " upercase " + upercase + " numbers " + numbers + " special character " + special + ".");

   
  
  //confirm choices made
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)