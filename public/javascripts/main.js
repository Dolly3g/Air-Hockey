var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

var onRight = function(){
    console.log("heyy");
}

var events = {
    //LEFT: onLeft(),
    //UP: onUp(),
    RIGHT: onRight()
    //DOWN: onDown(),
}

var onPageLoad = function(){
    var socket = io.connect(window.location.hostname);

    $(document).keydown(function(e){

        console.log(e);
        events[e]();
    })




};

$(onPageLoad);