//SETUP CANVAS Objects
//init collections
var ImageCollection = [];


var imgConf = new BallConfig();
imgConf.src = 'http://localhost:8000/assets/img/illustrationImage.png';
imgConf.width = canvas.width;
imgConf.height = canvas.height;
ImageCollection.push(new Figure(imgConf));
/*imgConf = new BallConfig();
imgConf.src ='https://mdn.mozillademos.org/files/5397/rhino.jpg';
imgConf.width = canvas.width;
imgConf.height = canvas.height -100;
ImageCollection.push(new Figure(imgConf));*/
//END colletions

//* Init Forces*//
/*let forces = {
  gravity: new Vector(0, 5),
  wind: new Vector(0.1, 0),
  up: new Vector(0, -10)
}*/

//DAT.GUI

var GlobalConfig = function () {
  this.message = 'dat.gui';
  this.speed = 0.8;
  this.space = 100;
  this.displayOutline = false;
  this.balls = 1;
  this.CompositeOperation = 'destination-atop';
  //colors
  this.color0 = "#ffae23"; // CSS string
  this.color1 = [0, 128, 255]; // RGB array
  this.color2 = [0, 128, 255, 0.3]; // RGB with alpha
  this.color3 = {
    h: 350,
    s: 0.9,
    v: 0.3
  }; // Hue, saturation, value
  this.explode = function () {
    setUp(this);
  };
};

var conf = new GlobalConfig();
window.onload = function () {

  var gui = new dat.GUI();
  gui.add(conf, 'space', 10, 500);
  gui.add(conf, 'balls', 20, 30);
  gui.add(conf, 'CompositeOperation',  [ 'source-over','source-in','source-out','source-atop',
              'destination-over','destination-in','destination-out','destination-atop',
              'lighter', 'copy','xor', 'multiply', 'screen', 'overlay', 'darken',
              'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',
              'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
            ] );
 
  //colors
  gui.addColor(conf, 'color0');
  gui.addColor(conf, 'color1');
  gui.addColor(conf, 'color2');
  gui.addColor(conf, 'color3');

};

//END SETUP
//startloop
window.requestAnimationFrame(update);