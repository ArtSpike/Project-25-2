
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperSprite;
var paperBody,ground
var Box1, Box1Body;
var Box2, Box2Body;
var Box3, Box3Body;
var paperIMG;
var binIMG;
var Box3image


function preload()
{
	paperIMG=loadImage("paper.png");
	binIMG=loadImage("bin.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paperSprite=createSprite(width/2, 80, 10,10);
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	//Box1=createSprite(width/2-100, height-100,30,120);
	//Box2=createSprite(width/2+100,height-100,30,120);
	//Box3=createSprite(width/2,height-55,200,30)
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
	World.add(world, ground);

	paperBody = Bodies.circle(100 , 600 , 30 , {restitution:0.4, isStatic:false, fricton: 0.5,density: 1.2});
	World.add(world, paperBody);
	//paperBody.addImage(paperIMG);
	Box1Body=Bodies.rectangle(width/2, height-100,30,120,{restitution:0.1,isStatic:true});
	Box2Body=Bodies.rectangle(width/2+200,height-100,30,120,{restitution:0.1,isStatic:true});
	Box3Body=Bodies.rectangle(width/2,height-55,200,30,{restitution:0.1,isStatic:true});
	//Box3image=createSprite(width/2,height-205,200,30);
	//Box3image.addImage(binIMG);
	World.add(world,Box1Body);
	World.add(world,Box2Body);
	World.add(world,Box3Body);

	
	 Engine.run(engine);
  
}


function draw() {
  
  background("yellow");
  //paperSprite.x= paperBody.position.x 
  //paperSprite.y= paperBody.position.y 

  rectMode(CENTER);

  fill("brown");
  rect(ground.position.x, ground.position.y,width,20);
  imageMode(RADIUS);
  ellipseMode(RADIUS);
  image(paperIMG,paperBody.position.x,paperBody.position.y,30,30);


  fill("red")
  rect(Box1Body.position.x, Box1Body.position.y,30,120);
  rect(Box2Body.position.x, Box2Body.position.y,30,120);
  image(binIMG,Box3Body.position.x, Box3Body.position.y-160,200,175);



  //fill("purple");
  

  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		//Matter.Body.setStatic(paperBody, false);
		Matter.Body.applyForce(paperBody,paperBody.position,{x:100,y:300});

		console.log(paperBody.position);

	}
}



