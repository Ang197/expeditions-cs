/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos= 0;
var yPos= 0;
var weight= 3.8;

draw = function() {

//draws red circles from top left to lower right
    strokeWeight(4.2);
    stroke(7, 01, 102);
    fill(244, 66, 66);
    ellipse(xPos,yPos,30, height - 30);
    xPos= xPos+2.1
    yPos= yPos+2.1
    
//draws red circles from top right to lower left
    strokeWeight(weight);
    stroke(7, 01, 102);
    fill(244, 66, 66);
    ellipse(height-xPos,yPos,30,height - 30);
    xPos= xPos+2.1
    yPos= yPos+2.1
    
    fill(255, 0, 0)
    ellipse(100,150,150,150);
    fill(0,0,0);
    ellipse(100,150,20,20);
    
    fill(255, 0, 0)
    ellipse(300,150,150,150);
    fill(0,0,0);
    ellipse(300,150,20,20);

    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
