/* GLOBALS 
 * :TODO wrap?
 */
/*let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

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
const mouse = new Mouse();

/* EVENTS */


//END EVENTS


//resizeCanvas
/*window.onresize = resizeCanvas;

function resizeCanvas(width, height) {
  canvas.width = width;
  canvas.height = height;
  width = canvas.width;
  height = canvas.height;
};

*/
class canvas {
  constructor() {
    this.$el = document.getElementsByTagName("canvas")[0];
    this.ctx = this.$el.getContext('2d');
    this.mouse = new Mouse();
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
    this.keyboard = new Keyboard(keyMap);

    window.addEventListener("resize", this.onResize);
  }

  get width() {
    return this.$el.width;
  }

  get height() {
    return this.$el.height;
  }

  onResize = (event) => {
    console.log(event.target,
      event.target.innerWidth,
      event.target.innerHeight);
  };

}

export default canvas;