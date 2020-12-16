var cont = 0;

window.onload = function() {
    setInterval(loadDoc, 5000);
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
       //Que hago cuando llega la respuesta
       
       datos = JSON.parse(this.responseText);

       //Maquetacion
       let tabla = document.getElementById("tabla");
       
       for (i=cont; i<datos.listaCorreos[0].correos.length; i++){
           console.log(datos.listaCorreos[0].correos[i].remitente);
           let tr = document.createElement("tr");
           let tdRemitente = document.createElement("td");
           let tdAsunto = document.createElement("td");
           let remitente = document.createTextNode("From: "+datos.listaCorreos[0].correos[i].remitente);
           let asunto = document.createTextNode("Subject: "+datos.listaCorreos[0].correos[i].asunto);

           tdRemitente.appendChild(remitente);
           tdAsunto.appendChild(asunto);
           tdRemitente.setAttribute("id", "remitente");
           tr.appendChild(tdRemitente);
           tr.appendChild(tdAsunto);
           tabla.appendChild(tr);

           cont++;
       }

      }
    };
    xhttp.open("GET", "JSON.txt", true);
    xhttp.send();
}