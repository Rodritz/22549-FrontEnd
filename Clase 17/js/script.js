//objeto vacio
const unAlumno = {
    edad: 25,
    nombre: 'carlos',
    carrera: 'ING'
};

//array/vector/arreglos vacio de alumnos
const alumnos = [    
    {
        edad: 35,
        nombre: 'carlos',
        carrera: 'ING'
    },
    {
        edad: 35,
        nombre: 'RODRIGO',
        carrera: 'LIC'
    },
    {
        edad: 35,
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
for(let i=0; i < alumnos.length;i++ ) {
    //sumaEdades = sumaEdades +  alumnos[i].edad;
    sumaEdades +=alumnos[i].edad;
}
console.log('primer forma:', sumaEdades);

sumaEdades = 0;
for (let alumno of alumnos) { //forarch
    sumaEdades+= alumno.edad;
}
console.log('2nda forma:', sumaEdades);

//expresion lambda
//array.forarch()
sumaEdades = 0;
alumnos.forEach(alumno => sumaEdades+= alumno.edad);  //centrar en que quiero hacer
console.log('3er forma:', sumaEdades);

//-------------------------------
//LISTA DE LOS ALUMNOS MENORES DE 40
const menoresDe40 = []; //inicializo el vector vacio
for(let alumno of alumnos )  {
    if(alumno.edad < 40) {
        menoresDe40.push(alumno);
    }
}
console.log('menores de 40', menoresDe40);

//filter: funcion lambda que retorna una lista de lo que se filtro
//dentro de la expresion lambda
const alumnosMenoresDe40 = alumnos.filter(alumno => alumno.edad < 40); //que quiero?
console.log(alumnosMenoresDe40);

//EXISTE ALGUN ALUMNO DE 25 AÑOS?
let existe = false;
for(let i=0; i<alumnos.length && !existe;   i++) {
    existe =  alumnos[i].edad === 30;//true|false    
}
console.log('existe?:' , existe);

//.some() > boolean (true|false): expresion lambda
const existeAlumno25 = alumnos.some(alumno => alumno.edad === 30); //que quiero?
console.log(existeAlumno25);

//QUERIO SABER SI "TODOS" LOS ALUMNOS TIENE 35 AÑOS
//const noExistAlumo = alumnos.some(alumno => alumno.edad !== 35);//OK?
//const todostiene35 = alumnos.some(alumno => alumno.edad < 36 && alumno.edad > 34);
let todos = true;
for(let i=0; i<alumnos.length && todos; i++) {
    todos =  alumnos[i].edad === 35;//false
}
console.log('todos:', todos);

//every: lambda > boolean
const todos2 = alumnos.every(alumno => alumno.edad === 35); //que quiero?
console.log('todos2:', todos2);

//QUIERO SOLO LOS NOMBRES DE LOS ALUMNOS
const nombres = [];
for(let alumno of alumnos ) {
    nombres.push(alumno.nombre);
}
console.log('nombres:', nombres);

//map: f(algo) > otro algo
const nombresMap = alumnos.map(alumno => alumno.nombre); //quer quiero?
console.log('nombresMap:', nombresMap);

//reduce
const sumaReduced = alumnos.reduce((acum,actual) =>  acum + actual.edad, 0); //quer quiero?
console.log('sumaReduced:', sumaReduced);

//filter
//some
//every
//map
//reduce
