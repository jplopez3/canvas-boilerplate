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
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    if (mouse.isPressed) {
        ctx.font = '24px roboto';
        ctx.fillStyle = 'red';
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

    window.requestAnimationFrame(update);
}