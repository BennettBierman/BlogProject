alert("THIS IS THE SECOND ALERT")

function runGame(canvas){
    ctx = canvas.getContext("2d");
    // timer
    setInterval(update, 1); 
}

function update(){
    ctx.fillRect(100,100,100,100);
    console.log("this is here");
}

class spirte{
    constructor(x,y,w,h,dx,dy){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
    }

    
}