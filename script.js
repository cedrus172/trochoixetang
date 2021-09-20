document.onkeydown = checkKey;


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        moveUp();
    }
    else if (e.keyCode == '40') {
        moveDown();
    }
    else if (e.keyCode == '37') {
        moveLeft();
    }
    else if (e.keyCode == '39') {
        moveRight();
    }   
}

function moveUp()
{
    document.getElementById("tank").style["top"] = parseInt(tank.style["top"], 10 ) - 19 + "px";
    checkPosition();
}
function moveDown()
{
    document.getElementById("tank").style["top"] = parseInt(tank.style["top"], 10 ) + 19 + "px";
    checkPosition();
}
function moveLeft()
{
    document.getElementById("tank").style["left"] = parseInt(tank.style["left"], 10 ) - 19 + "px";
    checkPosition();
}
function moveRight()
{
    document.getElementById("tank").style["left"] =  parseInt(tank.style["left"], 10 ) + 19 + "px";
    checkPosition();
}

function checkPosition()
{
    if(parseInt(document.getElementById("tank").style["top"], 10) < 0 || parseInt(document.getElementById("tank").style["top"], 10) > 171)
    {
        alert("Bạn đã thua cuộc");
        document.getElementById("tank").style["left"] = "0px";
        document.getElementById("tank").style["top"] = "0px";
    }
    else if(parseInt(document.getElementById("tank").style["left"], 10) < 0 || parseInt(document.getElementById("tank").style["left"], 10) > 171)
    {
        alert("Bạn đã thua cuộc");
        document.getElementById("tank").style["left"] = "0px";
        document.getElementById("tank").style["top"] = "0px";
    }
}