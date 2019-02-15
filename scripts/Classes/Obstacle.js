class Obstacle extends Shape{
  constructor(config){
    super(config);
    this.position = new Vector(config.position.x,  0)
    this.aceleration = new Vector(0, 0);
    this.velocity = new Vector(0,0);
    this.mass = 10;
    this.width = 100;
    this.speed = 1.22;
    this.max = getRandomNumber(40, height /2);
    this.gap = getRandomNumber(80, 200);
   // this.height = 
    this.top = {
      position : this.position.clone(),
      width: this.width,
      height: this.gap 
    }
    this.bottom = {
      position : this.position.clone(),
      width: this.width,
      height:  height - this.top.height - this.gap
    }
    

   this.bottom.position.y = height -  this.bottom.height;
  }
  
   update(){
     this.speed *= 1.0001;
     this.velocity.x = this.speed;

    this.bottom.position.x -= this.speed;
    this.top.position.x -= this.speed;
     if( this.bottom.position.x + this.bottom.width < 0){
        this.bottom.position.x = width; 
       this.gap = getRandomNumber(80, 200);
     }
     if( this.top.position.x + this.bottom.width < 0){
        this.top.position.x = width;       
     }
    this.draw();
  }
  draw(){
    this.ctx.beginPath();

    this.ctx.rect(this.top.position.x, this.top.position.y, this.top.width,  this.top.height);
    
     this.ctx.rect(this.bottom.position.x, this.bottom.position.y , this.bottom.width, this.bottom.height);
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
}