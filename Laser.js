class laser {
    constructor(x, y,width,height) {
      var options = {
        'isStatic':false
          
          
      }
      //this.image= loadImage("HealthBar.png")
      this.body = Bodies.rectangle(x, y, 150, 70, options);
      this.width = width;
      this.height = height;
      this.b=this.width
      
      World.add(world, this.body);
    }

    reset(){
        this.body.position.x=350
        this.body.position.y=300
        this.width=1
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      this.width=this.width+15
      this.b=this.b+12.5
      pos.x=this.b
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('red');
      rect(0, 0, this.width, this.height);
      pop();

    }
  };


  //Displayed=x++something
  //WHen non-displayed, x set back to regular x