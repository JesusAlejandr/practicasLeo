function crearTabla() {
  var tabla = document.getElementById("tablaContenido");

  tabla.innerHTML = "";
  //creo los encabezados, las columnas, les doy nombre e inserto.
  var filaEncabezados = document.createElement("tr");
  var encabezado1 = document.createElement("th");
  encabezado1.textContent = "Matrícula";
  encabezado1.classList.add("encabezado-verde");
  
  var encabezado2 = document.createElement("th");
  encabezado2.textContent = "Nombre";
  encabezado2.classList.add("encabezado-verde");
  
  var encabezado3 = document.createElement("th");
  encabezado3.textContent = "Materia";
  encabezado3.classList.add("encabezado-verde");
  
  var encabezado4 = document.createElement("th");
  encabezado4.textContent = "Calificacion";
  encabezado4.classList.add("encabezado-verde");
  
  filaEncabezados.appendChild(encabezado1);
  filaEncabezados.appendChild(encabezado2);
  filaEncabezados.appendChild(encabezado3);
  filaEncabezados.appendChild(encabezado4);
  
  tabla.appendChild(filaEncabezados);



   //traigo valores del html
    var matricula = document.getElementById("matricula").value;
    var nombre = document.getElementById("nombre").value;
    var materia1 = document.getElementById("materia1").value;
    var calificacion1 = parseInt(document.getElementById("calificacion1").value);

//creo segunda fila y columnas
    var filaDatos1 = document.createElement("tr");
    var celdaMatricula1 = document.createElement("td");
    var celdaNombre1 = document.createElement("td");
    var celdaMateria1 = document.createElement("td");
    var celdaCalificacion1 = document.createElement("td");

    celdaMatricula1.textContent = matricula;
    celdaNombre1.textContent = nombre;
    celdaMateria1.textContent = materia1;
    celdaCalificacion1.textContent = calificacion1;
//inserto
    filaDatos1.appendChild(celdaMatricula1);
    filaDatos1.appendChild(celdaNombre1);
    filaDatos1.appendChild(celdaMateria1);
    filaDatos1.appendChild(celdaCalificacion1);

    tabla.appendChild(filaDatos1);

    var materia2 = document.getElementById("materia2").value;
    var calificacion2 = parseInt(document.getElementById("calificacion2").value);


    var filaDatos2 = document.createElement("tr");
    var celdaMatricula2 = document.createElement("td");
    var celdaNombre2 = document.createElement("td");
    var celdaMateria2 = document.createElement("td");
    var celdaCalificacion2 = document.createElement("td");

    celdaMatricula2.textContent = matricula;
    celdaNombre2.textContent = nombre;
    celdaMateria2.textContent = materia2;
    celdaCalificacion2.textContent = calificacion2;

    filaDatos2.appendChild(celdaMatricula2);
    filaDatos2.appendChild(celdaNombre2);
    filaDatos2.appendChild(celdaMateria2);
    filaDatos2.appendChild(celdaCalificacion2);

    tabla.appendChild(filaDatos2);

   
      var materia3 = document.getElementById("materia3").value;
      var calificacion3 = parseInt(document.getElementById("calificacion3").value);
  

      var filaDatos3 = document.createElement("tr");
      var celdaMatricula3 = document.createElement("td");
      var celdaNombre3 = document.createElement("td");
      var celdaMateria3 = document.createElement("td");
      var celdaCalificacion3 = document.createElement("td");
  
      celdaMatricula3.textContent = matricula;
      celdaNombre3.textContent = nombre;
      celdaMateria3.textContent = materia3;
      celdaCalificacion3.textContent = calificacion3;
  
      filaDatos3.appendChild(celdaMatricula3);
      filaDatos3.appendChild(celdaNombre3);
      filaDatos3.appendChild(celdaMateria3);
      filaDatos3.appendChild(celdaCalificacion3);
  
      tabla.appendChild(filaDatos3);

      var totalCalificaciones = calificacion1 + calificacion2 + calificacion3;
      var totalCalificaciones = totalCalificaciones / 3;
      var totalCalificaciones = totalCalificaciones.toFixed(2);

  
      var filaTotal = document.createElement("tr");
      var celdaTotal = document.createElement("td");
      celdaTotal.textContent = "Promedio:";
      celdaTotal.colSpan = 3;
  
      var celdaTotalCalificacion = document.createElement("td");
      celdaTotalCalificacion.textContent = totalCalificaciones;
  
      filaTotal.appendChild(celdaTotal);
      filaTotal.appendChild(celdaTotalCalificacion);
  
      tabla.appendChild(filaTotal);
}
