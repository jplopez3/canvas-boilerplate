import AnimationFrames from './AnimationFrames.js';
import setup from './../Setup/setup.js';
console.log(setup);

var collections = setup.getCollections();
/**
* Loop canvas 
*
*/
var mainLoop = function (timestamp) {
    
    
    //clean canvas
    this.ctx.fillStyle = conf.color0;
    this.ctx.fillRect(0, 0, this.width, this.height);

    //draw here
    this.ctx.font = "30px Verdana";
    this.ctx.strokeText(this.elapsed.toFixed(1), this.width - 80, 50);
    if (this.mouse.isPressed) {
        this.ctx.strokeText("x: "+ this.mouse.x +"y: "+this.mouse.y, this.mouse.x, this.mouse.y);
    }
    if (this.keyboard.isKeyPressed) {
        if (this.keyboard.pressedKeys['w']) {
            player1.applyForce(forces.up);
        }

        if (this.keyboard.pressedKeys['a']) {
            player1.applyForce(left);
        }
    }

    //Obstacles loop
    for (let index = 0; index < collections.length; index++) {
        const collection = collections[index];

        for (let index = 0; index < collection.length; index++) {
            const element = collection[index];
            element.applyForce(setup.getForces().gravity);
            element.update();
        }
        
    }
   /* for (var i = 0; i < PlayersCollection.length; i++) {   
        PlayersCollection[i].update();
        PlayersCollection[i].applyForce(forces.gravity);
    }
    for (var i = 0; i < ballsCollection.length; i++) {   
        if(ballsCollection[i].ttl < 0){
            ballsCollection.splice(i, 1)
        }else{
            ballsCollection[i].update();
        }
        
       // ballsCollection[i].applyForce(forces.gravity);
    }*/

    //window.requestAnimationFrame(update);
}

const update = new AnimationFrames(mainLoop);
