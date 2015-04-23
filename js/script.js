document.addEventListener("DOMContentLoaded", function (event) {
    document.body.style.backgroundColor = '#f5f8fa';
    var twitter = document.getElementById("twitter");

    //HEADER
    var header = document.createElement("header");
    twitter.appendChild(header);
    document.getElementById("twitter").appendChild(header);
    header.style.height = '250px';
    header.style.width = '100%';
    header.style.backgroundColor = '#3b94d9';

    var section = document.createElement("section");
    twitter.appendChild(section);
    document.getElementById("twitter").appendChild(section);

    var barra = document.createElement("barra");
    header.appendChild(barra);
    //document.getElementById("header").appendChild(barra);
    barra.style.height = '50px';
    barra.style.widtht = '100%';
    barra.style.backgroundColor = '#000';

    var bloq = document.createElement("div");
    header.appendChild(bloq);
    var img = document.createElement("img");
    bloq.appendChild(img);
    img.setAttribute("src", "../images/mi_foto.png");
    //var bloq = document.getElementById("div");
    bloq.appendChild(img);

    var contenedor = document.createElement("div");
    section.appendChild(contenedor);
    var linea = document.createElement("row");
    contenedor.appendChild(linea);

});


//Crear Un Evento Click En El Botón:
//
//var element = document.getElementById("test");
//element.addEventListener("click", listenerClick);
//
//function listenerClick() {
//    console.log("click");
//
//}
//
////Aplicando Estilo Directamente Desde JS
//
//element.style.color = 'red';
//element.style.background = 'blue';
//element.style.height = '300px';
//element.style.width = '300px';
//element.style.fontSize = '60px';