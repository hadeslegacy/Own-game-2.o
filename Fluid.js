class Fluid {
    constructor(x, y,width,height) {
      var options = {
        'isStatic':true
          
          
      }
      //this.image= loadImage("HealthBar.png")
      this.body = Bodies.rectangle(x, y, 150, 70, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CORNER);
      fill('green');
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  