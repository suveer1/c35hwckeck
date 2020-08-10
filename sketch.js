//Create variables here
var dog, happyDog, database, foodS, foodStock;
var add;

function preload(){
 happydogimg=loadImage("images/dog.png");
  dogimg=loadImage("images/doghappy.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  foodobj = new Food();
  feed = createButton("FEED THE DOG");
  feed.position(700,95);
  feed.mousePressed();
  add=new Food();
}


function draw() {  
  background("darkgreen");
  //foodobj.display();
   add.adding();
}




