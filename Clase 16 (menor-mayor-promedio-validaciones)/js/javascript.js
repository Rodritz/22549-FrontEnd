//primero creo la funcion
function calcularNotas() {
    //para traer los datos de los input creo las variables
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    /*validacion--- antes de llamar a calcularValores
    creo una constante que llame a la funcion validarNotas
    que va a comprobar que se carguen datos de tipo number*/
    const notasValidas = validarNotas(nota1,nota2);//tipo  boolean

    //validar que se hayan cargado las notas y no este en blanco
    if(!notasValidas) { // notasValidas === false
        alert('Verifique los datos ingresados');
        return;
    }
    
    calcularValores(nota1, nota2);    
}

function validarNotas(nota1,nota2) {
    //aca solo aplico validaciones
    if(Number(nota1) && Number(nota2)) { //en lugar de number puedo utilizar parseInt
        return true;
    }
    return false;
}

/*creo la funcion calcularValores que recibe dos parametros
nota1 y nota2*/
function calcularValores(nota1,nota2) {   
    //crear el vector de notas
    const notas = [];

    //carga un vector
    //los datos llevan el sig formato--> nombreVector[indice]=valor;
    notas[0] = parseInt(nota1); //lo que esta dentro del corchete es la posicion dentro del vector
    notas[1] = +nota2;
    
    /*ahora trabajo con el vector
    creo las variables para maximo, minimo,promedio y suma,
    y el "ciclo for" para recorrer el vector*/
    let menor = notas[0]; //utilizo la primera posicion del vector
    let mayor = notas[0]; //utilizo la primera posicion del vector
    let promedio;
    let suma = 0; //creo la variable que funciona como acumulador
    for(let i=0;i<notas.length;i++) {
        //calculo el menor 
        if(notas[i] < menor)  { //la traduccion de esto es "si notas en la posicion
            menor = notas[i];   //[i] es menor al menor, entonces el menor
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
    promedio = suma / notas.length; //resultado de la suma dividido el tamaño del vector(cantidad de notas)

    //mustro los datos por consola
    console.log(menor);
    console.log(mayor);
    console.log(promedio);

    /*si quiero mostrar los datos en la pantalla
    segun el id debo hacerlo mediante el llamado de una funcion*/
    actualizar('menor', menor); //aca estoy diciendo que a cada id le otorgo el valor que corresponde
    actualizar('mayor', mayor); //idem anterior
    actualizar('promedio', promedio); //idem anterior
}

/*debo entonces crear dicha funcion*/
/*creo una para value y otra para innerHTML si quiero*/
function actualizar(id, valor) {   
    document.getElementById(id).innerHTML = valor; 
}  

function actualizar(id, valor) {   
    document.getElementById(id).value = valor; 
}

//creo la funcion borrar para cada campo
function borrar() {
    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('menor').innerHTML='';
    document.getElementById('mayor').innerHTML='';
    document.getElementById('promedio').innerHTML='';
}

/*
mayor
menor
promedio
validacion
