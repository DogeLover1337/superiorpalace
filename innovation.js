function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function goHome() {
	window.location="index.html";
}

window.onload = function()
{
	if(window.addEventListener)
		document.addEventListener('DOMMouseScroll', moveObject, false);
	document.onmousewheel = moveObject;
}
function moveObject(event)
{
	var delta = 0;

	if (!event) event = window.event;
	if (event.wheelDelta) {

		delta = event.wheelDelta / 60;

	} else if (event.detail) {
		delta = -event.detail / 2;
	}

	var currPos=document.getElementById('scroll').offsetTop;
	currPos=parseInt(currPos)-(delta*-10);
	if(currPos < -28){
		currPos = -27;
	}
	if(currPos > 1){
		currPos = 0;
	}
	document.getElementById('scroll').style.top = currPos+"px";
	console.log(currPos);

}