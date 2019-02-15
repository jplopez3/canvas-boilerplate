/**
 * Vectors
* @version         0.0.1
* @lastmodified    00.00.0000 
*/
function Vector(x, y){
  this.x = x;
  this.y = y;
  
  //sum current vector with another one
  this.sum = function(vector){
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
  }
  this.sub = function(vector){
    this.x = vector.x - this.x;
    this.y = vector.y - this.y;
  }
  this.mult = function (value){
    this.x = this.x * value;
    this.y = this.y * value;
  }
  
  this.divide = function (value){
    if(value != 0){
      this.x = this.x / value;
      this.y = this.y / value;
    }
    
  }
  //set magnitude to 1, for easy vector manipulation
  this.normalize = function(){
    var mag = this.magnitude();
    this.divide(mag);
  }
  //get direction or speed of a vector
  this.magnitude = function(){
    // Pythagorean theorem
    //https://www.dummies.com/education/science/physics/how-to-find-a-vectors-magnitude-and-direction/
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  //return a copy of this object
  this.clone = function(){
    return new Vector(this.x, this.y);
  }
} 