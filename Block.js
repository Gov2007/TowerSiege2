class Block{
    constructor(x, y, width, height) {

           var options = {
          'restitution':0.4
          //'friction':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
       /* var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("green");
        rotate(angle);
        rect(0,0,this.width, this.height);
        pop();*/
        
        console.log(this.body.speed);
        
        
        if(this.body.speed < 6){   
         var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("green");
        rotate(angle);
        rect(0,0,this.width, this.height);
        pop();
        }
         else{  
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           pop();
         }
        }
    
     }     
      
