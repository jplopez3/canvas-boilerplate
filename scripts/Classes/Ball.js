class Ball extends Shape{
  constructor(config){
    super(config);
    this.aceleration = new Vector(0, 0);
    this.velocity = new Vector(0,0);
    this.mass = 100;
    this.r = config.radius;       //radius
    this.sAngle = config.sAngle;  //Start angle
    this.eAngle = config.eAngle;  //End angle
    this.cc = config.cc;          //counterclockwise
  }
  update(){

    this.velocity.sum(this.aceleration)
    this.position.sum(this.velocity);
    this.aceleration.mult(0);
    this.bounce();
    
    this.draw();
  }
  draw(){
    this.ctx.beginPath(); 
    this.ctx.arc(this.position.x, this.position.y, this.size,  Math.PI * this.sAngle, Math.PI * this.eAngle);
    //fill background
    this.ctx.fillStyle = this.background; // background
    this.ctx.fill();
    
    //fill border
    this.ctx.lineWidth = this.borderWidth;
    this.ctx.strokeStyle = this.borderColor;
    
    //shadow
    this.ctx.shadowOffsetX = this.shadow.shadowOffset.x;
    this.ctx.shadowOffsetY = this.shadow.shadowOffset.y;
    this.ctx.shadowBlur    = this.shadow.shadowBlur;
    this.ctx.shadowColor   = this.shadow.shadowColor;  //or use rgb(red, green, blue)
    this.ctx.closePath();
    this.ctx.stroke();
    
  }
  
  bounce(){
    if(this.position.x + this.size >= width){
      this.velocity.x *= -1;
    }
    else if(this.position.x - this.size <= 0 ){
      this.velocity.x *= -1;
    }
     if(this.position.y + this.size >= height){
      this.velocity.y *= -1;
       this.position.y = height - this.size ;
    }
   else if(this.position.y - this.size <= 0 ){
      this.velocity.y *= -1;
    }
  }
  collideWith(rect){
     if(this.position.x + this.size >=  rect.position.x){
        this.velocity.x *= -1;
      }
    else if(this.position.x - this.size < rect.position.x + rect.width ){
         this.velocity.x *= -1;  
     }
    
     if (this.position.x + this.size > rect.position.x && 
         this.position.x - this.size < rect.position.x + rect.width && 
         this.position.y + this.size > rect.position.y && 
         this.position.y - this.size < rect.position.y + rect.height){
        return true;
      } else {
        return false;
      }      
  }
  applyForce(force){
    //https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion#Newton.27s_second_law
    var newForce = force.clone();
    newForce.divide(this.mass);
    //var newForce = new Vector( force.x / this.mass, force.y / this.mass) // Newton second law F = ma , a = m/F
     this.aceleration.sum(newForce)
  }
  
  moveTo(destination){
    var newVector =  this.position.clone();
       newVector.sub(destination);
      this.applyForce(newVector);
  }
}

class BallConfig extends ShapeConfig{
  constructor(){
    super();
    this.radius = 50,
    this.sAngle = 0.1,   //Start angle
    this.eAngle = 2,   //End angle
    this.cc = false    //counterclockwise
  }
  
}