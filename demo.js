//import {Deslizador} from "sss.py";
var dv = document.getElementsByTagName("div");
var tgp = document.getElementsByTagName("p"); var title = document.getElementsByTagName("title");
var imgs = ["source/src1.jpg","source/src2.jpg","source/src3.jpg","source/src4.jpg","source/src5.jpg"];
var pos = 0;
var num = 0;
/* function move()
{
dv[0].style.height = 95 + "px";
	pos++;
	if (pos >= 1050) { pos = 1050; }
	dv[0].style.width = pos + "px";
	tgp[0].innerHTML = `${title[0].innerHTML} ${pos}`;
if (pos % 2 != 0) { 
	dv[0].style.background = "#fa0";
}
else {
dv[0].style.background = "#0af";
}
} */
function imganimation()
{
	var box = document.getElementById("imgbox");
	pos++;
	box.style.left = pos + "px";
	if (pos % 2 != 0)
	{
		box.src = imgs[num];
		num++;
		if (num >= 4)
		{num=0;}
	}
}
function load()
{
	
}
/*
function python() {
let fajardo = new py.Deslizador(document);
fajardo.imgtion();
} */