var _ = require('lodash');

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");
var cssTextArea = document.getElementById("cssTextArea");


function changeBackground() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
	cssTextArea.style.background =
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	color1.style.background = color1.value;
	color2.style.background = color2.value;


}

function generateRandomGradient() {
	var randomHex1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var randomHex2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	color1.value = randomHex1;
	color2.value = randomHex2;
	changeBackground()
}


changeBackground();

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

randomButton.addEventListener("click", generateRandomGradient);


