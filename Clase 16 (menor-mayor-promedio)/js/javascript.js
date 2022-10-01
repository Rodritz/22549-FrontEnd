//primero creo la funcion
function calcularNotas() {
    //para traer los datos de los input creo las variables
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    //validacion
    const notasValidas = validarNotas(nota1,nota2);//tipo  boolean

    if(!notasValidas) { // notasValidas === false
        alert('Verifique los datos ingresados');
        return;
    }
    
    calcularValores(nota1, nota2);    
}

function validarNotas(nota1,nota2) {
    //aca solo aplico validaciones
    if(Number(nota1) && Number(nota2)) {
        return true;
    }
    return false;
}

function calcularValores(nota1,nota2) {   
    //crear el vector de notas
    const notas = [];

    //carga un vector
    //1 - nombreVector[indice]=valor;
    notas[0] = parseInt(nota1);
    notas[1] = +nota2;
    
    /*ahora trabajo con el vector
    creo las variables para maximo, minimo,promedio y suma,
    y el "ciclo for" para recorrer el vector*/
    let menor = notas[0]; //utilizo la primera posicion del vector
    let mayor = notas[0]; //utilizo la primera posicion del vector
    let promedio;
    let suma = 0; 
    for(let i=0;i<notas.length;i++) {
        //calculo el menor 
        if(notas[i] < menor)  { //la traduccion de esto es "si notas en la posicion
            menor = notas[i];   //[i] es menor al menor, si es asi entonces el menor
        }                       //pasa a valer notas [i]
        //calcular el mayor
        if(notas[i] > mayor)  {
            mayor = notas[i];
        }
        //sumo las notas creando un contador
        suma = suma + notas[i]; //signifia el contador es igual a lo que tenia + lo nuevo
        //suma += notas[i]; ==> se puede abreviar de esta manera 
    }

    //ahora que tengo el la suma de las notas, calculo el promedio
    promedio = suma / notas.length; //resultado de la suma dividido el tamaño del vector

    //mustro los datos
    console.log(menor);
    console.log(mayor);
    console.log(promedio);

    actualizar('menor', menor); //actualiza el input con el valor de la variable
    actualizar('mayor', mayor); //mediante una funcion
    actualizar('promedio', promedio);
}

//creo la funcion actualizar para que funcione el paso de valores
function actualizar(div, valor) {   //dentro del parentesis pongo el nombre que quiero
    document.getElementById(div).innerHTML = valor; //y en la seg posicion del parentesis el valor
}                                   // que se debe tomar     

function borrar() {
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('menor').innerHTML='';
    document.getElementById('mayor').innerHTML='';
    document.getElementById('promedio').innerHTML='';

}