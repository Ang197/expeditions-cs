//These variables are what connect the elements from the HTML page, to the Javascript page in order to be manipulated by certain functions such event listeners or if/else if statments.
var infoCategory = document.getElementById("infocategory");
var dropdownOptions = infoCategory.children;
var display = document.getElementById("display");
var displayOptions = document.getElementsByClassName("info");

// first option will show up by default
display.innerHTML = displayOptions[0].innerHTML;

//This event listener mainly utilizes the button, as a signal in order to execute the text and images on screen.
infoCategory.addEventListener("change", function() {
    var op = infoCategory.value;    // What the user actually clicks on
    for (var i = 0; i < dropdownOptions.length; i++) { //Loops through all <option> tags
        if (op === dropdownOptions[i].value) { // It matches what the user selected.
            display.innerHTML = displayOptions[i].innerHTML; //changes the display to the corresponding div.
        }
    }
});