//Refactorizar código if else con SENTENCIAS O SECUENCIAS SWITCH: 
//Permite en funcion de un valor poner varias condiciones o CASOS con case
//SIEMPRE PONER UN CASO o SITUACIÓN POR DEFECTO
let nota = 5;
//iniciamos con SWITCH y entre paréntesis la variable
//luego CASE y el valor
//debajo lo que va a mostrar en ese caso
switch(nota){
    case 5:
        console.log("Enhorabuena has obtenido un sobresaliente");
    case 4:
        console.log("Buen trabajo pero podrías haberlo hecho mejor");
    case 3: 
        console.log("has sacado un suficiente");
    case 2:
        console.log("No has aprobado por poco");
    case 1:
        console.log("No has estudiado nada, trabaja un poquito más");
}
//si lo dejamos así dará error porque leerá todos los casos. Para eso usamos BREAK en todas y así sólo cogerá la correcta
//NO olvidemos incluir el caso por defecto DEFAULT
nota = 0;
switch(nota){
    case 5:
        console.log("Enhorabuena has obtenido un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo pero podrías haberlo hecho mejor");
        break;
    case 3: 
        console.log("has sacado un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada, trabaja un poquito más");
        break;
    default:
        console.log("Error: Introduce una nota entre 1 y 5")
        break;
}
