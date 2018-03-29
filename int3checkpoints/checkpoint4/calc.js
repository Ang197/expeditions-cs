//All of these variables are connected to the search bars, the signs and enter button, and the output when you enter two number combinations.//
var firstnumber = document.getElementById("firstnumber");
var secondnumber = document.getElementById("secondnumber");
var signs = document.getElementById("signs");
var calcbutton = document.getElementById("calcbutton");
var product = document.getElementById("product");

//The event listener is meant to create the output for every equation you input into the calculator, since it's connected to the calculator button variable.//
calcbutton.addEventListener("click", function(){
   //The alert function is meant to be a test to see if the button will receive a command, and if it can deliver a notification to see if it works.//
//   alert("Test"); 
// These values cotain variables, because of how they would connect to the if or else if statements, in order to simply execute different number combinations and different signs that combine those two numbers
   var input1 = +firstnumber.value;
   var input2 = +secondnumber.value;
   var op = signs.value;
   var output;
//This if statement is what helps execute multiple equation combinations, whether that would be addition, subtraction, multiplication, or division combinations with of two numbers. This will also help produce an anwser from that combination.
   if (op === "+") {
      output = input1 + input2;
      product.innerHTML = ("Answer: " + output);
   }
   else if (op === "-") {
      output = input1 - input2;
      product.innerHTML = ("Answer: " + output);
   }
   else if (op === "*") {
      output = input1 * input2;
      product.innerHTML = ("Answer: " + output);
   }
   else if (op === "/") {
      output = input1 / input2;
      product.innerHTML = ("Answer: " + output);
   }
});