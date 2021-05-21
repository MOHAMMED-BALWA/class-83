

var lpox,lpoy;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
wol = 1;
var width = screen.width ;
nw = screen.width - 70;
nh = screen.height - 300;

if(width < 992 )
{
    document.getElementById("myCanvas").width = nw;
    document.getElementById("myCanvas").height = nh;
    document.body.style.overflow = "hidden";

}



canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e)
{
    color = document.getElementById("color").value;
    wol = document.getElementById("wol").value;

    lpox = e.touches[0].clientX - canvas.offsetLeft;
    lpoy = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e)
{
    cpotx = e.touches[0].clientX - canvas.offsetLeft;
    cpoty = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = wol;

        console.log("lpox and y coordinates = ");
        console.log("x = " + lpox + "y = " + lpoy)
        ctx.moveTo(lpox,lpoy);

        console.log("cpotx and y coordinates = ");
        console.log("x = " + cpotx + "y = " + cpoty)
        ctx.lineTo(cpotx,cpoty);

        ctx.stroke();
    

    lpox = cpotx;
    lpoy = cpoty;

}




function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
