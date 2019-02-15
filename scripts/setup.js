//SETUP CANVAS Objects
//init collections
dis = this;
this.space = 80;

var PlayersCollection = [];
var ObstaclesCollection = [];
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

for (var i = 1; i < 4; i++) {
    particleConf.bgColor = getRandomColor();
    particleConf.position = new Vector(width - 300 + i * 300, 0);
    ObstaclesCollection.push(new Obstacle(particleConf));
}
//END colletions

//* Init Forces*//
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
    this.explode = function() {  setUp(this); };
    
  };
  
  window.onload = function() {
    //var conf = new setUp();
    /*var gui = new dat.GUI();
    gui.add(conf, 'space', 10, 500);
    console.log(conf);*/
  };

  //END SETUP
  //startloop
  window.requestAnimationFrame(update);