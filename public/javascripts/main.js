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
    console.log( ball.x , ball.y);
}

var onPageLoad = function(){
    $_ball =$('.ball');
    $_board =$('.board');
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


       if(ball.x == board.x){
           console.log('colides')
          ball.leftOrRight =right;
       }
        if(ball.x == board.x1){
            console.log('colides')
            ball.leftOrRight =left;
        }
        if(ball.y == board.y1){
            console.log('colides')
            ball.upOrDown =up;
        }
        if(ball.y == board.y){
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

ball.leftOrRight= right;
ball.upOrDown =up;