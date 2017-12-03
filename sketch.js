var selection = 0;

function setup() {
  createCanvas (1000,500);
  //define the weight of the stroke on the objects
  strokeWeight(8);
  noFill();
  //Make sure background is grey
 background (50);

}

function draw() {
 //Create 1000 shapes using the for-loop
  for (var  x = 0; x < 1000; x+=400){
    push();
    //random position
    translate(random(-100,width-100), random (-100,height+100));
    //random rotation
    rotate(random(2*PI));
    //random scale
    scale(random(3));
  //Use these variables and let them be equal to the mapped values  for your mouses position
  var Red = map(mouseX,0,width,0,255);
  var Blue = map(mouseY,0,height,0,255);

  //Hopefully the Mouse movement will define the color of the strokes
  stroke(Red,random(255),Blue);
  //fill color is black with a random transparency
  fill(0,random(255));
  //These selections will enable you to switch between shapes
  if (selection===0) ellipse (0,0,40,40);
  if (selection===1) rect(0,0,40,40);
  if (selection===2) triangle(30,75,58,20,86,75);

  pop();
  }
//Pressing these keyd will enable you to switch between shapes
if (key === 'i') selection = 0;
if (key === 'o') selection = 1;
if (key === 'p') selection = 2;
}
//The End 
