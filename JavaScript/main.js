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
    Participante1 = new Participante(nombre.value, edad.value, genero.value);
    formulario.reset();
    console.log("Su nombre es: " + Participante1.nombre);
    console.log("Su edad es: " + Participante1.edad);
    console.log("Su genero es: " + Participante1.genero);
    document.getElementById("enunciado").innerText = "      A continución usted deberá seleccionar si la imagen se corresponde a un intento de phshing!"
    document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre;
    console.log(juego1);
    console.log(Participante1);
    document.getElementById('divImg').innerHTML = '<img src="../img/Juego/phish1.PNG" />';
    document.getElementById('divBotones').style.display = "block";
    contador = contador + 1;
    console.log("Hay un total de: " + imagenes.length + " preguntas")
    imagenes.forEach(function (elemento) {
        console.log(elemento);
    })
    const contenedorBotones = document.getElementById("botonesParticipante");
    const card = document.createElement("div");
    card.innerHTML = `
    <button onclick="btnMostrarParticipante()" id="btnMostrarParticipante">Mostrar participante en consola</button>
    <br><br>
    `
    contenedorBotones.appendChild(card);
    
    //Guardo al participante en el localStorage
    localStorage.setItem("participante", JSON.stringify(Participante1));

})



const btnEsPish = () => {
    if (contador < 4) {
        document.getElementById('divImg').innerHTML = '<img src=' + "'" + juego1.preguntas[contador] + "' " + '/>';

        if ((contador == 1) || (contador == 2) || (contador == 3)) {
            juego1.puntaje = juego1.puntaje + 1;
            document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + "<br>" + " Respuestas correctas: " + juego1.puntaje;
        }
        contador = contador + 1;
        console.log(contador);
    }
    else {
        contador = contador + 1;
        console.log(contador);

        if (contador === 5) {
            let puntajeTotal = 25 * juego1.puntaje;
            document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + ", edad: " + Participante1.edad + " años, género: " + Participante1.genero + "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            document.getElementById('divBotones').style.display = "none";
            document.getElementById('divImg').style.display = "none";
            document.getElementById('enunciado').style.display = "none";
            document.getElementById('btnMostrarParticipante').style.display = "none";

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
        contador = contador + 1;
        console.log(contador);
    }
    else {
        contador = contador + 1;
        console.log(contador);

        if (contador === 5) {
            juego1.puntaje = juego1.puntaje + 1;
            let puntajeTotal = 25 * juego1.puntaje;
            document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + ", edad: " + Participante1.edad + " años, género: " + Participante1.genero + "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            document.getElementById('divBotones').style.display = "none";
            document.getElementById('divImg').style.display = "none";
            document.getElementById('enunciado').style.display = "none";
            document.getElementById('btnMostrarParticipante').style.display = "none";


        }
    }
}

//Resgistro algunos eventos
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


//Recupero participante del localStorage
const btnMostrarParticipante = () => {
    let participantestorage = JSON.parse(localStorage.getItem("participante"));
    console.log(participantestorage);
}