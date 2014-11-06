// TODO
game.PlayerEntity = me.Entity.extend({
   init: function(x, y, settings){
//       settings.image = "mario";
//       settings.spritewidth = "128";
//       settings.spriteheight = "128";
//       settings.width = 128;
//       settings.height = 128;
       
//       this._super(me.Entity, 'init', [x, y, settings]);
       
       this._super(me.Entity, 'init', [x, y, {
              image: "mario",
              width: 128,
              height: 128,
              spritewidth: 128,
              spriteheight: 128,
              getShape: function(){
                return (new me.Rect(x, y, 128, 128)).toPolygon();
                }
       }]);
  
       me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
       
       this.alwaysUpdate = true;
       
       this.body.setVelocity(5, 0); //**
       
   },
    
   update: function(dt){
      
       if(me.input.isKeyPressed("right")){
           this.body.vel.x += this.body.accel.x * me.timer.tick;
       }
       else{
           this.body.vel.x = 0;
       }
       
       return this._super(me.Entity, "update", [dt]);
  
       
   } 
    
}); 