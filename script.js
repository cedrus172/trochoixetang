document.onkeydown = checkKey;


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        document.getElementById("tank").style["top"] = parseInt(tank.style["top"], 10 ) - 19 + "px";
    }
    else if (e.keyCode == '40') {
        document.getElementById("tank").style["top"] = parseInt(tank.style["top"], 10 ) + 19 + "px";
    }
    else if (e.keyCode == '37') {
        document.getElementById("tank").style["left"] = parseInt(tank.style["left"], 10 ) - 19 + "px";
    }
    else if (e.keyCode == '39') {
        document.getElementById("tank").style["left"] =  parseInt(tank.style["left"], 10 ) + 19 + "px";
    }
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