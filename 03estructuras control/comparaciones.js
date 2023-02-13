//comparaciones 

//Igualdad OJO que son 2 signos de igual == o 3 signos ===
//Igualdad debil con == SOLO compara EL VALOR
let a =5; console.log(typeof a);
let b =5; console.log(typeof b);
if (a == b){
    console.log("A es igual a B débil");
}
if (a === b){
    console.log("A es igual a B Fuerte");
}

//Igualdad fuerte con === (estrictamente igual)
//Compara el valor y el tipo de dato
let c = 5; console.log(typeof c);
let d ="5"; console.log(typeof d);

if (c == d){
    console.log("C es igual a D débil porque sólo es valor");
}

if (c === d){
    console.log("C es igual a D Fuerte porque es mismo tipo y valor");
}

//desigualdad de varios tipos
let e = 4;
let f = 10;
//desigualdad SI ES DIFERENTE debil != o fuerte con !==
if (e != f){
    console.log("E es DIFERENTE a F débil");
}
if (e !== f){
    console.log("E es DIFERENTE a F fuerte");
}
//cambiamos los valores de las variables. Tenemos 10 en NUMERO  y en STRING
e = 10;
f = "10";
if (e != f){
    console.log("E es DIFERENTE a F débil");
}
if (e !== f){
    console.log("E es DIFERENTE a F fuerte");
}

//COMPARACIONES mayores y menores QUE o iguales. Se hacen con números
let max = 10;
let min = 5;

if (max>5){
    console.log("max es mayor que min");
}
if (max>=10){
    console.log("max es mayor o igual que min");
}
if (min<max){
    console.log("min es menor que max");
}
if (min<=max){
    console.log("min es menor o igual que max");
}




