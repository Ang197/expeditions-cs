/*These variable tags are meant to manipulate certain elements in the html, mainly the images and text that is shown in the visual page.*/
 var vintcerf = document.getElementById("vintcerf");
 var timberners = document.getElementById("timberners");
 var info1 = document.getElementById("info1");

/*These event listeners are supposed to cause a block of text or description for both figures, whether the mouse
enters Tim Berner's picture or if you click on Vint Cerf's picture*/ 
vintcerf.addEventListener("click", function(){
    /*The innerHTML is meant to execute text that would appear ic you click on one of the pictures. If you click on one of the two pictures, you would get one of two text that give a description for one of the two people in the two pictures.*/
     info1.innerHTML = "Vint Cerf is considered to be the 'Father of the Internet', because of being one of the pionners during th early days of the internet's creation. He was the co-designer of the TCP/IP protocols and the architecture of the Internet."
     
});

timberners.addEventListener("click", function(){
    info1.innerHTML = "Tim Berners was the one who created the world wide web in 1989, which is an Internet-based hypermeida initiative for global information sharing while at Cern, the European Particle Physics Laboratory"
    
})