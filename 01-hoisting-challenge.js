// Revision del hoisiting para saber que es lo que esta mal

console.log(puntero); 
var puntero = "Soy un var";

// En este caso, el hoisting de 'var' hace que la variable 'puntero' sea declarada pero no inicializada,
// por lo que su valor es 'undefined' en el momento del console.log. Luego, se asigna el valor "Soy un var" a 'puntero'.
// Con let y const, el comportamiento es diferente. Estas variables no son accesibles antes de su declaración debido a la "zona temporal muerta" (TDZ), 
// lo que resulta en un error si intentamos acceder a ellas antes de su declaración.
// Con la funcion 'saludar', el hoisting hace que la declaración de la función sea movida al inicio del contexto de ejecución,
// lo que permite que la función sea llamada antes de su definición sin causar un error.

try {
  console.log(punteroLet);
  let punteroLet = "Soy un let";
} catch (e) {
  console.log("Error:", e.message);
}

saludar();
function saludar() {
  console.log("Hola desde el Hoisting");
}