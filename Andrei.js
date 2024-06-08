function calculaSuma() {
    const adultoTicketc = 20;
    const niñoTicketsprecio = 10;

    const adultoTickets = parseInt(document.getElementById('adultoTickets').value);
    const niñoTickets = parseInt(document.getElementById('niñoTickets').value);

    const sumaprecio = (adultoTickets * adultoTicketc) + (niñoTickets * niñoTicketsprecio);

    document.getElementById('sumaprecio').innerText = `Total: $${sumaprecio}`;
}

let i, jsonhttp;

i = 0   ;

function cargarJSON() {

    jsonhttp = new XMLHttpRequest();
    jsonhttp.onload = function() {
        mostrarJSON(this);
    };
    jsonhttp.open("GET", "Andrei.json");
    jsonhttp.send();
}

cargarJSON()

function cambiarDer(){
    if (i < 4){
        i += 1
        mostrarJSON(jsonhttp)
    }
    else{
        i = 0
        mostrarJSON(jsonhttp)
    }
}

function cambiarIz(){
    if (i < 0){
        i = 4
        mostrarJSON(jsonhttp)
    }
    else{
        i -= 1
        mostrarJSON(jsonhttp)
    }
}

function mostrarJSON(jsonhttp) {
    let jsObject, htmlCode, animalObject;
    
    htmlCode = ""

    jsObject = JSON.parse(jsonhttp.responseText);

    animalObject = jsObject.animales[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'

    animalObject = jsObject.animales1[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'

    animalObject = jsObject.animales2[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'

    animalObject = jsObject.animales3[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'


 
    document.getElementById("tarjAnimales").innerHTML = htmlCode;
}
function mostrarJSON(jsonhttp) {
    let jsObject, htmlCode, animalObject1;
    
    htmlCode = ""

    jsObject = JSON.parse(jsonhttp.responseText);

    animalObject1 = jsObject.animals[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject1["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject1["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'

    animalObject1 = jsObject.animals1[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject1["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject1["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'

    animalObject1 = jsObject.animals2[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject1["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject1["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'

    animalObject1 = jsObject.animals3[i];
    htmlCode += '<div class="tarjetas-Animales">'
    htmlCode += '<h2 id="nombre">' + animalObject1["nombre"] + '</h2>';
    htmlCode += '<img id="url-animal" alt="nada" src="' + animalObject1["url"] + '">';
    htmlCode += '</div class="tarjetas-Animales">'


 
    document.getElementById("tarjAnimales").innerHTML = htmlCode;
}
pedirAlServidor();

function pedirAlServidor(){
    let xhttp;


    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
            mostrarInformacion(this);
    }
    xhttp.open("GET", "Andrei.xml")
    xhttp.send();

}

function mostrarInformacion(xml){
    let xmlDoc, table, nombre, i, edad, cantidad, descripcion, numeroAnimales;

    xmlDoc = xml.responseXML;
    table = "<table>";
    table += "<tr><th> Nombre </th><th> Edad </th><th> Cantidad </th><th> Descripción </th></tr>";
    numeroAnimales = xmlDoc.getElementsByTagName("animal").length;

    for (i=0; i< numeroAnimales; i++){

        nombre = xmlDoc.getElementsByTagName("nombre")[i].childNodes[0].nodeValue;
        edad = xmlDoc.getElementsByTagName("edad")[i].childNodes[0].nodeValue;  
        cantidad = xmlDoc.getElementsByTagName("cantidad")[i].childNodes[0].nodeValue;
        descripcion = xmlDoc.getElementsByTagName("descripcion")[i].childNodes[0].nodeValue;

        table += "<tr><td>" + nombre  + "</td><td>" + edad + "</td><td>" + cantidad + "</td><td>" + descripcion + "</td></tr>";
    }

    table += "</table>";

    document.getElementById("tabla-Animales").innerHTML = table;
}