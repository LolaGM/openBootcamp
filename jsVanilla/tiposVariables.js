//tipos primitivos

//number
4;
0;

//string
"Hola mundo";
'Hola mundo';

//booleanos (SIN COMILLAS)
true;
false;

//null (espacio vació en memoria al que NO se le ha asignado ningún dato)
null;

// undefined (un valor NO definido = indefinido)

undefined;

//null, undefined, false , 0 ====> todas son FALSY
if (null){
    //si cumple
    console.log("cumple");
}
else{
    //si no cumple
    console.log("NO cumple");
}

/////////////////////

if (undefined){
    //si cumple
    console.log("cumple");
}
else{
    //si no cumple
    console.log("NO cumple");
}
///////////////////

if (false){
    //si cumple
    console.log("cumple");
}
else{
    //si no cumple
    console.log("NO cumple");
}

////////////////

if (0){
    //si cumple
    console.log("cumple");
}
else{
    //si no cumple
    console.log("NO cumple");
}
//////////////////// con otros valores SÍ cumple la condición

if (true){
    //si cumple
    console.log("cumple");
}
else{
    //si no cumple
    console.log("NO cumple");
}
