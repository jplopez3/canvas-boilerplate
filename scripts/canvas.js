/* GLOBALS 
* :TODO wrap?
*/
let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const mouse = new Mouse();
//Keyboard
const keyMap = {
  39: 'right',
  37: 'left',
  38: 'up',
  40: 'down',
  
  68: 'd',
  65: 'a',
  87: 'w',
  83: 's'
}
const keyboard = new Keyboard(keyMap);
//mouse position over canvas element
/* EVENTS */
//keys
window.addEventListener( "keydown", keyboard.onKeyDown, true);
window.addEventListener( "keyup", keyboard.onKeyUp, true);
//mouse
canvas.onmousemove = mouse.updatePosition;
window.onmousedown = onMouseDown;
window.onmouseup = onMouseUp;
window.onresize = resizeCanvas;
function onMouseDown(event){
  mouse.isPressed = true;
};
function onMouseUp(event){
  mouse.isPressed = false;
};
//END EVENTS


//resizeCanvas
function resizeCanvas(width, height){
  canvas.width = width;
  canvas.height = height;
  width = canvas.width;
  height = canvas.height;
};


/*class canvas {
  constructor(){
    var canvas = document.getElementsByTagName("canvas")[0];
    this.ctx = canvas.getContext('2d');
    this.mouse = new Mouse();
    this.keyboard = new Keyboard(keyMap);
  }
}*/



