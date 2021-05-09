class Block{
  constructor(x, y, width, height) {
    this.visibility = 255;
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
    
      var pos= this.body.position;  
if(this.body.speed<3)
{
  rectMode(CENTER);
  rect(pos.x,pos.y,this.width, this.height);
} else{
  tint(255 ,this.visibility);
  this.visibility = this.visibility-5;
  image(this.image ,pos.x-15 ,pos.y-20 ,30 ,40)
  World.remove(world ,this.body);
}
}
}