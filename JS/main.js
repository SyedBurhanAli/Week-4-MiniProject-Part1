/* 3. Add the JavaScript function upload() in the JS panel. This function should:

* Create a variable that gets the value of the text from the text input element, and
* Display this text in an alert. */

/* function upload() {
  //Get input from text input
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;

  //Alert dispaly text
  alert("You chose " + filename);
} */

/* 3. Adapt the upload() function to use the file input to display an image. Your function should also:

        Get the file input.
        Create a SimpleImage from the chosen file. The SimpleImage library can be found at https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js. Remember you will need to use the <script src=’ ‘></script> tags in the HTML pane to tell your web page where to find the Simple Image library.
        Get the canvas element, and draw the image on the canvas. Note that you can define only one of the width or height of the canvas to avoid changing the image aspect ratio. */

var image; //Global Variable so upload() and makeGray() both can use it.

//But Try to Minimize the use of Global Variables. Relying on too many can make it hard to understand the code you're developing and how the functions interact with each other.

var image2;

function upload() {
  var imgcanvas = document.getElementById("can");
  // var imgcanvas2 = document.getElementById("can2");
  var fileinput = document.getElementById("finput");
  // var image = new SimpleImage(fileinput);
  image = new SimpleImage(fileinput);
  image2 = new SimpleImage(fileinput);

  image.drawTo(imgcanvas); //Method inclusded in SimpleImage Libraray. We will call image.drawTo and use the canvas element as the parameter to indicate the SimpleImage should be drawn on a specific canvas of our choosing.
}

function makeGray() {
  for (var pixel of image2.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas2 = document.getElementById("can2");
  image2.drawTo(imgcanvas2);
}
