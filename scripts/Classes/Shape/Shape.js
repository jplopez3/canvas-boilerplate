/**
  Abstract Class
*/
class Shape{
  constructor(config){
    this.ctx = config.ctx;
    this.position = config.position;
    
    //styling
    this.size =  config.width || 20;
    this.width = config.width || 20;
    this.height = config.height || 20;
    this.background = config.bgColor;
    this.borderWidth = config.borderWidth;
    this.borderColor = config.borderColor;
    //shadows
    this.shadow = config.shadow;
  }
  
  update(){
    throw new Error('You have to implement the method update!');
    this.draw();
  }
  
  draw(){
    throw new Error('You have to implement the method draw!'); 
  }
  
}

