var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext('2d');

/* GLOBALS 
* :TODO wrap? eg: g.mouse
*/
const width = canvas.width;
const height = canvas.height;
let isMousePressed = false;
let isKeyPressed = false;
let pressedKey = null;
//mouse position over canvas element
let mouse = { 
  x : 0,
  y : 0
} 
//resizeCanvas

/* EVENTS */
//mouse
canvas.onmousemove = trackMousePosition;
window.onmousedown = onMouseDown;
window.onmouseup = onMouseUp;
//keys
window.addEventListener( "keydown", onKeyDown, true);
window.addEventListener( "keyup", onKeyUp, true);

var keyMap = {
  39: 'right',
  37: 'left',
  38: 'up',
  40: 'down',
  
  68: 'd',
  65: 'a',
  87: 'w',
  83: 's'
}
var pressedKeys = {
    left: false,
    right: false,
    up: false,
    down: false,
     
    a: false,
    d: false,
    w: false,
    s: false,
  }
function onKeyDown(e){
  isKeyPressed = true;
  pressedKeyCode = e.keyCode;
  
  var key = keyMap[pressedKeyCode];
  pressedKeys[key] = true;
}
  
function onKeyUp(e){
  isKeyPressed = false;
  pressedKeyCode = e.keyCode;
  
  var key = keyMap[pressedKeyCode];
  pressedKeys[key] = false; 
  
   for (var key in pressedKeys) {
        if (pressedKeys[key]){
          isKeyPressed = true;
          break;
        } 
    }
}
function trackMousePosition(event){
  mouse.x = event.clientX - this.offsetLeft;
  mouse.y = event.clientY - this.offsetTop;
  //console.log(mouse);
};
function onMouseDown(event){
  isMousePressed = true;
};
function onMouseUp(event){
  isMousePressed = false;
};

function resizeCanvas(width, height){
  canvas.width = width;
  canvas.height = height;
  width = canvas.width;
  height = canvas.height;
}