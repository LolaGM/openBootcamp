//LISTAS, tambien llamadas array o arreglo-> siempre con corchetes
    const list = [1,"hola",true, undefined,null];
    const list2 = new Array(2,"hola",true, undefined,null);
    const list3 = new Array(3);

    //le decimos a la  constante list3 que su indice 0 es en este caso un string por ejemplo
    list3[0] = "soy el primer elemento: index 0";

    //podemos tener listas dentro de listas
    const list4 = [list,list2,list3];

    //mostramos con console.log el contenido de cada lista o array
    console.log(list);
    console.log(list2);
    console.log(list3);
    //aparecerán 3 espacios vacíos o el elemento 0 que hayas dicho que es como especificamos en línea 6

    console.log(list4);

//OBJETOS: JS está orientado a objetos: representación en datos de objetos reales. EL objeto móvil tiene atributos que pueden cambiar o no. La variable const es lo que NO CAMBIA
    //Se usa bigotes para contener el objeto aunque luego podamos CAMBIAR fuera de él sus PROPIEDADES
    //clave:valor, IMPORTANTE USAR LA COMA , y no se usa guión - para los nombres de claves
    //clave:{} para atrinbutos con propiedades
    const movil = {
        altura:10,
        anchura:5,
        marca:"Xiaomi",
        modelo:"miA2",
        isWhite:false,
        contactos:["Rober","Hermano","Erika"],
        tarjeta:{
            marca:"Sandisk",
            almacenamiento: 32
        }        
    }
    //para crear un nuevo atributo: aunque no esté definido dentro de las llaves, si lo llamamos aparece
    movil.anyo =2019;

    //también podemos editar / cambiar el valor de esas propiedades fuera del objeto
    movil.marca ="Samsung";


    //podemos acceder a los atributos de los objetos con el punto .
    console.log(movil.altura);
    console.log(movil.contactos);
    console.log(movil.tarjeta.marca);
    console.log(movil.anyo);
    console.log(movil.marca);

//FECHAS
    //trabajar con fechas puede ser una pesadilla:existen librerías de apoyo como MOMENT.js
    //se escribe new minúscula y Date en mayusc -->new Date()    
    const now = new Date();
    console.log(now); //saca la fecha de hoy y la hora
    
    //para hacer fechas con milisegundos desde 01/01/1970 como fecha cero. Se le pasa entre () los milisegndos
    const dateMilis = new Date(10);
    console.log(dateMilis);

    //fecha en cadena y le pasamos una fecha en inglés
    const dateChain = new Date("march 25 2020");
    console.log(dateChain);

    //fecha con valores: 07/02/2023 OJO que toma el mes como empezando por cero como los arrays
    const dateValues = new Date(2023,1,7);
    console.log(dateValues);

    //Usamos ahora GET para el día , mes (se le añade +1 por empezar por cero como un array) y año y le pasamos la const NOW (ahora) que definimos arriba
    const day = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();

    //podemos hacer console log de todas las cnstantes de fecha
    console.log(day,month,year);





