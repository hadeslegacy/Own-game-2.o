const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var Eric,Demon;
var ground,ceiling;
var EnergyLevel=78
var HealthLevel=100
var EnergyLevelDemon=200
var HealthLevelDemon=200

var gameOver,gameOverImg

var collision;
// Matter.SAT.collides(laser1.body, Eric.body)
function preload(){
    gameOverImg= loadImage("GameOver.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new health(200,50);
    box2 = new health(1000,50);
    
    box3 = new energy(200,100);
    box4 = new energy(1000,100)

    fluid1= new Fluid(125,39,250,22)
    fluid2= new Fluid(925,39,250,22)
    fluid3= new Fluid(75,89,275,22)
    fluid4= new Fluid(875,89,275,22)


    ground = new Ground(600,height,1200,20)
    ceiling = new Ground(600,0,1200,20)
    wall1 = new Ground(width,300,20,600)
    wall2 = new Ground(0,300,20,600)
    //ground.shapeColor='brown';

    Demon = new PC(300,300,0)
    Eric = new PC(900,300,1)

    laser1 = new laser(350,300,1,50)

    //gameOver= createSprite(600,300,100,100)
    //gameOver.addImage(gameOverImg)
}

function draw(){
    background(0);
    Engine.update(engine);
//Level Movement
    if(EnergyLevel<200){
        EnergyLevel=EnergyLevel+HealthLevel/1000
    }
    if(HealthLevel<200&& HealthLevel>2){
        HealthLevel=EnergyLevel/1000+HealthLevel
    }
    if(EnergyLevelDemon<200&&HealthLevelDemon>2){
        EnergyLevelDemon=EnergyLevelDemon+HealthLevelDemon/1000
    }
    if(HealthLevelDemon<200){
        HealthLevelDemon=EnergyLevelDemon/1000+HealthLevelDemon
    }
//Level Movement

    collision= Matter.SAT.collides(laser1.body, Eric.body)

    if(collision.collided){
        HealthLevel=HealthLevel-10
    }

    reverse= Matter.SAT.collides(Eric.body,Demon.body)

    if(reverse.collided){
        HealthLevelDemon= HealthLevel-(30+EnergyLevel/10)
    }
   

    if(HealthLevel===0|| HealthLevel<0){
        HealthLevel=1

    }
    fluid2.width= HealthLevel*(5/4)
    fluid4.width= EnergyLevel*(5/4)

    fluid1.width= HealthLevelDemon*(5/4)
    fluid3.width= EnergyLevelDemon*(5/4)


   //console.log(EnergyLevel)
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    Eric.display()
    Demon.display()
    laser1.display()

    ground.display();
    ceiling.display();
    wall1.display()
    wall2.display()

    fluid1.display()
    fluid2.display()
    fluid3.display()
    fluid4.display()
    KeyPressed();

    //drawSprite()
}

function KeyPressed(){
    if(keyIsDown(UP_ARROW)){
        Eric.move(Eric.body,{x:0,y:-(3+EnergyLevel/10)})
       if(EnergyLevel>1){
        EnergyLevel=EnergyLevel-0.3
       }
       
        //console.log(Eric.y)
     }
     if(keyIsDown(DOWN_ARROW)){
        Eric.move(Eric.body,{x:0,y:(3+EnergyLevel/10)})
        if(EnergyLevel>1){
            EnergyLevel=EnergyLevel-0.1
           }
           
         //console.log(Eric.y)
     }
     if(keyIsDown(LEFT_ARROW)){
        Eric.move(Eric.body,{x:-(3+EnergyLevel/10),y:0})
        if(EnergyLevel>1){
            EnergyLevel=EnergyLevel-0.05
           }
           
         //onsole.log(Eric.y)
     }
     if(keyIsDown(RIGHT_ARROW)){
        Eric.move(Eric.body,{x:(3+EnergyLevel/10),y:0})
        if(EnergyLevel>1){
            EnergyLevel=EnergyLevel-0.05
           }
           
         //console.log(Eric.y)
     }


     if(keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)){
        Eric.move(Eric.body,{x:-(3+EnergyLevel/10),y:-(3+EnergyLevel/10)})
        if(EnergyLevel>1){
            EnergyLevel=EnergyLevel-0.25
           }
           
         //console.log(Eric.y)
     }
     if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
        Eric.move(Eric.body,{x:(3+EnergyLevel/10),y:-(3+EnergyLevel/10)})
        if(EnergyLevel>1){
            EnergyLevel=EnergyLevel-0.25
           }
           
         //console.log(Eric.y)
     }
     if(keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)){
        Eric.move(Eric.body,{x:-(3+EnergyLevel/10),y:(3+EnergyLevel/10)})
        if(EnergyLevel>1){
            EnergyLevel=EnergyLevel-0.1
           }
           
         //console.log(Eric.y)
     }
     if(keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)){
        Eric.move(Eric.body,{x:(3+EnergyLevel/10),y:(3+EnergyLevel/10)})
        if(EnergyLevel>1){
            EnergyLevel=EnergyLevel-0.1
           }
           
         //console.log(Eric.y)
     }
     
     
        
}

