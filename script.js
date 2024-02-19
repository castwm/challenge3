//Add Event Listener
document.addEventListener("DOMContentLoaded", function() {
  var generateBtn = document.querySelector("#generate");



  function generatePassword() {
      var passLength = prompt("Choose password length between 8 and 128");
      
      //password length check 
      if (passLength > 128 || passLength < 8 ){
          alert("Password length must be a between 8 and 128 characters.");
          var passLength = prompt("Choose password length between 8 and 128");
      }

  

      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "0123456789";
      var specialChars = "!@#$%^&*()_+-=[]{}|;':,.<>/?";
      var choices = "";
      choices = lowercase + uppercase + numbers + specialChars
      var password = "";

      for (var i = 0; i < passLength; i++) {
          var rand = Math.floor(Math.random() * choices.length);
          password = password + choices[rand];
      }
      return password;
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
