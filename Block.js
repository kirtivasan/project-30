class Block
{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.8,
            friction:1.0,
            density:8.0,
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

            push();
            fill(179, 229, 252);
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
            strokeWeight(6);
			
			rect(0,0,this.w, this.h);
			pop();
			
	}

}