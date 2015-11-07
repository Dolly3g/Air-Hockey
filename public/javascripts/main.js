var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;
var $_ball;
var  $_board;
var onRight = function(){
    console.log("heyy");
}
var ball={x:0,y:0}
ball.move =function(){
    this.leftOrRight()
    this.upOrDown()

}
var Strinker = function(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width =width;
    this.height = height;

}

var getBottom =function(striker){
    striker.y + striker.height;
}
strikerleft=new Strinker(0,0,30,50);
strikerright=new Strinker(0,0,30,50);

var board={x:0,y:0,x1:1000,y1:500}
var events = {
    //LEFT: onLeft(),
    //UP: onUp(),
    RIGHT: onRight()
    //DOWN: onDown(),
}

var initGame =function(){
    ball.x = + $_ball.css('x').replace('px','');
    ball.y = + $_ball.css('y').replace('px','');
    strikerleft = +$_sLeft.css('x').replace('px','');
    strikerright = +$_sRight.css('x').replace('px','');
    console.log( ball.x , ball.y);
}

var onPageLoad = function(){
    $_ball =$('.ball');
    $_board =$('.board');
    $_sLeft =$('.striker_left');
    $_sRight =$('.striker_right');
    var socket = io.connect(window.location.hostname);

    //$(document).keydown(function(e){
    //
    //    console.log(e);
    //    events[e]();
    //})
    initGame();
    socket.on('start',function(){

        console.log("game started")

       setTimeout(startGame,2000);
    })



};

$(onPageLoad);


var startGame =function(){


       if(ball.x == board.x || ball.x == strikerleft.x){
           console.log('colides')
          ball.leftOrRight =right;
       }
        if(ball.x == board.x1 || ball.x == strikerright.x){
            console.log('colides')
            ball.leftOrRight =left;
        }
        if(ball.y == board.y1 || ball.y==strikerleft.y||ball.y==strikerright.y){
            console.log('colides')
            ball.upOrDown =up;
        }
        if(ball.y == board.y||ball.y==getBottom(strikerleft)||ball.y==getBottom(strikerright)){
            console.log('colides')
            ball.upOrDown =down;
        }

        ball.move();
        updateBoard()
    setTimeout(startGame,150);
}
var updateBoard =function(){
    console.log(ball.x,ball.y);
    $_ball.css('x',ball.x);
    $_ball.css('y',ball.y);
}

var up= function(){
    ball.y--;

}
var down=function(){
    ball.y++;

}

var left = function(){
    ball.x--;
}

var right = function(){
    ball.x++;
}

ball.leftOrRight= left;
ball.upOrDown =up;