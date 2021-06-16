let prevData=""
var data=[
    "Never take salami from a stranger",
    "Don't sniff the butt of a dog you don't know",
    "You are important. Make sure to treat yourself with a nice bone every once in a while",
    "Never question who the good boi is. It is always you",
    "If you don't recognize a bone then don't lick it",
    "When times get tuff, just keep going \"ruff.\"",
    "If you feel like that poodle is staring at you like it's going to kill you, it is going to kill you. Poodles are monsters",
    "Dogs are Pog",
    "Only chew the slippers of those you hate",
    "If your ball is too big for your mouth, it's not yours"


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
    let wisdum=randomWisdom();
    if (wisdum==prevData){
        while(wisdum==prevData){
            wisdum=randomWisdom();
        }
    }
    prevData=wisdum;
    let soFar="";
    for(var i=0;i<wisdum.length;i++){
        soFar=soFar+(wisdum[i])
        document.getElementById("wisdomText").innerHTML=soFar;
        sleep(2)
    }
}

random_bg_color();
document.addEventListener("click",setText);