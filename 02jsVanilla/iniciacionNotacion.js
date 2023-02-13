//Notación. Diferentes tipos de símbolos con un uso:

// ; punto y coma --> para delimitar el final de una línea. Se puede eliminar pero viene bien acostumbrarse a usar punto y coma si se aprenden otros lenguajes

// . punto --> se usa en los OBJETOS para acceder a los atributos o PROPIEDADES de ese objeto (por ej: altura, anchura, profundidad,etc)

// [] corchetes  o squared brackets:  se usan
// 1--> para las listas, arrays (arreglos)
// 2 --> para acceder a algún valor dentro de los arrays

// () paréntesis -->se usan para funciones

// {} llaves o curly braces-->para OBJETOS, FUNCIONES y ESTRUCTURAS DE CONTROL

////////////////EJEMPLOS//////////////////

const b= 4;

// movil.anchura --> es un ejemplo no declarado aún de variable movil y su propiedad anchura

const ar = [1,2,3,4];
ar[2];
console.log(ar[2]); // accede a la posición 2 del array que empieza por contando por cero = es decir el numero 3

function suma(a,b){
    //se escribe la función
}

//con las llaves delimito el alcance de este objeto
const movil ={
    anchura:5,
    altura:10
}

//con las llaves las uso en estructuras de control
if (true){
    //pasará todo lo que haya entre llaves {}
}