// Assignment code here
function generatePassword (){
  var numericCharacters = ['0','1','3','4','5','6','7','8','9'];
  var uppercaseCharacters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowercaseCharacters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var specialCharacters= ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','-','_','=','+',';',':','?','/','~']
}

numberOfCharacters= prompt ("how many characters do you want in you password? Choose between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "Please choose the correct number of characters.";
} else if (isNaN (numberOfCharacters)) {
  numberOfCharacters = prompt ("Please enter a valid number.")
}
else{
  alert("Your password will be" + numberOfCharacters + "characters long.");
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
