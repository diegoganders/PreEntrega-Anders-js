


const jugar= () => {
Participante1 = new Participante(prompt("intrese su nombre:"), prompt("intrese su edad:"),prompt("intrese su género:"));
console.log("Su nombre es: " + Participante1.nombre);
console.log("Su edad es: " + Participante1.edad);
console.log("Su genero es: " + Participante1.genero);
document.getElementById("enunciado").innerText = "      A continución usted deberá seleccionar si la imagen se corresponde a un intento de phshing!"
document.getElementById("participante").innerHTML = "Participante: " + Participante1.nombre + "<br>" + " Puntos obtenidos: ";


}