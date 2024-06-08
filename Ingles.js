pedirAlServidor();

function pedirAlServidor(){
    let xhttp1;


    xhttp1 = new XMLHttpRequest();
    xhttp1.onload = function(){
            mostrarInformacion(this);
    }
    xhttp1.open("GET", "Ingles.xml")
    xhttp1.send();

}
function mostrarInformacion(xml){
    let xmlDoc, table, name, i, age, quantity, numeroAnimales, description;

    xmlDoc = xml.responseXML;
    table = "<table>";
    table += "<tr><th> Name </th><th> Age </th><th> Quantity </th><th> Description </th></tr>";
    numeroAnimales = xmlDoc.getElementsByTagName("animal1").length;

    for (i=0; i< numeroAnimales; i++){

        name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        age = xmlDoc.getElementsByTagName("age")[i].childNodes[0].nodeValue;  
        quantity = xmlDoc.getElementsByTagName("quantity")[i].childNodes[0].nodeValue;
        description = xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue;

        table += "<tr><td>" + name  + "</td><td>" + age + "</td><td>" + quantity + "</td><td>" + description + "</td></tr>";
    }

    table += "</table>";

    document.getElementById("tabla-Animales").innerHTML = table;
}