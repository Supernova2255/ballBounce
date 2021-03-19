var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

box1 = createSprite(700, 580, 180, 20)

box2 = createSprite(500, 580, 180, 20)

box3 = createSprite(300, 580, 180, 20)

box4 = createSprite(100, 580, 180, 20)

box1.shapeColor = "red"

box2.shapeColor = "blue"

box3.shapeColor = "green"

box4.shapeColor = "purple"

ball = createSprite(random(20, 750), 100, 20, 20)

ball.shapeColor = "white"

ball.velocityY = 5
ball.velocityX = 5
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();

ball.bounceOff(edges)

if(ball.isTouching(box1)) {

    ball.shapeColor = "red"
    ball.bounceOff(box1)

}

if(ball.isTouching(box2)) {

    ball.shapeColor = "blue"
    ball.bounceOff(box2)

}

if(ball.isTouching(box3)) {

    ball.shapeColor = "green"
    ball.bounceOff(box3)

}

if(ball.isTouching(box4)) {

    ball.shapeColor = "purple"
    ball.bounceOff(box4)

}

drawSprites();
}

