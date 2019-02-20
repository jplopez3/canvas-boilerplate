/**
 * Assign the project to an employee.
 * @param {Object} ctx - The canvas where the particle will be added.
 * @param {Vector} position - Where the object will be spawned.
 * 
 * @param {string} ----.
 */
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

