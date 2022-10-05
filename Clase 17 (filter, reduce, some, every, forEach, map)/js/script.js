//objeto 
const unAlumno = {
    edad: 25,
    nombre: 'carlos',
    carrera: 'ING'
};

//array/vector/arreglos de objetos
const alumnos = [    
    {
        edad: 25,
        nombre: 'carlos',
        carrera: 'ING'
    },
    {
        edad: 30,
        nombre: 'RODRIGO',
        carrera: 'LIC'
    },
    {
        edad: 29,
        nombre: 'REINALDO',
        carrera: 'MATEMATICAS'
    },
    {
        edad: 35,
        nombre: 'JOSE',
        carrera: 'LENGUA'
    },
];

let sumaEdades = 0; //acumulador

//SUMAR TODAS LAS EDADES
//1º forma -recorriendo un vector y sumando
for(let i=0; i < alumnos.length;i++ ) {
    //sumaEdades = sumaEdades +  alumnos[i].edad;
    sumaEdades +=alumnos[i].edad;
}
console.log('primer forma:', sumaEdades);

//2º forma -- recorriendo un vector de otra manera y con funcion forEach
//forEach
sumaEdades = 0;
for (let alumno of alumnos) { 
    sumaEdades+= alumno.edad; //al necesito declarar [i] en ningun lado
}
console.log('2nda forma:', sumaEdades);

//3º forma -- recorriendo  un vector de otra maneda y con funcion lambda array.forEach
//expresion lambda array.forEach()
sumaEdades = 0;
alumnos.forEach(alumno => sumaEdades+= alumno.edad);  //centrar en que quiero hacer
console.log('3er forma:', sumaEdades);

//4º forma -- con expresion lambda reduce
//funcion lambda reduce
const sumaReduced = alumnos.reduce((acum,actual) =>  acum + actual.edad, 0); 
console.log('sumaReduced:', sumaReduced);

//-------------------------------
//LISTA DE LOS ALUMNOS MENORES DE 40
const menoresDe40 = []; //inicializo el vector vacio para tener una nueva lista 
for(let alumno of alumnos )  {
    if(alumno.edad < 40) {
        menoresDe40.push(alumno);
    }
}
console.log('menores de 40', menoresDe40);

/*filter: funcion lambda que retorna una lista de lo que se filtro
dentro de la expresion lambda*/
const alumnosMenoresDe40 = alumnos.filter(alumno => alumno.edad < 40); //creo la const con la funcion de filtro 
console.log('menores de 40 con .filter',alumnosMenoresDe40);

//------------------------------------------
//EXISTE ALGUN ALUMNO DE 25 AÑOS?
let existe = false;
for(let i=0; i<alumnos.length && !existe; i++) {
    /*if(alumnos[i].edad === 25) {    //true|false
        existe = true;
        break; //corta el ciclo for
    }*/
    existe =  alumnos[i].edad === 25; //true|false    
}
console.log('existe?:' , existe);

//.some() > boolean (true|false): expresion lambda
const existeAlumno25 = alumnos.some(alumno => alumno.edad === 25); 
console.log('expresion lambda .some', existeAlumno25);

//QUERIO SABER SI "TODOS" LOS ALUMNOS TIENE 35 AÑOS
let todos = true;
for(let i=0; i<alumnos.length && todos; i++) {
    todos =  alumnos[i].edad === 35; //true|false
}
console.log('todos:', todos);

//every: lambda > boolean
const todos2 = alumnos.every(alumno => alumno.edad === 35); 
console.log('todos2:', todos2);

//QUIERO SOLO LOS NOMBRES DE LOS ALUMNOS
const nombres = []; //creo un vector vacio
for(let alumno of alumnos ) {
    nombres.push(alumno.nombre); //todos los nombres de los alumnos
}                                // se envian al nuevo vector nombres
console.log('nombres:', nombres);

//map: f(algo) > otro algo
const nombresMap = alumnos.map(alumno => alumno.nombre); 
console.log('nombresMap:', nombresMap);



//filter
//some
//every
//map
//reduce
