var quadrados = document.querySelectorAll(".square");
var escolheQuadrado;

function randomInteger(n){
	return Math.floor(Math.random()*n);
}

for (var i =0; i<=5;i++){
	var red,blue,green;
	red = randomInteger(256);
	blue = randomInteger(256);
	green = randomInteger(256);
	quadrados[i].style.backgroundColor = "rgb("+red+","+blue+","+green+")";
}

escolheQuadrado = randomInteger(6);


document.getElementById("corSeleta").innerHTML =document.getElementsByClassName("square")[escolheQuadrado].style.backgroundColor;

for (var i =0; i<quadrados.length;i++){
	quadrados[i].addEventListener("click",function(){
	if(this.style.backgroundColor == corSeleta.innerHTML){
		console.log("acertou")
	}else{console.log("Errou")}
	
})	
}