/**
 * Dat.gui Config
 * https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
 */
class GlobalConfig {
    constructor() {
        this.message = 'dat.gui';
        this.speed = 0.8;
        this.space = 100;
        this.displayOutline = false;
        this.balls = 1;
        //colors
        this.color0 = "#ffae23"; // CSS string
        this.color1 = [0, 128, 255]; // RGB array
        this.color2 = [0, 128, 255, 0.3]; // RGB with alpha
        this.color3 = {
            h: 350,
            s: 0.9,
            v: 0.3
        }; // Hue, saturation, value

    }

    explode() {
        alert("bamm!")
    }
}

//make config available globaly
var conf = new GlobalConfig();

window.onload = function () {
    //on dat.gui on page load
    var gui = new dat.GUI();
    gui.add(conf, 'space', 10, 500);
    gui.add(conf, 'balls', 20, 30);
    //colors
    gui.addColor(conf, 'color0');
    gui.addColor(conf, 'color1');
    gui.addColor(conf, 'color2');
    gui.addColor(conf, 'color3');

};