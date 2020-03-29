class vec{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
    plus(){
      return (this.x + this.y);
    }
    minus(){
      return (this.x - this.y);
    }
  }
  var myObject  = new vec(12,13);
  console.log(myObject.plus());
  console.log(myObject.minus());
  