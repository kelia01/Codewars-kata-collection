class Ball {
    ballType;
    constructor(ballType = 'regular'){
      this.ballType = ballType;
    }
  }
  
  var ball1 = new Ball();
  var ball2 = new Ball('super');

