/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    background(0,0,0);
    
    
   
   //changes the look of the circle based on the x-position 
    if(mouseX > 200){
        ellipse(mouseX, mouseY, 20,20);
        fill(255,0,0);
        strokeWeight(3);
        stroke(89, 16, 16);
        
    }
    else if(mouseX > 100){
        triangle(mouseX, mouseY - 20, mouseX - 20, mouseY + 20, mouseX + 20, mouseY + 20)
        fill(31, 22, 206);
        strokeWeight(2);
        stroke(19, 16, 89);
    
    }
    
    else {
        rect(mouseX,mouseY,20,20);
        fill(45, 255, 244);
        strokeWeight(3);
        stroke(137, 158, 157);
    }
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
