
var data=[
    "Never take salami from a stranger",
    "Don't sniff the butt of a dog you don't know",
    "You are important. Make sure to treat yourself with a nice bone every once in a while",
    "Never question who the good boi is. It is always you"
]
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
        break;
        }
    }
    }
function random_bg_color() {
    var originalR = Math.floor(Math.random() * 256);
    var originalG = Math.floor(Math.random() * 256);
    var originalB = Math.floor(Math.random() * 256);
    var red=originalR+(255-originalR)*5/8
    var green=originalG+(255-originalG)*5/8
    var blue=originalB+(255-originalB)*5/8
    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = bgColor;
    
    }

function randomWisdom(){
    
    return data[Math.floor(Math.random()*data.length)]
}

function setText(){
    var wisdum=randomWisdom();


    document.getElementById("wisdomText").innerHTML=wisdum;

}

random_bg_color();