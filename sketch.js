const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9;
var blc1,blc8,blc3,blc4,blc5,blc6,blc7,blc8;
var s1,s2,s3,s4,s5,s6,s7;
var Poly, Sling;
function preload(){

}
function setup(){
	createCanvas(1500,700);
	engine = Engine.create();
    world = engine.world;
    
    
    base = new Log(900,500,600,10);

    b1 = new Block(630,454,60,80);
    b2= new Block(690,454,60,80);
    b3= new Block(750,454,60,80);
    b4= new Block(810,454,60,80);
    b5= new Block(870,454,60,80);
    b6= new Block(930,454,60,80);
    b7= new Block(990,454,60,80);
    b8= new Block(1050,454,60,80);
    b9= new Block(1110,454,60,80);
    b10= new Block(1170,454,60,80);

    bl1= new BlockLv2(663,374,60,80);
    bl2= new BlockLv2(723,374,60,80);
    bl3= new BlockLv2(783,374,60,80);
    bl4= new BlockLv2(843,374,60,80);
    bl5= new BlockLv2(903,374,60,80);
    bl6= new BlockLv2(963,374,60,80);
    bl7= new BlockLv2(1023,374,60,80);
    bl8= new BlockLv2(1083,374,60,80);
    bl9= new BlockLv2(1143,374,60,80);

    blc1= new BlockLv3(753,294,60,80);
    blc2= new BlockLv3(813,294,60,80);
    blc3= new BlockLv3(873,294,60,80);
    blc4= new BlockLv3(933,294,60,80);
    blc5= new BlockLv3(993,294,60,80);
    blc6= new BlockLv3(1053,294,60,80);
    blc7= new BlockLv3(1113,294,60,80);
    blc8= new BlockLv3(693,294,60,80);

    s1= new BlockLv4(1083,214,60,80);
    s2= new BlockLv4(723,214,60,80);
    s3= new BlockLv4(783,214,60,80);
    s4= new BlockLv4(843,214,60,80);
    s5= new BlockLv4(903,214,60,80);
    s6= new BlockLv4(963,214,60,80);
    s7= new BlockLv4(1023,214,60,80);

    Poly = new Polygon(100,140,70,70);
    Sling = new SlingShot(Poly.body, {x:100, y:140});

    //Poly = Bodies.circle(50,200,20);
    //World.add(world, Poly);
    
	//Engine.run(engine);
}
function draw(){
    background(0);
    Engine.update(engine);

   base.display();
   b1.display();
   b2.display();
   b3.display();
   b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();

    bl1.display();
    bl2.display();
    bl3.display();
    bl4.display();
    bl5.display();
    bl6.display();
    bl7.display();
    bl8.display();
    bl9.display();

    blc1.display();
    blc2.display();
    blc3.display();
    blc4.display();
    blc5.display();
    blc6.display();
    blc7.display();
    blc8.display();

    s1.display();
    s2.display();
    s3.display();
    s4.display();
    s5.display();
    s6.display();
    s7.display();

    Poly.display();    
    Sling.display();

    drawSprites();
}

function mouseDragged(){
    //if(gamestate!=="launched"){
    Matter.Body.setPosition(Poly.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    
    Sling.fly();
    //gamestate="launched";
}

function keyPressed(){
    if(keyCode === 32){
        Sling.attach(Poly.body);
    }
}
