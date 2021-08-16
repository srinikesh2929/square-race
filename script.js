var won = false;
class Square{
  constructor(x,color) {
    this.x = x;
    this.y = 550;
    this.color = color;
    this.width = 40;
    this.height = 40;
    this.speed = 5;
  }
  show() {
    fill(this.color);
    rect(this.x,this.y,this.width,this.height)
  }
  moveUp() {
    this.y -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }
  stop() {
    this.x = this.x;
    this.y = this.y;
  }
  check(){
    if (this.y<50){
      clear();
      fill(this.color);
      textSize(35);
      text(this.color + ' Square has won ' ,10,300);
      won = true;
    }
  }
}
var square1, square2;
function setup() {
  createCanvas(400, 600);
  square1 = new Square(30, 'Teal');
  square2 = new Square(130, 'Purple');
  square3 = new Square(230, 'Orange');
  square4 = new Square(330, 'Red');

}
function draw() {
  background("yellow");
	fill("black");
	for(var x=100; x<400; x+=100){
		for(var y=50;y<600;y+=20){
			line(x, y, x, y+10);
		}
	}
	line(0, 50, 400, 50);
	textSize(30);
  text("FINISH  LINE", 100, 40);
  square1.show();
  square2.show();
  square3.show();
  square4.show();
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      square1.moveUp();
    }else if (keyCode == DOWN_ARROW) {
      square1.moveDown();
    }
  }
  square2.speed = random(0, 7);
  square3.speed = random(0, 7);
  square4.speed = random(0, 7);
  square2.moveUp();
  square3.moveUp();  
  square4.moveUp();
  square1.check();
  square2.check();
  square3.check();  
  square4.check();
  if (won === true) {
    noLoop();
  }
}