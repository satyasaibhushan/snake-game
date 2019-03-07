var s;
var scl = 20;
var food;

function setup(){
  createCanvas(600,600);
 
  //delay the movement of the square for arcade effect
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
   
function draw() {
 background(0);
  death();
  update();
  show();
  
  if (eat(food)) {
   pickLocation();
  }
  
  // food:
  fill(242,242,242);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    dir(0, -1);
  } else if (keyCode === DOWN_ARROW){
    dir(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    dir(1, 0);
  } else if (keyCode === LEFT_ARROW){
    dir(-1, 0);
  }
}


  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  function  dir(x, y){
    this.xspeed = x;
    this.yspeed = y;
    
  }
  
  function  eat(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 4) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  
  function death() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }
  
  function update(){
    for (var i = 0; i < this.tail.length-1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total-1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
    //avoid snake to go out of canvas
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }
  
  function show() {
    fill(1,254,0);
    for (var i = 0; i < this.total; i++){
     rect(this.tail[i].x,this.tail[i].y, scl, scl);
    } 
    rect(this.x, this.y, scl, scl);
  }

