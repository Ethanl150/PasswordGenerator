// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for (var i = 1; i > 0;) {
    var userPassLength = prompt("How long do you want your password to be? Please input a number")

    if (userPassLength < 8) {
      alert("That is too short. Please choose a longer password.");
      i++;
    } else if (userPassLength > 128) {
      alert("That is too long. Please choose a shorter password.");
      i++;
    } else if (isNaN(userPassLength) === true) {
      alert("Please input a number");
      i++;
    } else {
      i = 0;
    }
  }
  for (var i = 1; i > 0;) {
    var lowerCase = confirm("Click OK if you want to include lower case characters in your password.")

    var upperCase = confirm("Click OK if you want to include upper case characters in your password.")

    var numeric = confirm("Click OK if you want to include numeric characters in your password.")

    var specialChar = confirm("Click OK if you want to include special characters in your password.")

    if (lowerCase === false && upperCase === false && numeric === false && specialChar === false) {
      alert("You must select at least one character type");
      i++;
    } else {
      i = 0;
    }
  }
}

// passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
