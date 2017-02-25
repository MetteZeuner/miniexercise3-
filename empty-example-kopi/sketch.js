var circle1 = 80; //all variables needed to make the circles go in and out in a pulsating motion. 
var goback = 1;
var circle2 = 60;
var cir = 1;
var circle3 = 40;
var met = 1; 
var circle4 = 20;
var hep = 1;
var circle5 = 0;
var trup = 1;


function setup() {
frameRate(40) //make all the circles go faster
createCanvas (600, 400); 
}

function draw() {
background (0);

noStroke();

//circle 1 (outer circle):
    
fill(0, 255, 255);  
ellipse (300, 200, circle1, circle1);  
 
if (circle1 > 100 || circle1 < 80){ 
    
goback = goback * -1; //controlling that the circle doesn't go too large or too small to make it "pulsate" (all the other circles does the exact same thing, just at a smaller size)
}
circle1 = circle1 + goback; //makes the circle larger 


//circle 2: 
    
fill(178, 255, 255);   
ellipse (300, 200, circle2, circle2);
    
if (circle2 > 80 || circle2 < 60){ 
    cir = cir * -1;
}
circle2 = circle2 + cir;
    
//circle 3:

fill(0, 255, 255);    
ellipse (300, 200, circle3, circle3);
    
if(circle3 > 60 || circle3 <40){
   met = met * -1; 
   }
   circle3 = circle3 + met;

//circle 4:
    
fill(178, 255, 255);   
ellipse (300, 200, circle4, circle4);
    
    if(circle4 > 40 || circle4 <20){
        hep = hep * -1;
    }
circle4 = circle4 + hep;
    
//circle 5 (inner circle):

fill(0, 255, 255);   
ellipse (300, 200, circle5, circle5);
    if(circle5 > 20 || circle5 < 0){
        trup = trup * -1; 
    }
   circle5 = circle5 + trup;    
    
}
