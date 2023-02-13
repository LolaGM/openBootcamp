//Bifurcaciones IF...ELSE
if(true){
    console.log("Es verdadero");
}
/////////////// Si no se cumple, que vaya al siguiente bloque de código

if(false){
    console.log("Es verdadero");
}else{
    console.log("NO es verdadero");
}

////////comprobar algo: Ejemplo: si hay dinero en cuenta bancaria con variables LET y con menor /mayor dentro del IF
let saldo = 50;
let efectivo = 20;

if(efectivo<saldo){
    console.log("puedes sacar dinero");
}
 // lo mismo pero con ELSE
 if(efectivo<saldo){
    console.log("puedes sacar dinero");
}else{
    console.log("Saldo insuficiente");
}

//cambiamos ahora el valor de la variable efectivo y vemos el resultado: pasa a la siguiente comprobación que es ELSE
saldo = 50;
efectivo = 100;

if(efectivo<saldo){
    console.log("puedes sacar dinero");
}
 // lo mismo pero con ELSE
 if(efectivo<saldo){
    console.log("puedes sacar dinero");
}else{
    console.log("Saldo insuficiente");
}