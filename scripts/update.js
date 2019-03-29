/**
* Loop canvas 
*
*/
var mainLoop = function (timestamp) {
    
    
    //clean canvas
    ctx.fillStyle = conf.color0;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //draw here
    ctx.font = "30px Verdana";
    ctx.strokeText(this.elapsed.toFixed(1), width - 80, 50);
    if (mouse.isPressed) {
        ctx.strokeText("x: "+ mouse.x +"y: "+mouse.y, mouse.x, mouse.y);
    }
    if (keyboard.isKeyPressed) {
        if (keyboard.pressedKeys['w']) {
            player1.applyForce(forces.up);
        }

        if (keyboard.pressedKeys['a']) {
            player1.applyForce(left);
        }
    }

    //Obstacles loop
    for (var i = 0; i < PlayersCollection.length; i++) {   
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
    }

    //window.requestAnimationFrame(update);
}
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
class AnimationFrames {

    constructor(loopFunction, autoStart = true){
        this.running = true,
        this.myReq;
        this.lastFrameTimeMs = 0, // The last time the loop was run
        this.elapsed = 0,
        this.fps = 0;
        this.maxFPS = 60;
        this.loopFunction = loopFunction;

        if (autoStart) this.start();
    }

    start(){
        this.running = true;
        this.run();
    }
    stop(){
        this.running = false;
        cancelAnimationFrame(this.myReq);
      };
    run(){
       /* if (this.running){
            requestAnimationFrame((timestamp) => {
                if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
                    requestAnimationFrame(mainLoop);
                    return;
                }
                this.loopFunction(timestamp);
                this.run();
            });
        }  */
       this.myReq = requestAnimationFrame((timestamp) => {
            this.elapsed = timestamp - this.lastFrameTimeMs;
            this.fps = 1000 / this.elapsed;
             // Throttle the frame rate.
            if(timestamp < this.lastFrameTimeMs + (1000 / this.maxFPS)){
                this.run();
                return;
            }
            this.lastFrameTimeMs = timestamp;

            //run draw loop
            this.loopFunction(timestamp);
            
            if (this.running) this.run();
        });
      };
}

const update = new AnimationFrames(mainLoop);
