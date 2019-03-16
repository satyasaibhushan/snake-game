var sc = 20
var i=0,j=0
var p = { x :0 ,y :0 ,velx :1*sc ,vely :0}
var x =0 ,y=0
var tailx = []
var taily = []
function setup() {
    createCanvas(600, 600);
    background(0)
    frameRate(13)
}

function draw() {
   background(0)

   
   eat()
   end() 
   drw() 
   dead() 
}

function drw()
{ 
  fill(255)
  //rect(p.x, p.y, 20, 20)
  p.x=p.x + p.velx;
  p.y=p.y + p.vely;  

 if(p.x > width)p.x=0;
 if(p.x < 0)p.x=width;
 if(p.y > height)p.y=0;
 if(p.y < 0)p.y=height;

 for(var b=1;b<i;b++)
 {
   rect(tailx[b],taily[b],sc,sc)
 }
  fill(0,255,0)
  rect(tailx[0],taily[0],sc,sc)

}

function eat()
{    

    if(p_eat() == 1 || j==0) 
     {
      frt();
      i++;

     }  
    else{
        fill(255,0,0)
        rect(x*20,y*20,20,20)
    } 

  function frt()
  {
    x= floor(random(0, 30)) 
    y= floor(random(0, 30))   
   fill(255,0,0)
   rect(x*20,y*20,20,20)
   if(j==0) j++;
  }

  function p_eat()
  { 
    var d = dist(p.x,p.y,20*x,20*y)    
      if(d<=4){ 
       return 1;}   
      else if(d>4)
       return 0; 

   }  
}




function end()
{
    for(var a=i-2;a>=0;a--)
    {//console.log(i)
        tailx[a+1]=tailx[a]
        taily[a+1]=taily[a]
    }
  // p.tail[0]=createVector(p.x, p.y )
  tailx [0]=p.x
  taily [0]=p.y
}

function dead(){
    for(var c=0;c<i;c++)
  {
    var posx = tailx[c]
    var posy = taily[c] 
    var d=dist(posx,posy,p.x,p.y)
    if(d<1)
    {
      i=1;
      tailx = []
      taily = []
    }
  } 
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) { 
         if(!(p.velx==1*sc) || i==1) {p.velx=-1*sc;p.vely=0;}
        }
     else if (keyCode ===  RIGHT_ARROW){ 
          if(!(p.velx==-1*sc)|| i==1 ){p.velx=1*sc;p.vely=0;}
        }
    else if (keyCode === DOWN_ARROW) {
        if(!(p.vely==-1*sc) || i==1){p.vely=1*sc;p.velx=0;}
    }
    else if (keyCode === UP_ARROW) {
        if(!(p.vely==1*sc) || i==1) {p.vely=-1*sc;p.velx=0;}
    }
  }