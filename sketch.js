var database;
var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var form, player, game;


function setup(){
  canvas= createCanvas(400,450);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  //background("white");
  
  
    //drawSprites();
  
}


