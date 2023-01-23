console.log("Hola mundo!");
/* 
//funcion básica demo
let numero1 = 3;
let numero2 = 4;

let resultado = numero1 + numero2;

console.log("La suma de numero1 y numero2 es: " + resultado);

document.getElementById("boton").onclick = function () {
  console.log("Capturamos el evento click");
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
};

//Aplico un evento a TODO el documento
document.addEventListener("click", function () {
  console.log("Hola mundo desde listener");
  document.getElementById("demo").innerHTML =
    "Esamos provando el primer evento...";
});
 */
// Agrego un evento SOLO al boton click
document.getElementById("boton").addEventListener("click", function () {
  console.log("Hola mundo desde listener");
  document.getElementById("demo").innerHTML =
    "Esamos provando el primer evento...";
});

document.getElementById("boton_color").addEventListener("click", function () {
  document.body.style.backgroundColor = "#D51AF6";
});

document.getElementById("boton_default").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

document.getElementById("boton_ocultar").addEventListener("click", function () {
  document.getElementById("demo").style.display = "none";
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "yellow";
}
