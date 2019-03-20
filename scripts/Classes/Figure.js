//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
class Figure extends Shape {
    constructor(config) {
        super(config);
        this.sliceOpt = {
            top: 0,
            left: 0,
            width: 87,
            height: 104
        }
        this.width = config.width;
        this.size = config.size;
        this.img = new Image(); // Create new img element
        
        this.img.addEventListener('load', () => {
            // execute drawImage statements here
            this.update();
            this.getPixel(1,1);
        }, false);
        this.img.src = config.src;
    }
    slice(){

        ctx.drawImage(this.img,this.position.x + mouse.x, this.position.y + mouse.y, this.width,this.width, this.position.x,this.position.x, this.sliceOpt.width, this.sliceOpt.height);
    }
    update() {

        this.draw();
    }

    draw() {
        
       ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height,mouse.x, mouse.y, 200, 200);
    /*  ctx.drawImage(this.img,this.position.x, this.position.y, this.width,this.width, this.slice.top, this.slice.left, this.slice.width, this.slice.height);
      const imageData = ctx.createImageData(100, 100);

        // Iterate through every pixel
        for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i + 0] = 190;  // R value
        imageData.data[i + 1] = getRandomNumber(0,200);    // G value
        imageData.data[i + 2] = 210;  // B value
        imageData.data[i + 3] = 255;  // A value
        }

        // Draw image data to the canvas
        ctx.putImageData(imageData, mouse.x, mouse.y);
*/
        var imageData = ctx.getImageData(this.position.x, this.position.y, this.width, this.height);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            data[i]     = data[i];     // red
            data[i + 1] = data[i + 1]; // green
            data[i + 2] = data[i + 2]; // blue
          }
          ctx.putImageData(imageData, 0, 0);
}

    getPixel(x, y) {

    //ctx.drawImage(this.img, 0, 0);
    return ctx.getImageData(x, y, this.img.width, this.img.height).data;
  }

}