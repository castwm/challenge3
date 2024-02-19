// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate password
var passLength = 8;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789"
var specialChars = "!@#$%^&*()_+-=[]{}|;':,.<>/?";
var choices = lowerCase + upperCase + nums + specialChars;
//console.log(choices);
var password = "";
for (var i=0; i<passLength; i++){
  var rand = Math.floor(Math.random() * choices.length);
  password = password + choices[rand];
}
//console.log(password);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
