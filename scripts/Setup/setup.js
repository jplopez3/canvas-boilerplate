import canvas from "./../canvas.js";

class Setup extends canvas {
  constructor() {
    super();
    //set up colletion of objects we will use in our canvas presentation
    this.PlayersCollection = [];
    this.ObstaclesCollection = [];

    //this.loadAssets(); TODO
    this.initPlayers();
    // this.initObstacles();
  }

  initPlayers() {
    //Player1
    var player1Conf = new BallConfig();
    player1Conf.ctx = this.ctx;
    player1Conf.mass = 100;
    player1Conf.position = new Vector(50, getRandomNumber(this.height - 50, this.height));
    player1Conf.bgColor = getRandomColor();
    var player1 = new Ball(player1Conf);

    //Player2
    var player2Conf2 = new BallConfig();
    player2Conf2.ctx = this.ctx;
    player2Conf2.mass = 100;
    player2Conf2.position = new Vector(100, getRandomNumber(this.height - 50, this.height));
    player2Conf2.bgColor = getRandomColor();
    var player2 = new Ball(player2Conf2);

    this.PlayersCollection = [player1, player2];
  }

  getCollections() {
    return [
      this.PlayersCollection,
      this.ObstaclesCollection
    ]
  }

  getForces(){
    return {
      gravity: new Vector(0, 5),
      wind: new Vector(0.1, 0),
      up: new Vector(0, -10),
      left: new Vector(-50, 0),
      right: new Vector(50, 0),
      down: new Vector(0, 50),
      frictionCenas: 10
    }
  }
}
var ayy = new Setup();

console.log(ayy.getCollections());

//export { cube, foo };
//SETUP CANVAS Objects
//init collections
/*var PlayersCollection = [];
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
  ballConf.position = new Vector(getRandomNumber(0, width), getRandomNumber(0, height));
  ballConf.bgColor = getRandomColor();
  ballConf.velocity = new Vector(getRandomNumber(1, 5), getRandomNumber(1, 5));
  ballsCollection.push(new Ball(ballConf));
}
//END colletions
*/
//* Init Forces*//




export default new Setup();