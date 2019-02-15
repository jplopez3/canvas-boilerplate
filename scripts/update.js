/**
* Loop canvas 
*
*/
var lastTime = 0,
    elapsed = 0;
var update = function (currentTime) {

    elapsed = lastTime - currentTime;
    lastTime = currentTime;
    
    ctx.fillStyle = "rgba(" + getRandomNumber(200, 250) + ", " + getRandomNumber(100, 255) + ", " + getRandomNumber(220, 255) + ", 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    if (isMousePressed) {
        ctx.font = '24px roboto';
        ctx.fillStyle = 'red';
        ctx.strokeText("x: "+ mouse.x +"y: "+mouse.y, mouse.x, mouse.y);

    }
    /*if (isKeyPressed) {
        if (pressedKeys['w']) {
            player1.applyForce(up);
        }
        if (pressedKeys['a']) {
            player1.applyForce(left);
        }
    }*/

    //Obstacles loop
    for (var i = 0; i < ObstaclesCollection.length; i++) {
        
        ObstaclesCollection[i].update();
    }

    window.requestAnimationFrame(update);
}





//setUp();
