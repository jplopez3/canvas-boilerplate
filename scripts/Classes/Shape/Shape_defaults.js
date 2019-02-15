class ShapeConfig{
  constructor(){
    this.ctx = '',
    this.position = new Vector(0,0),
      
    this.background = '#003300',
    this.bgColor = 'rgb(0, 255, 0)',
    this.borderWidth = '1px',
    this.borderColor  = '#003300',
     //shadow
      this.shadow={
        shadowOffset : new Vector(0,0),
        shadowBlur : 20,
        shadowColor:  "gray"   //or use rgb(red, green, blue)
      }
   
  }
  
  get config(){
    return this;
  }
}