class Polygon
{
	constructor(x,y,w,h)
	{
		var options={
            restitution:0.9,
            friction:1.0,
            density:5.0,
			isStatic:true		
			}
		
		this.width=w;
		this.height=h;
		this.x=x;
        this.y=y;
		this.image = loadImage("polygon.png");
		this.body=Matter.Bodies.rectangle(x,y, 6, 30, options);
 		World.add(world, this.body);

	}
	display()
	{
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
		var groundPos=this.body.position;		

            push();
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
			strokeWeight(6);
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER);
			image(this.image,0,0, this.width, this.height);
			//rect(500, 200, 70, 90);
			pop();
			if(this.body.velocity.x>10 && this.body.position.x>200){
				var position = [this.body.position.x,this.body.position.y];
				this.trajectory.push(position);
				}
			
	}

}