var quadrados = document.querySelectorAll(".square");

function randomInteger(n){
	return Math.floor(Math.random()*n);
}

for (var i =0; i<=6;i++){
	var red,blue,green;
	red = randomInteger(256);
	blue = randomInteger(256);
	green = randomInteger(256);
	quadrados[i].style.backgroundColor = "rgb("+red+","+blue+","+green+")";
}
