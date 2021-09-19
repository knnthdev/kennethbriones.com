
var footer = document.getElementsByTagName("footer");
var pos = 0;
var num = 0;

function imganimation() {
	var box = document.getElementById("imgbox");
	pos++;
	box.style.left = pos + "px";
	if (pos % 2 != 0) {
		box.src = imgs[num];
		num++;
		if (num >= 4) { num = 0; }
	}
}
function Main() {
}

function footer() {
	let Html = document.getElementById("Dad");
	let pies = footer[0];

}

function OrdenarTexto() {
	let title = document.getElementById("titulo");
	let parf = document.getElementById("parrafo");
	Loadtxt(parf, 'MyWiki.txt');
	title.innerText = "¿Hola Que tal?";
}
function Loadtxt(element, file) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200)
		element.innerText = this.response;
	};
	xhttp.open("GET", `static/txt/${file}`);
	xhttp.send();
}
/*
function python() {
let fajardo = new py.Deslizador(document);
fajardo.imgtion();
} */