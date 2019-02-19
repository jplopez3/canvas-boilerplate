class Mouse {
  
    constructor(x,y){
      this.x = 0;
      this.y = 0;
      this.delta = 0; //TODO:  delta = Input.mousePosition - lastPosition;
      this.isPressed = false;
      this.isMoved = false;
      this.isDragged = false;
    }
  
    get x(){
      return this.x;
    }
    get y () {
      return this.y;
    }
    get isPressed(){
      return this.isPressed;
    }
    get isMoved(){
      return this.isMoved;
    }
    get isDragged(){
      return this.isPressed;
    }
    updatePosition(event){
      this.x = event.clientX - this.offsetLeft;
      this.y = event.clientY - this.offsetTop;
     
      this.isDragged = this.isPressed && this.delta > 0;
     
    }
  }