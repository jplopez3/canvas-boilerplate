/**
 *  Utils!
* @version         0.0.1
* @lastmodified    00.00.0000
*/
var arrColors = ['#A81E22', '#DEE5E5','#095256', '#087F8C', '#6C8EAD'];
var getRandomNumber = function(min,max){
  var num = min + Math.random() * (max - min);
  return num;
}
var getRandomColor = function(){
  var index = getRandomNumber(0, arrColors.length - 1);
  console.log(arrColors[Math.round(index)]);
  return arrColors[Math.round(index)];
} 
function toHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
//get DPI
let dpi = window.devicePixelRatio;
function fix_dpi() {
  //get CSS height
  //the + prefix casts it to an integer
  //the slice method gets rid of "px"
  let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  //get CSS width
  let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
  //scale the canvas
  canvas.setAttribute('height', style_height * dpi);
  canvas.setAttribute('width', style_width * dpi);
}

class Color{
  constructor(r,g,b,a){
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a || 1;
  }
  
  get hex(){
    return '#'+ toHex(this.red)+""+toHex(this.green)+""+toHex(this.blue);
  }
  get rgb(){
    return 'rgb('+ this.red+','+ this.green+','+ this.blue+','+this.alpha+')'
  }
  
   hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
}

let red = new Color(150,150,10);
