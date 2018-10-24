var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    //output.innerHTML = this.value;
    
//work out how far along the thing is as a percentage using the equation
//add or remove spaces to keep up with it

var pixels = (this.value/100000);
pixels = pixels/6;
pixels = pixels * 100;
pixels = pixels / 2.778;

//if pix = 1 = first sixth, 2= second etc
var Red;
var Green;
var Blue;
colour = String;

if(pixels <= 1){
    Red = 255;
    Green = (pixels*255);
    Blue = 0;
}

if(pixels <= 2 && pixels > 1){
    Red = 255 - (255 * (pixels - 1));
    Green = 255;
    Blue = 0;
}

if(pixels <= 3 && pixels > 2){
    Red = 0;
    Green = 255;
    Blue = (255 * (pixels - 2));
}

if(pixels <= 4 && pixels > 3){
    Red = 0;
    Green = (255 - (255 * (pixels - 3)));
    Blue = 255;
}

if(pixels <= 5 && pixels > 4){
    Red = (255 * (pixels -4));
    Green = 0;
    Blue = 255;
}

if(pixels <= 6 && pixels > 5){
    Red = 255;
    Green = 0;
    Blue = (255 - (255 * (pixels - 5)));
}


Red = Math.round(Red);
Green = Math.round(Green);
Blue = Math.round(Blue);









colour = ("RGB(" + Red +"," + Green+"," + Blue + ");");
output.setAttribute("style", "color:" +colour);
output.innerHTML = Red + " , " +Green + " , " + Blue;




    
    
    
}

