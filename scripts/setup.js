//SETUP CANVAS Objects
//init collections
var PlayersCollection = [];
var ObstaclesCollection = [];
var ballsCollection = [];

//Player1
var player1Conf = new BallConfig();
player1Conf.ctx = ctx;
player1Conf.mass = 100;
player1Conf.position = new Vector(50, getRandomNumber(height - 50, height));
player1Conf.bgColor = getRandomColor();
var player1 = new Ball(player1Conf);

//Player2
var player2Conf2 = new BallConfig();
player2Conf2.ctx = ctx;
player2Conf2.mass = 100;
player2Conf2.position = new Vector(100, getRandomNumber(height - 50, height));
player2Conf2.bgColor = getRandomColor();
var player2 = new Ball(player2Conf2);

PlayersCollection = [player1, player2];

//Obstacles
var particleConf = new BallConfig();
particleConf.ctx = ctx;

for (var i = 1; i < 0; i++) {
    particleConf.bgColor = getRandomColor();
    particleConf.position = new Vector(width - 300 + i * 300, 0);
    ObstaclesCollection.push(new Obstacle(particleConf));
}

//random balls

var ballConf = new BallConfig();
ballConf.ctx = ctx;



for (var i = 1; i < 100; i++) {
  ballConf.mass = getRandomNumber(10, 100);
    ballConf.position = new Vector(getRandomNumber(0 , width), getRandomNumber(0, height));
    ballConf.bgColor = getRandomColor();
    ballConf.velocity = new Vector(getRandomNumber(1,5), getRandomNumber(1,5));
    ballsCollection.push(new Ball(ballConf));
}
//END colletions

//* Init Forces*//
let forces = {
  gravity : new Vector(0, 5),
  wind : new Vector(0.1, 0),
  up : new Vector(0, -10)
}
var wind = new Vector(0.1, 0);
var gravity = new Vector(0, -50);
var up = new Vector(0, -90);
var left = new Vector(-50, 0);
var right = new Vector(50, 0);
var down = new Vector(0, 50);
var frictionCenas = 10;
var gameOver = false;
var score = 0.0;
//* End Forces*//

//DAT.GUI
var GlobalConfig = function() {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.space = 100;
    this.displayOutline = false;
    this.balls = 1;
    //colors
    this.color0 = "#ffae23"; // CSS string
    this.color1 = [ 0, 128, 255 ]; // RGB array
    this.color2 = [ 0, 128, 255, 0.3 ]; // RGB with alpha
    this.color3 = { h: 350, s: 0.9, v: 0.3 }; // Hue, saturation, value
    this.explode = function() {  setUp(this); };
  };

  var conf = new GlobalConfig();
  window.onload = function() {
   
    var gui = new dat.GUI();
    gui.add(conf, 'space', 10, 500);
    gui.add(conf,'balls', 20, 30);
    //colors
    gui.addColor(conf, 'color0');
    gui.addColor(conf, 'color1');
    gui.addColor(conf, 'color2');
    gui.addColor(conf, 'color3');
   
  };

  //END SETUP
  //startloop
  window.requestAnimationFrame(update);