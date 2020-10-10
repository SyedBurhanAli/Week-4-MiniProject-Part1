
var img=null;
var gray=null;
var red = null;
var rainbow = null;
var blurr = null;
var canvas = document.getElementById("can");

//Image Upload
function upload() {
    var imgFile = document.getElementById("finput");
    img = new SimpleImage(imgFile);
    gray = new SimpleImage(imgFile);//Copy
    red = new SimpleImage(imgFile);//Copy
    rainbow = new SimpleImage(imgFile);//copy
    blurr = new SimpleImage(imgFile);//copy

    /* have the image loading function create a copy of the image for each filter the user could click. That way, you can manipulate one version of the image, while preserving a copy of the original image. */

    //Get Canvas Element
    img.drawTo(canvas);
}

//Gray Filter
function makeGray() {
  
    if (gray == null || !gray.complete()) {
        alert("Image not loaded");
        return;
      } else {
    for (var pixel of gray.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;

        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canvas = document.getElementById("can");
    gray.drawTo(canvas);
    }
}

//Red Filter
function makeRed() {

    if (red == null || !red.complete()) {
        alert("Image not loaded");
        return;
      } else{ 
    for (var pixel of red.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        if (avg < 128){
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
        }
    }
    var canvas = document.getElementById("can");
    red.drawTo(canvas);
    }
    
}

//Reset
function reset() {
    if (img == null || !img.complete()) {
        alert("Image not loaded");
        return;
      } else{
        for (var pixel of img.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            var bgPixel = img.getPixel(x, y);
            gray.setPixel(x, y, bgPixel);
            red.setPixel(x, y, bgPixel);
            rainbow.setPixel(x, y, bgPixel);    
    
        }
        img.drawTo(canvas);
        }
}


//Rainbow Filter
 function makeRainbow() {
     
    
        for (var pixel of rainbow.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        var h = rainbow.getHeight();
        var p = pixel.getY();
         if (avg < 128){
            if (p <h/7) {
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
             } 

            else if (p >= h/7 & p < 2*h/7){
            pixel.setRed(2*avg);
            pixel.setGreen(0.8*avg);
            pixel.setBlue(0);
            }
        
            else if (p >= 2*h/7 & p < 3*h/7){
            pixel.setRed(2*avg);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
            }

            else if (p >= 3*h/7 & p < 4*h/7){
            pixel.setRed(0);
            pixel.setGreen(2*avg);
            pixel.setBlue(0);
            }

            else if (p >= 4*h/7 & p < 5*h/7){
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
            }

            else if (p >= 5*h/7 & p < 6*h/7){
            pixel.setRed(0.8*avg);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
            }

            else {
                pixel.setRed(1.6*avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6*avg);
                }

            
         }
         else {
            if (p < h/7) {
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
                } 

            else if (p >= h/7 & p < 2*h/7){
            pixel.setRed(255);
            pixel.setGreen(1.2*avg-51);
            pixel.setBlue(02*avg-255);
            }

            else if (p >= 2*h/7 & p < 3*h/7){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
            }

            else if (p >= 3*h/7 & p < 4*h/7){
            pixel.setRed(2*avg-255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
            }

            else if (p >= 4*h/7 & p < 5*h/7){
            pixel.setRed(2*avg-255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
            }

            else if (p >= 5*h/7 & p < 6*h/7){
            pixel.setRed(1.2*avg-51);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
            }

            else {
            pixel.setRed(0.4*avg+153);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(0.4*avg+153);
            }

         }
     }
    var canvas = document.getElementById("can");
    rainbow.drawTo(canvas);
    }

    /* To apply this formula and create a colored filter of your choice, use a color picker tool to determine the RGB content of any color you would like to use, such as teal (17,170,153).

    Since for teal, Rc = 17, Gc = 170, Bc = 153, so 
    
    R = 17/127.5*avg  = 0.13*avg    for avg < 128
    (2 - 17/127.5)*avg + 2*17 - 255	  = 1.87*avg - 221  for avg >=128

    G = 170/127.5*avg                     = 1.33*avg        for avg < 128
    (2 - 170/127.5)*avg + 2*170 - 255	= 0.67*avg + 85   for avg >=128

    B = 153/127.5*avg                     = 1.2*avg         for avg < 128
    (2 - 153/127.5)*avg + 2*153 - 255	= 0.8*avg + 51    for avg >=128
    */

    // var x2 = null;
    // var y2 = null;

    function makeBlur() {
    // var blurr;

    var blank = new SimpleImage(blurr.getWidth(),blurr.getHeight());

    for (var pixel of blurr.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        if (Math.random() < 0.5){
        // var real = img.getPixel(x, y);
        //and set output's corresponding pixel to blurr image pixel
        blank.setPixel(x, y, pixel);//from Help
        }

        else {
        var x2 = x-(Math.floor((Math.random() * 10)));
        var y2 = y-(Math.floor((Math.random() * 10)));
        //  if (x2 == 0 || x2 >= blurr.getWidth()) {
        //      x2 = pixel.getX();
        //  }

        //  else if (y2 == 0 || y2 >= blurr.getHeight()){
        //      y2 = pixel.getY();
        //  }

        //Did it with Help, couldn't do it on my own.
        if (x2 > 0 && y2 > 0) {
            var newPixel = blurr.getPixel(x2,y2);
            blank.setPixel(x,y,newPixel);
            }   
            else {
                blank.setPixel(x,y,pixel);
            }
        // var random = blurr.getPixel(x2, y2);
        // blank.setPixel(x,y, random);
        }
    }
    var canvas = document.getElementById("can");
    blank.drawTo(canvas);
    }

    // function randomCordX() {
    //         x2 = (pixel.getX()+(Math.floor((Math.random() * 10))));
    //         return x2;
    //     }
    

    // function randomCordY() {
    //      {
    //         y2 = (pixel.getY()+(Math.floor((Math.random() * 10))));  
    //         return y2;
    //     }
    // }





    function filterBlur() {
        blurOutput = new SimpleImage(blurImage.getWidth(), blurImage.getHeight());
        for (var pixel of blurImage.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            if ((Math.random() < 0.5)) {
                blurOutput.setPixel(x,y,pixel);
            }  
            else {
                var newX = x - (Math.random()*15);
                var newY = y - (Math.random()*15);
                if ((newX > 0 && newY > 0)) {
                    var newPixel = blurImage.getPixel(newX,newY);
                    blurOutput.setPixel(x,y,newPixel);
                    }   
                    else {
                        blurOutput.setPixel(x,y,pixel);
                    }
            }     
        }
    }
    