//Definimos la funcion hola mundo
function holaMundo() {
  console.log("Hola mundo!");
}

//Invocamos la funcion holaMundo
holaMundo();
holaMundo();
holaMundo();
holaMundo();

//Definimos la funcion sumar
function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}

//Tambien podría generar la misma función así
function sumar(a, b) {
  return a + b;
}

//Invocamos la funcion sumar
suma = sumar(3, 4);
console.log(suma);

//Invocamos por 2da vez la funcion sumar
suma2 = sumar(2, 3);
console.log(suma2);

//Invocamos por 3ra vez la funcion sumar
suma3 = sumar(1, 5);
console.log(suma3);
