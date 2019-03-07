function setup() {
	createCanvas(640, 360);
	background(211);
  }
  
  var c = {
	r : 0,
	g : 0,
	b : 139 
  }
  var f=1;
  
  function draw() {
	if(f==0){
	c.r = random(0,255),
	c.g = random(0,255),
	c.b = random(0,255)
	}
	noStroke();
	ellipse(mouseX,mouseY,25,25)
	  fill(c.r,c.g,c.b,100)
  }
  
  function mousePressed()
  { background(211);
   f=0
	
  }