
//for (inicializacion; condicion; incremento/decremento)
var x = 10;

for (x = 10; x >0; x--) {
    console.log("El valore de x es: "x); //Sentencia
}


/Ejemplo w3 schools en https://www.w3schools.com/js/js_loop_for.asp
//Instead of writing:
//text += cars[0] + "<br>";
//text += cars[1] + "<br>";
//text += cars[2] + "<br>";
//text += cars[3] + "<br>";
//text += cars[4] + "<br>";
//text += cars[5] + "<br>";
//You can write:

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}