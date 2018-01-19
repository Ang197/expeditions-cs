/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(600, 600);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
background(0, 0, 0);


//The fill function is meant to give the entire the background, the ships, and the lazer their color. They will randomly spawn different colors from mostly different shades of blue.
fill(random(255), random(255), 255);


//This array is made to hold the entire structure of the lazer array.
var bulletArray = [];

//THe inbedded function, which is to help drag the spaceship on the screen
draw = function() {
    background();

    // loop command for the laser to keep on reappearing after each shot, and that at a certain height of the screen, it will simply disappear at height 40 of the canvas. The conditions, move, and draw codes, are meant to execute the shape and movement of the lazer when fired on screen.
    for (var i = 0; i < bulletArray.length; i++) {
        bulletArray[i].move();
        bulletArray[i].draw();
        if (bulletArray[i].yPos < 0) {
            bulletArray.splice(i, 1);
        }
    }

    //my if statement helps me spawn another space ship, when the mouse moves around the bottom half of the screen
    if (mouseY > 290) {
        triangle(mouseX + 15, mouseY + 50, mouseX, mouseY, mouseX - 15, mouseY + 50);
        fill(31, 22, 206);
        strokeWeight(2);
        stroke(19, 16, 89);

    }

    //this is my else if statement, which is to spawn the appearance of the galga ship, based on where the location of the screen in the yPos which is the top half.
    else if (mouseY > 10) {
        pushMatrix();
        translate(mouseX - 50, mouseY - 50);
        rect(10, 37, 5, 34);
        rect(14.5, 51, 5, 14);
        rect(19, 47, 5, 14);
        rect(24, 27, 5, 34);
        rect(29, 39, 5, 22);
        rect(34, 35, 5, 22);
        rect(39, 18, 10, 45);
        rect(49, 35, 5, 22);
        rect(54, 39, 5, 22);
        rect(59, 27, 5, 34);
        rect(64, 47, 5, 14);
        rect(68.5, 51, 5, 14);
        rect(74, 37, 5, 34);
        rect(41.49, 5, 5, 70);
        popMatrix();


    }
    //this is another loop code, so that it can be able to spawn all the cicles in the background and randomizes the color and shap.
    for (var i = 0; i < width; i += 90) {
        for (var j = 0; j < height; j += 90) {
            ellipse(i, j, random(20), random(20));
            stroke(random(100), random(300), random(300));
            fill(random(255), random(255), 255);
        }
    }
};

//this function is to help fire the command of the laser with the use a keyPress function, which is the spacebar(the 32 represents the keycode of the spacebar, which allows the spacebar to sho).
keyPressed = function() {
    if (keyCode == 32) {
        bulletArray.push({
            xPos: mouseX,
            yPos: mouseY,
            move: function() {
                this.yPos -= 5;
            },
            //this function is to locate where the lazer will be launched, based on where the mouse is located based on the screen. The first two(this.xPos and this.yPos) are meant to represent the location of where the lazer will be launching. The last two(5 and 10) are meant to represent the width and height or design of the lazer's rectangular shape.
            draw: function() {
                rect(this.xPos, this.yPos, 5, 10);
            }
        });
    }
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};
var p = new Processing(document.getElementById("output-canvas"), sketch);
