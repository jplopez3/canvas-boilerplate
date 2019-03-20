/**
 * Loop canvas 
 *
 */
var lastTime = 0,
    elapsed = 0;
var update = function (currentTime) {

    elapsed = lastTime - currentTime;
    lastTime = currentTime;

    ctx.fillStyle = conf.color0;
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.clearRect(0, 0, width, height)
    
    if (mouse.isPressed) {

        ctx.font = '24px roboto';
        ctx.fillStyle = 'red';
        ctx.strokeText("x: " + mouse.x + "y: " + mouse.y, mouse.x, mouse.y);
 

        ctx.globalCompositeOperation = "xor";
        ctx.fillStyle = "red";
        
        ctx.fillRect(20, 20, 75, 50);
        ctx.globalCompositeOperation = "source-over";
        for (var i = 0; i < ImageCollection.length; i++) {
            ImageCollection[i].update();
        }
        
        // ctx.clip();
        // ctx.restore();
    } else {
        //Obstacles loop
        // set composite property
       
       
       
       
        ctx.globalCompositeOperation = 'source-over';
        ctx.save();
        ctx.fillStyle="rgb(0, 0, 0)";
       // ctx.globalAlpha = 0.009;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        //ctx.globalCompositeOperation = 'destination-out';
        for (var i = 0; i < ImageCollection.length; i++) {
            ImageCollection[i].update(); 
        }
        ctx.globalCompositeOperation = conf.CompositeOperation;
        ctx.beginPath();
        ctx.moveTo(mouse.x + 50, mouse.y);
        ctx.arc(mouse.x, mouse.y, 50, 0, 2*Math.PI);
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fill();

        ctx.globalCompositeOperation = "source-over";
    }


    if (keyboard.isKeyPressed) {
        if (keyboard.pressedKeys['w']) {
            player1.applyForce(forces.up);
        }

        if (keyboard.pressedKeys['a']) {
            player1.applyForce(left);
        }
    }

    



    window.requestAnimationFrame(update);
}