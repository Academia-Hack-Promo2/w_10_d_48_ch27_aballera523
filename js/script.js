document.addEventListener("DOMContentLoaded", function (event) {
	'use strict';
	document.body.style.backgroundColor = '#f5f8fa';
	var twitter = document.getElementById("twitter");
	var header = document.createElement("header");
	document.getElementById("twitter").appendChild(header);
	twitter.appendChild(header);
	header.style.width = '100%';
	header.style.height = '250px';
	header.style.backgroundColor = '#3b94d9';

	var arry = ["EmGoldex noticias RSS http://gr8.com/r/GDXoV/E/S2vP ", "RevisarAlexander Ballera in the Maraton CAF 2015 (PRELIMINARES)Resultados http://fw.to/sgNgvNg ", "EmGoldex noticias RSS http://gr8.com/r/GDXoV/E/S2vP ", "Nick Vujicic - See the body / Hear the heart (Subtítulos en español) - YouTube http://buff.ly/1EyVyPf ", "The first ever jQuery Conference India is July 22-25 in Bangalore. The CFP is open but ends soon so submit ASAP! http://jqueryconf.in/", "#w3ccommunity Call for Participation in Automotive Ontology Community Group http://dlvr.it/9k5lRq", "Ya arranca el programa para platicar de Scala lang con @noe_dgz por http://mixlr.com/desveloperstv/"];

	function mostrarTexto() {
		var section = document.createElement("section");
		twitter.appendChild(section);
		document.getElementById("twitter").appendChild(section);

		var bloq = document.createElement("div");
		header.appendChild(bloq);
		bloq.style.height = '80px';
		bloq.style.width = '80px';

		var img = document.createElement("img");
		bloq.appendChild(img);
		img.setAttribute("src", "../images/mi_foto.png");
		img.style.marginTop = '80px';
		img.style.marginLeft = '80px';
		img.style.height = '250%';
		img.style.width = '200%';
		img.style.border = '5px';
		img.style.borderStyle = 'solid';
		img.style.borderColor = 'white';

		var contenedor = document.createElement("div");
		section.appendChild(contenedor);

		var linea = document.createElement("row");
		contenedor.appendChild(linea);
		linea.id = 'tweets'
		linea.style.width = '550px';
		linea.style.height = '400px';
		linea.style.left = '450px';
		linea.style.position = 'absolute';
		linea.style.border = '2px';
		linea.style.borderStyle = 'solid';
		linea.style.borderColor = 'grey';
		linea.style.backgroundColor = "white";

		var text = "";
		var d = new Date();
		var dia = d.getDate();
		var m = d.getMonth();
		switch (m) {
		case 0:
			m = "Ene";
			break;
		case 1:
			m = "Feb";
			break;
		case 2:
			m = "Mar";
			break;
		case 3:
			m = "Abr";
			break;
		case 4:
			m = "May";
			break;
		case 5:
			m = "Jun";
			break;
		case 6:
			m = "Jul";
			break;
		case 7:
			m = "Ago";
			break;
		case 8:
			m = "Sep";
			break;
		case 9:
			m = "Oct";
			break;
		case 10:
			m = "Nov";
			break;
		case 11:
			m = "Dic";
			break;
		}

		for (var i in arry) {
			text += "<strong>" + "Alex Ballera" + "</strong>" + " @AlexBallera " + m + " " + dia + "<br>" + arry[i] + "<br>";
			document.getElementById("tweets").innerHTML = '' + text;
		}

		var tweet = document.createElement("input");
		header.appendChild(tweet);
		tweet.style.height = '30px';
		tweet.style.width = '450px';
		tweet.style.marginLeft = '450px';
		tweet.placeholder = "Compose new tweet";
		tweet.id = "input2";
		tweet.type = "text";
		tweet.value;

		var btn = document.createElement("input");
		header.appendChild(btn);
		btn.type = "button";
		btn.value = "Tweet";
		btn.style.backgroundColor = 'grey';
		btn.style.color = 'white';
		btn.style.height = '30px';
		btn.style.width = '100px';
		btn.style.position = 'absolute';
		btn.style.top = '80px';
		btn.style.left = '900px';
		btn.onclick = ingreseTexto;		
		return mostrarTexto

	};
	
	function ingreseTexto() {
		var tuit = document.getElementsByTagName('input')[0].value;
		arry.unshift(tuit);
		arry.pop();
		var text = "";
		var d = new Date();
		var dia = d.getDate();
		var m = d.getMonth();
		switch (m) {
		case 0:
			m = "Ene";
			break;
		case 1:
			m = "Feb";
			break;
		case 2:
			m = "Mar";
			break;
		case 3:
			m = "Abr";
			break;
		case 4:
			m = "May";
			break;
		case 5:
			m = "Jun";
			break;
		case 6:
			m = "Jul";
			break;
		case 7:
			m = "Ago";
			break;
		case 8:
			m = "Sep";
			break;
		case 9:
			m = "Oct";
			break;
		case 10:
			m = "Nov";
			break;
		case 11:
			m = "Dic";
			break;
		}

		for (var i in arry) {
			text += "<strong>" + "Alex Ballera" + "</strong>" + " @AlexBallera " + m + " " + dia + "<br>" + arry[i] + "<br>";
			document.getElementById("tweets").innerHTML = '' + text;
		}
		alert("Su tweet: "+"'"+tuit+"'"+" ha sido publicado");
		return ingreseTexto
	};
	mostrarTexto();
});