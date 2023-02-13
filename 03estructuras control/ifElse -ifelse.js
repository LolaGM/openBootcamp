//If else + If else
//Puntuación notas colegio donde 5 es la nota mayor

let nota = 5;

//si usamos esta estructura sería inmantenible:
if (nota === 5){
    console.log("Enhorabuena has obtenido un sobresaliente")
} else {
    if (nota === 4){

    }else{
        if (nota === 3){

        }
    }
}
//Para evitar esto existe el ELSEIF:
//si la nota no es 5, salta a la siguiente
//si la nota es 4 entra y así sucesivamente
nota = 1;
if (nota === 5){
    console.log("Enhorabuena has obtenido un sobresaliente")
} else if(nota === 4){
    console.log("Buen trabajo pero podrías haberlo hecho mejor")
} else if (nota === 3){
    console.log("has sacado un suficiente")
} else if (nota === 2){
    console.log("No has aprobado por poco")
} else if (nota === 1){
    console.log("No has estudiado nada, trabaja un poquito más")
}
//si no se cumple ninguna de éstas, pasamos un else final
else{
    console.log("Error: Introduce una nota entre 1 y 5")
}

//para evitar este tipo de cosas tenemos SWITCH. 

