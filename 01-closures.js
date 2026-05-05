// Las closures son funciones que recuerdan el entorno en el que fueron creadas, incluso después de que ese entorno haya dejado de existir. 
// Esto permite que las funciones accedan a variables y parámetros de su ámbito exterior, 
// incluso después de que la función exterior haya terminado de ejecutarse.

// Definimos una funcion que actua como una "fabrica" y al invocarla,
// Crea Execute Context que devuelve un objeto con dos funciones: incrementar y obtenerValor.
function crearContador(nombre){
    let cuenta = 0; // Esta variable es parte del entorno de la función interna

    return {
        incrementar: function(){
            cuenta++; // La función interna puede acceder a la variable 'cuenta'
            console.log(`${nombre} tiene cuenta en: ${cuenta}`);
        },
        obtenerValor: () => cuenta // La función flecha también puede acceder a 'cuenta'
    };
}

const miContador = crearContador("Contador-Proyectos");
miContador.incrementar(); // Contador-Proyectos tiene cuenta en: 1
miContador.incrementar(); // Contador-Proyectos tiene cuenta en: 2
console.log(miContador.cuenta); // undefined, ya que 'cuenta' no es accesible directamente

