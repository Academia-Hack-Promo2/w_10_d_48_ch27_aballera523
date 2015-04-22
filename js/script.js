//Crear Un Evento Click En El Botón:

var element = document.getElementById("test");
element.addEventListener("click", listenerClick);

function listenerClick() {
    console.log("click");
    
}

//Aplicando Estilo Directamente Desde JS

element.style.color = 'red';
element.style.background = 'blue';
element.style.height = '300px';
element.style.width = '300px';
element.style.fontSize = '60px';
