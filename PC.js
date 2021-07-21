class PC {
    constructor(x, y,z) {
      var options = {
        'isStatic':false
          
          
      }
      this.image= loadImage("Demon.png")
      this.image2= loadImage("Eric.png")
      this.body = Bodies.rectangle(x, y, 150, 70, options);
      this.width = 120;
      this.height = 300;
      this.command=z
      
      World.add(world, this.body);
    }

    move(a,b){
        Matter.Body.setVelocity(a,b)
        
    }



    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      
      if(this.command===0){
      image(this.image,0, -115, this.width, this.height);
      } else if(this.command===1){
        image(this.image2,0, -115, this.width, this.height); 
      }
      
      pop();
    }
  };