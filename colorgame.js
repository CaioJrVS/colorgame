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
		document.getElementById("layout").style.backgroundColor= document.getElementById("corSeleta").innerHTML;
		document.getElementById("acertaOuErra").innerHTML ="Acertou";
		for(var x=0;x<quadrados.length;x++){
			quadrados[x].style.backgroundColor= document.getElementById("corSeleta").innerHTML;
		}
	}else{document.getElementById("acertaOuErra").innerHTML ="Errou";}
})	
}