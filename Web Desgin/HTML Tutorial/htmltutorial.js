function init()
{
	var h1Tags = document.getElementsByTagName("h1");
	h1Tags[0].onclick = changeColor;
}
function changeColor()
{
	this.innerHTML = "Click Again";
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
	this.style.color = randomcolor;
}
onload = init; 