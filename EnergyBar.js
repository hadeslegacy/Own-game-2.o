class energy {
    constructor(x, y) {
      var options = {
        'isStatic':true
          
          
      }
      this.image= loadImage("EnergyBar.jpeg")
      this.body = Bodies.rectangle(x, y, 150, 70, options);
      this.width = 380;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  