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

const imagenes = ['../img/Juego/phish1.PNG', '../img/Juego/phish2.PNG', '../img/Juego/phish3.PNG', '../img/Juego/phish4.PNG'];
let contador = 0;
const juego1 = new Juego(imagenes, 0);



const jugar = () => {
    contador = 0;
    Participante1 = new Participante(prompt("intrese su nombre:"), prompt("intrese su edad:"), prompt("intrese su género:"));
    console.log("Su nombre es: " + Participante1.nombre);
    console.log("Su edad es: " + Participante1.edad);
    console.log("Su genero es: " + Participante1.genero);
    document.getElementById("enunciado").innerText = "      A continución usted deberá seleccionar si la imagen se corresponde a un intento de phshing!"
    document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre;
    console.log(juego1);
    document.getElementById('divImg').innerHTML = '<img src="../img/Juego/phish1.PNG" />';
    document.getElementById('divBotones').style.display = "block";
    contador = contador + 1;
    document.getElementById('btnJugar').style.display = "none";
    console.log("Hay un total de: " + imagenes.length + " preguntas")
    imagenes.forEach(function (elemento) {
        console.log(elemento);
    })
}



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
            let puntajeTotal= 25 * juego1.puntaje;
            document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + ", edad: " +Participante1.edad + " años, género: " + Participante1.genero +  "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            document.getElementById('divBotones').style.display = "none";
            document.getElementById('divImg').style.display = "none";
            document.getElementById('enunciado').style.display = "none";
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
            let puntajeTotal= 25 * juego1.puntaje;
            document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + ", edad: " +Participante1.edad + " años, género: " + Participante1.genero +  "<br>" + " Puntos obtenidos: " + puntajeTotal + "% <br> Respuestas correctas: " + juego1.puntaje;
            document.getElementById('divBotones').style.display = "none";
            document.getElementById('divImg').style.display = "none";
            document.getElementById('enunciado').style.display = "none";

        }
    }
}