function setup()
{
	createCanvas(800,600)
	noFill();
	stroke(255,0,0);
}

function draw()
{
	background(0);
	ellipse(400,300,mouseX,mouseY);
}