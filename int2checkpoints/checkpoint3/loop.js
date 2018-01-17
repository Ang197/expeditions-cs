/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


background(239,11,0);

//sample of loop


draw = function() {
    for (var i = 0; i < width; i += 9) {
        for (var j = 0; j < height; j += 9) {
            ellipse(i, j, random(10), random(10));
            stroke(random(100), random(300), random(300));
            fill(random(255), random(255), random(255));
        }
    }
};
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
