
var img=null;
var gray=null;
var red = null;
var canvas = document.getElementById("can");

function upload() {
    var imgFile = document.getElementById("finput");
    img = new SimpleImage(imgFile);
    gray = new SimpleImage(imgFile);//Copy
    red = new SimpleImage(imgFile);//Copy
    /* have the image loading function create a copy of the image for each filter the user could click. That way, you can manipulate one version of the image, while preserving a copy of the original image. */

    //Get Canvas Element
    img.drawTo(canvas);
}

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
        }
        img.drawTo(canvas);
        }
}
