//bg
let bg1
let bg2
let bg3
let bg4


function preload(){
  //load song
  song=loadSound("The-Meditation_AdobeStock_413928280_preview.m4a");
  //bg
  bg1 = loadImage("images/bg_01.jpg");
  bg2 = loadImage("images/bg_02.jpg");
  bg3 = loadImage ("images/bg_03.jpg");
  bg4 = loadImage ("images/bg_04.jpg");
  
  bg = [bg1, bg2, bg3, bg4]
}


function setup() {
  createCanvas(800, 800);
    d = select('.div-block');
  d.position(200,0);
  noFill();
  background (bg1);
  noLoop();


 //button for background
  button = createButton('Background');
  button.size(150, 50);
  button.position(310, 600);
  button.style("font-family","Helvetica");
  button.style("font-size", "15px");
  button.mousePressed(randomizerbg);
  
  
  //song
  song.loop();
}

function draw() {
  background(bg1);
}


//bg function
function randomizerbg(){
  background(random(bg));
}
