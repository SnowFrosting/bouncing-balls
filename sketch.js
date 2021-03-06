var canvas;
var block1,block2,block3,block4;

var edges;
var ball;var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   

    block1 = createSprite(0,580,360,30);    //create 4 different surfaces
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);    //create 4 different surfaces
    block2.shapeColor = "green";

    block3 = createSprite(515,580,220,30);    //create 4 different surfaces
    block3.shapeColor = "orange";

    block4 = createSprite(740,580,220,30);    //create 4 different surfaces
    block4.shapeColor = "pink";

    ball = createSprite(random(20,750),100,40,40);
    ball.shapecolor = "grey"
    ball.velocityX = 4;
    ball.velocityY = 9;
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    //music.play();

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
       ball.shapeColor = "blue";
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
     }
     if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "orange";
     }
     if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "pink";
     }
     

     drawSprites();

    //add condition to check if box touching surface and make it box
}
