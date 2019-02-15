/**
 * Assign the project to an employee.
 * @param {Object} ctx - The canvas where the particle will be added.
 * @param {Vector} position - Where the object will be spawned.
 * 
 * @param {string} ----.
 */
/*function Particle(ctx,position,size, acceleration ,bgColor, borderWidth, borderColor){
  this.x = x;
  this.y = y; 
  var me = this;
  this.position = position;
  this.velocity = new Vector(0,0);
  this.acceleration = acceleration || new Vector(0,0);
  this.myacceleration = getRandomNumber(1,3);
  this.size = size || 20;
  this.ctx = ctx;
  this.background = bgColor || 'rgb(0, ' + this.myacceleration * 50 + ',0)';;  
  this.borderWidth = borderWidth || '0px';
  this.borderColor = borderColor || '#003300';
       
  this.update = function(){
 

     this.velocity.x  *=  0.95;
     this.velocity.y  *= 0.95; 
     
    this.position.sum(this.velocity);
    if(this.position.x < 0 -this.size ){
      this.position.x  += width + this.size;
    }
    if(this.position.x > width + this.size ){
      this.position.x  -= width + this.size;
    }
     if(this.position.y < 0 -this.size ){
      this.position.y  += height + this.size;
    }
    if(this.position.y > height + this.size ){
      this.position.y  -= height + this.size;
    }
    this.draw();
  }
  this.draw = function(){
    this.ctx.beginPath();
     
    this.ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    //fill background
    this.ctx.fillStyle = this.background; // background
    this.ctx.fill();
    //fill border
    this.ctx.lineWidth = this.borderWidth;
    this.ctx.strokeStyle = this.borderColor;
    this.ctx.stroke();
  }
  window.addEventListener( "keydown", doKeyDown, true);
  window.addEventListener( "keyup", doKeyUp, true);

function doKeyUp(e){
  if ( e.keyCode == 87 ) {
    me.acceleration.y =0;
  }  
  //S key 
  if ( e.keyCode == 83 ) {
     me.acceleration.y =0;
  }
  //A Key
  if ( e.keyCode == 65 ) {
     me.acceleration.x =0; 
  }
  //D key
  if ( e.keyCode == 68 ) {
    me.acceleration.x =0;
  }
  
}
  
  
function doKeyDown(e){
  console.log(e.keyCode);
  //W key 
  if ( e.keyCode == 87 ) {
    me.acceleration.y += -me.myacceleration;
  }  
  //S key 
  if ( e.keyCode == 83 ) {
     me.acceleration.y += me.myacceleration;
  }
  //A Key
  if ( e.keyCode == 65 ) {
     me.acceleration.x += -me.myacceleration; 
  }
  //D key
  if ( e.keyCode == 68 ) {
    me.acceleration.x += me.myacceleration;
  }
}
}
*/
class Defaults{
  constructor(){
    this.ctx = '',
    this.position = new Vector(0,0),
      
    this.background = '#003300',
    this.bgColor = 'rgb(0, 0, 0)',
    this.borderWidth = '1px',
    this.borderColor  = '#003300'
  }
  
  get config(){
    return this;
  }
}



class Particle{
  constructor(config){
    this.ctx = config.ctx;
    this.position = config.position;
    
    //styling
    this.size =  config.width || 20;
    this.background = config.bgColor;
    this.borderWidth = config.borderWidth;
    this.borderColor = config.borderColor;
    //shadows
    
     
    console.log("ouu",config);
  }
  
  update(){
    throw new Error('You have to implement the method update!');
    this.draw();
  }
  
  draw(){
    throw new Error('You have to implement the method draw!'); 
  }
  
}


