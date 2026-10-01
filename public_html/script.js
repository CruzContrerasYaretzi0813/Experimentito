    
    /* global listaAlumnos */

let listaAlumno = [];
    
    function calcularPromedio() {

        // Obtener los datos del formulario

        let nombre = document.getElementById("nombre").value;

        let edad = document.getElementById("edad").value;

        let calificacion1 = parseFloat(
            document.getElementById("calificacion1").value
        );

        let calificacion2 = parseFloat(
            document.getElementById("calificacion2").value
        );

        let calificacion3 = parseFloat(
            document.getElementById("calificacion3").value
        );

        let calificacion4 = parseFloat(
            document.getElementById("calificacion4").value
        );


        // Validar que los datos estén completos

        if (
            nombre === "" ||
            edad === "" ||
            isNaN(calificacion1) || calificacion1 <1 || calificacion1 > 10 ||
            isNaN(calificacion2) || calificacion2 <1 || calificacion2 > 10 ||
            isNaN(calificacion3) || calificacion3 <1 || calificacion3 > 10 ||
            isNaN(calificacion4) || calificacion4 <1 || calificacion4 > 10 
        ) {

            document.getElementById("resultado").innerHTML =
                "Por favor, completa todos los datos o verifica que las calificaciones sean del 1 al 10";

            return;
        }


        // Calcular promedio

        let promedio =
            (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

        let mensaje = 
                "<strong>Alumno:</strong> " + nombre +
                " " +
                "<strong>Edad:</strong>" + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>";



        // Mostrar resultado

        if (promedio >= 9 &&  promedio <= 10) {

            mensaje += "Excelente";
     
        } 
        else if ( promedio >= 8 &&  promedio <= 9 ){

            mensaje += "Muy Bien";
        }
        else if ( promedio >= 7 &&  promedio <= 7.9 ){

            mensaje += "Bien";
        }
        else if ( promedio >= 6.5 &&  promedio <= 6.9 ){

            mensaje += "Piensa en cambiarte a Conta";
        }
        else if ( promedio >= 6 &&  promedio <= 6.5 ){

            mensaje += "Date de Baja";
        }

        else {

            mensaje += "Vete a turismo o a la 11";
        } 
        document.getElementById("resultado").innerHTML = mensaje;


    }

    function limpiarDatos() {
        
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("calificacion1").value = "";
        document.getElementById("calificacion2").value = "";
        document.getElementById("calificacion3").value = "";
        document.getElementById("calificacion4").value = "";


        document.getElementById("resultado").innerHTML = "";


        document.getElementById("nombre").focus();
       
    }
    
    function soloLetras(e){
        let key = e.key || e.keyCode;
    let patron = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]$/;
    return patron.test(e.key);
    }
    
    
    
    function agregarAlumno(){
        
        let nombre = document.getElementById("nombre").value;

        let edad = document.getElementById("edad").value;

        let calificacion1 = parseFloat(
            document.getElementById("calificacion1").value
        );

        let calificacion2 = parseFloat(
            document.getElementById("calificacion2").value
        );

        let calificacion3 = parseFloat(
            document.getElementById("calificacion3").value
        );

        let calificacion4 = parseFloat(
            document.getElementById("calificacion4").value
        );


        // Validar que los datos estén completos

        if (
            nombre === "" ||
            edad === "" ||
            isNaN(calificacion1) || calificacion1 <1 || calificacion1 > 10 ||
            isNaN(calificacion2) || calificacion2 <1 || calificacion2 > 10 ||
            isNaN(calificacion3) || calificacion3 <1 || calificacion3 > 10 ||
            isNaN(calificacion4) || calificacion4 <1 || calificacion4 > 10 
        ) {

            document.getElementById("resultado").innerHTML =
                "Por favor, completa todos los datos o verifica que las calificaciones sean del 1 al 10";

            return;
        }


        // Calcular promedio
        let promedio =
            (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    
        let nuevoAlumno = {
            nombre: nombre,
            edad: edad,
            promedio: promedio
        };

        listaAlumno.push(nuevoAlumno);

        document.getElementById("resultado").innerHTML = 
            "¡Alumno <strong>" + nombre + "</strong> agregado exitosamente! (Total: " + listaAlumno.length + ")";
    }
    
    function mostrarAlumno(){
        let contenedor = document.getElementById("resultado");

        if (listaAlumno.length === 0) {
            contenedor.innerHTML = "No hay alumnos registrados en el sistema.";
            return;
        }

        let html = "<h3>Lista de Alumnos:</h3><ul>";
        for (let i = 0; i < listaAlumno.length; i++) {
            html += "<li><strong>" + listaAlumno[i].nombre + "</strong> (Edad: " + listaAlumno[i].edad + ") - Promedio: " + listaAlumno[i].promedio.toFixed(2) + "</li>";
        }
        html += "</ul>";

        contenedor.innerHTML = html;
    }
