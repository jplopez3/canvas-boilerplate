class Mouse {
  
    constructor(){
      this.x = 0;
      this.y = 0;
      this.delta = 4; //TODO:  delta = Input.mousePosition - lastPosition;
      this.isPressed = false;
      this.isMoved = false;
      this.isDragged = false;
    }

    updatePosition = (event) => {
        let canvas = event.currentTarget;
        this.x = event.clientX - canvas.offsetLeft;
        this.y = event.clientY - canvas.offsetTop;
       
        this.isDragged = this.isPressed && this.delta > 0;
        console.log(this.isDragged);
    }
  }
  