var x=0;
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  stroke(0);
  var y;
  y= 	-300*(sin(x));
  x=x+0.01
  strokeWeight(2)
  line(10,5,10,355)
  line(10,200,390,200)
  line()
  strokeWeight(0.1)
  ellipse(x*60+10,(y/2)+200,1.2,1.2)
  fill(0);
}