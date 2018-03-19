//This creates Variables and saves DOM Elements to each
var colorValue = document.getElementById("colorValue");
var colorButton = document.getElementById("colorButton");

//The addEventLisnter is supposed to make Javascript listen for a certain action or event from the user. In this case, the Javascript is supposed to listen for a click to change color when the button is pressed on the page
colorButton.addEventListener("click", function(){
    document.body.style.backgroundColor = colorValue.value;
})