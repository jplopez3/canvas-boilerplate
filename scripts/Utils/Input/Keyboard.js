class Keyboard {
    constructor(keyMap){
      this.pressedKeys = {};
  
      for (var keyCode in keyMap){
        this.pressedKeys[keyMap[keyCode]] = false ;
      }
      this.isKeyPressed = false;
      
    }
    onKeyDown = (event) => {
      this.isKeyPressed = true;
      
      var key = keyMap[event.keyCode];
      this.pressedKeys[key] = true;

    }
    onKeyUp = (event) => {
      this.isKeyPressed  = false;
      
      var key = keyMap[event.keyCode];
      this.pressedKeys[key] = false; 
      
       for (var keyCode in this.pressedKeys) {
            if (this.pressedKeys[keyCode]){
              this.isKeyPressed = true;
              break;
            } 
        }
    }
  }