var x = 10;
for (x; x > 0; x--) {
  if (x == 5) {
    continue;
  }
  console.log("El valore de x es: " + x); //Sentencia
}

//Ejemplo w3 schools en https://www.w3schools.com/js/js_break.asp
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
