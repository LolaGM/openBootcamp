//una variable es una caja donde se guarda un valor: pero esa variable puede cambiar su valor y habría que volver a declararla
var variable;
let variableLet;

//una variable es una caja donde se guarda un valor: Con CONST es permanente ese valor en todo el código
const constante="Lola";

//ejemplo de var que ahora vale 1
var a =1;
console.log(a);
/*console log devuelve el valor que tiene ahora a como le decimos entre pareéntesis
Si cambiamos el valor de a posteriormente a otro valor eso cambiará al mostrarlo*/
a=4;
console.log(a);
console.log("Hola soy " + constante);
//mostramos por pantalla el valor de esa constante.
//NO podremos cambiarle el valor posteriormente. Dará error ASSIGNMENT TO CONSTANT VARIABLE

//variable LET es mejor usarla que la variable VAR
let b = 3;
console.log(b);
b=5;
console.log(b);


/*diferencia entre LET y VAR:
1-VAR afecta a todo el Código
2-LET solo afecta al bloque donde esté siendo declarada (el ámbito o SCOPE)*/
var variable ="Hola soy una variable VAR";

//probamos a usar VAR en un bucle FOR: inicializamos index en 0, luego mientras que se menor que 3, y después que se añada 1 con ++. En QUOKKA veremos que repite esa variable 3 veces: la 0, la 1 y la 2 porque es inferior a 3
for(var index=0; index<3; index++){
    //volvemos a declarar variable pero nunca deberíamos hacerlo. NO DA ERROR PERO ES MÄLA PRÄCTICA
    variable
}

//la volvemos a declarar. 
for(var index=0; index<3; index++){
    //volvemos a declarar variable pero nunca deberíamos hacerlo. NO DA ERROR PERO ES MÄLA PRÄCTICA
    var variable ="Soy la segunda variable";
}
//SI salimos de este BUCLE FOR y hacemos console log sale la segunda variable porque afecta a todo lo anterior declarado con el nombre de esa variable
console.log(variable);

//la gran DIFERENCIA con la variable LET es que si la redeclaramos cambiando el valor y la queremos usar en BUCLE FOR
variableLet= "Hola soy una variable LET";

for(let index=0; index<3; index++){
    //volvemos a declarar variable pero nunca deberíamos hacerlo. NO DA ERROR PERO ES MÄLA PRÄCTICA
    let variableLet= "Hola soy una variable LET";
}
console.log(variableLet);
//LET solo afecta al bloque de código donde esté siendo definida su valor

///////////////////////
/*TYPEOF nos dice el valor  de lo que le pasamos. 
SI le pasamos number  por ejemplo 1 dirá que es number y así sucesivamente*/
console.log(typeof 1);
console.log(typeof "Lola");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

//podemos pasarle también nombres de  variables
console.log(typeof variableLet);


