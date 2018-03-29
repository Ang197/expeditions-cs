var jumper = document.getElementById("jumper");
jumper.style.position = "absolute";

//This event listener is meant to call the function mousemove, and window. is meant to be the variable that will be affected by the function itslef.
// window.addEventListener("mousemove", function(){
    // jumper.style.top = Math.random() * 600 + "px";
    // jumper.style.left = Math.random() * 600 + "px";
    
// })

//The loop function mainly helps cause the button to jump all over the place, without the use of any type of action from the user who stumbles on this page. The loop mainly causes the ability for the button to jump on random places on both the top and bottom page forever.
function loop() {
    jumper.style.top = Math.random() * 600 + "px";
    jumper.style.left = Math.random() * 600 + "px";
    
    //Window.requestanimationframe calls the function, but it gives delay in order to not crash the page.
    window.requestAnimationFrame(loop);
}

loop();