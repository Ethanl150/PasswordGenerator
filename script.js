function writePassword() {

  var passwordText = document.querySelector("#password");
  var password = "";
  var availableCharacters = "";
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = " !#$%&()*+,-./:;<=>?@[\]^_{|}~" + "'" + "`" + '"';
  var validPassword = false;
  var validChars = false;

  while (!validPassword) {

    var passwordLength = prompt("How long do you want your password to be? Please input a number.");

    if (passwordLength == null) {
      return;
    } else if (passwordLength < 8) {
      alert("That is too short. Please choose a longer password.");
    } else if (passwordLength > 128) {
      alert("That is too long. Please choose a shorter password.");
    } else if (isNaN(passwordLength)) {
      alert("Please input a number.");
    } else {
      validPassword = true;
    }
  }
  while (!validChars) {
    var includeLowerCase = confirm("Click OK if you want to include lowercase characters in your password.");

    var includeUpperCase = confirm("Click OK if you want to include uppercase characters in your password.");

    var includeNumeric = confirm("Click OK if you want to include numeric characters in your password.");

    var includeSpecial = confirm("Click OK if you want to include special characters in your password.");

    if (includeLowerCase === false && includeUpperCase === false && includeNumeric === false && includeSpecial === false) {
      alert("You must select at least one character type.");
    } else {
      validChars = true;
    }
  }

  if (includeLowerCase) {
    availableCharacters += lowerCaseChars;
  }
  if (includeUpperCase) {
    availableCharacters += upperCaseChars;
  }
  if (includeNumeric) {
    availableCharacters += numericChars;
  }
  if (includeSpecial) {
    availableCharacters += specialChars;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += availableCharacters.charAt(Math.floor(Math.random() * availableCharacters.length));
  }
  passwordText.innerHTML = password;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
