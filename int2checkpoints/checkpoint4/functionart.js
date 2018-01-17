/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

//Triangle art function command to make my shape/image
Triangle = function() {
    fill(random(255), random(255), random(255));
    triangle(mouseX, mouseY - 40, mouseX, mouseY, mouseX + 40, mouseY + 10);
    triangle(mouseX, mouseY - 40, mouseX, mouseY, mouseX - 40, mouseY + 10);
    triangle(mouseX, mouseY - 40, mouseX, mouseY, mouseX + 40, mouseY - 50);
    triangle(mouseX, mouseY - 40, mouseX, mouseY, mouseX - 40, mouseY - 50);



};

//Command to make shapes appear when clicked
mouseClicked = function() {    
    Triangle();
};
gm

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
