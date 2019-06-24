import canvas from "./../canvas.js";
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
class AnimationFrames extends canvas {

    constructor(loopFunction, autoStart = true){
        super();
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

export default AnimationFrames;