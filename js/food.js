class Food{
    constructor(){
     this.foodco = 0
     this.image = loadImage("images/milk.png");
    }
    updatefood(){
     foodref = database.ref('/').update({
         food:this.foodco
     })
    }
    adding(){
      for(var i=0;i<=width-200;i=i+50){
        var y = 200;
        image(this.image,i,y,50,50);
        if(i=300){
          y=200+10;
        }
      }
      var fe  = createButton("ADD FOOD");
      fe.position(600,95);
      fe.mousePressed(adding);
    }
    addfood(){

        
    }

    /*display(){
        if(this.foodco!=0){
            for(var i=0;i<this.foodco;i++){
              if(i%10==0){
                x=80;
                y=y+50;
              }
              image(this.image,x,y,50,50);
              x=x+30;
            }
    }
}*/
}