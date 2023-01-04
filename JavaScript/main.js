//Defino Clases
class Juego {
    constructor(preguntas, puntaje) {
        this.preguntas = preguntas;
        this.puntaje = puntaje;
    }
}

class Participante {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}

//Defino variables
const imagenes = ['../img/Juego/phish1.PNG', '../img/Juego/phish2.PNG', '../img/Juego/phish3.PNG', '../img/Juego/phish4.PNG'];
let contador = 0;
const juego1 = new Juego(imagenes, 0);
const formulario = document.getElementById("formularioJugador");

//btn jugar
const jugar = () => {
    document.getElementById('formularioJugador').style.display = "block";
    document.getElementById('btnJugar').style.display = "none";

}

//Evento submit (comenzar)
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById('formularioJugador').style.display = "none";

    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const genero = document.getElementById("genero");
    contador = 0;
    //Creo un objeto y lo cargo con lo que me traigo del form
    Participante1 = new Participante(nombre.value, edad.value, genero.value);
    formulario.reset();
    //muestro los datos cargados por consola con operador ternario
    (Participante1.nombre != "") ? console.log("Su nombre es: " + Participante1?.nombre) : console.log("No se cargó nombre");
    (Participante1.edad != "") ? console.log("Su edad es: " + Participante1?.edad) : console.log("No se cargó edad");
    (Participante1.genero != "") ? console.log("Su genero es: " + Participante1?.genero) : console.log("No se cargó género");

    //Genero el enunciado, la primera imagen y los botones para jugar
    document.getElementById("enunciado").innerText = "      A continución usted deberá seleccionar si la imagen se corresponde a un intento de phshing!"
    document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre;
    console.log(juego1);
    console.log(Participante1);
    document.getElementById('divImg').innerHTML = '<img src="../img/Juego/phish1.PNG" />';
    document.getElementById('divBotones').classList.remove('d-none');
    document.getElementById('divBotones').classList.add('d-block');
    contador = contador + 1;
    console.log("Hay un total de: " + imagenes.length + " preguntas")
    imagenes.forEach(function (elemento) {
        console.log(elemento);
    })


    /*
    const contenedorBotones = document.getElementById("botonesParticipante");
    const card = document.createElement("div");
    card.innerHTML = `
    <button onclick="btnMostrarParticipante()" id="btnMostrarParticipante">Mostrar participante en consola</button>
    <br><br>
    `
    contenedorBotones.appendChild(card);
*/
    //Guardo al participante en el localStorage
    localStorage.setItem("participante", JSON.stringify(Participante1));

    //Pruebo operador OR con Falsy
    const participantestorage = JSON.parse(localStorage.getItem("participante") || []);
    console.log(participantestorage.nombre || "No se cargo el nombre")

    //Prueba de spread
console.log(...imagenes)
})



const btnEsPish = () => {
    if (contador < 4) {
        document.getElementById('divImg').innerHTML = '<img src=' + "'" + juego1.preguntas[contador] + "' " + '/>';

        if ((contador == 1) || (contador == 2) || (contador == 3)) {
            juego1.puntaje = juego1.puntaje + 1;
            //Agrego toastify si la respuesta es correcta
            Toastify({
                text: "Respuesta correcta!",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "green",
                },
            }).showToast();

            document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + "<br>" + " Respuestas correctas: " + juego1.puntaje;
        }
        contador++;
    }
    else {
        contador++;
        //Agrego toastify si la respuesta es incorrecta
        Toastify({
            text: "Respuesta incorrecta!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "red",
            },
        }).showToast();
        if (contador === 5) {
            let puntajeTotal = 25 * juego1.puntaje;
            //me fijo si se ingreso un nombre para mostrar
            let participantestorage = JSON.parse(localStorage.getItem("participante"));

            if (participantestorage.nombre) {
                document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + ", edad: " + Participante1.edad + " años, género: " + Participante1.genero + "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            } else {
                document.getElementById("participante").innerHTML = "Participante anónimo " + "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            }
            ocultarDivs();

        }


    }
}


const btnNoEsPish = () => {
    if (contador < 4) {
        document.getElementById('divImg').innerHTML = '<img src=' + "'" + juego1.preguntas[contador] + "' " + '/>';

        if (contador == 4) {
            juego1.puntaje = juego1.puntaje + 1;

            document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + "<br>" + " Respuestas correctas: " + juego1.puntaje;
        }
        contador++;
        //Agrego toastify si la respuesta es incorrecta
        Toastify({
            text: "Respuesta incorrecta!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "red",
            },
        }).showToast();
    }
    else {
        contador++;
        if (contador === 5) {
            juego1.puntaje = juego1.puntaje + 1;
            //Agrego toastify si la respuesta es correcta
            Toastify({
                text: "Respuesta correcta!",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "green",
                },
            }).showToast();

            let puntajeTotal = 25 * juego1.puntaje;

            //me fijo si se ingreso un nombre para mostrar
            let participantestorage = JSON.parse(localStorage.getItem("participante"));

            if (participantestorage.nombre) {
                document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + ", edad: " + Participante1.edad + " años, género: " + Participante1.genero + "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            } else {
                document.getElementById("participante").innerHTML = "Participante anónimo " + "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            }

            ocultarDivs();
        }
    }
}

//Resgistro algunos eventos y los mustro por consola
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");

nombre.addEventListener("change", () => {
    console.log("Se ingreso el siguiente texto en el campo 'nombre': " + nombre.value);
})
edad.addEventListener("change", () => {
    console.log("Se ingreso el siguiente texto en el campo 'edad': " + edad.value);
})
genero.addEventListener("change", () => {
    console.log("Se ingreso el siguiente texto en el campo 'género': " + genero.value);
})


//Recupero participante del localStorage con un botón
const btnMostrarParticipante = () => {
    let participantestorage = JSON.parse(localStorage.getItem("participante"));

    if (participantestorage.nombre) {
        console.log(participantestorage);
    }
}
//Función para mostrar/ocultar el texto en la actvidad
function ocultarDivs() {
    document.getElementById('divBotones').style.display = "none";
    document.getElementById('divBotones').classList.remove('d-block');
    document.getElementById('divBotones').classList.add('d-none');
    document.getElementById('divImg').style.display = "none";
    document.getElementById('enunciado').style.display = "none";
}