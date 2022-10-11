const btnAdd = document.getElementById('btnAdd');
//el scope del array debe estar por encima de la funcion add
const claves = [];

//para asociar a un btn un evento
btnAdd.addEventListener('click', add); //esto seria el onclick="add()"" en el html

//declaro  la funcion add que llama "btnAdd.addEventListener"
function add() {

    /*podemos decir
    const clave = document.getElementById('clave').value;
    o utilizar una funcion, como hacemos a continuacion*/
    const clave = getKey();

    //invocamos la funcion booleana para validacion
    const isValid = validateKey(clave);

    //si la validacion da falso, entonces no pasa la validacion
    if (!isValid) {
        alert('Debe completar la clave');
        return;
    }

    //pasa las validaciones!
    //agregar a la lista de claves
    addToList(clave);

    // invocamos la funcion render... que va a utilizar DOM
    renderKeyByDOM();
}

function renderKeyByDOM() {
    /*crea una const list que 
    invoca la funcion que le agrega las claves*/
    const list = findKeys();

    //crear un <ul>
    const ul = document.createElement('ul');
    list.innerHTML = ''; //limpia lo ingresado previamente para que no se repita
    ul.id = 'clavesUl'; //ya le puedo crear un id al crear el ul
    ul.className = 'classUl'; //le puedo tambien crear una class*/

    //agrego al div 'list' el hijo <ul>
    list.appendChild(ul);


    /*crear los <li> en base a el array de clave y los agrego
    al <ul>*/
    for(let clave of claves) { //recorro el array
        const li = document.createElement('li'); //creo el <li> dinamicamente       
        li.innerHTML = clave; //para que el <li> tenga texto le pongo 
                              //el inner.. para que traiga lo del label que es la 'clave'
        li.id = Math.random();//le creo un id dinamico entre 0 - 0.999999

        //agrego al ul el hijo <li>
        ul.appendChild(li);

        /*se puede agregar eventos a cualquier elemento
        en este caso lo hacemos con el li para que salte un alerta..
        podemos hacer que mediante el evento ofrezca eliminar el item tambien*/
        li.addEventListener('click', () => alert('soy un li'))
    };
}
//funcion para obtener la clave ingresada
function getKey() {
    return document.getElementById('clave').value;
}

//true|false para validacion
function validateKey(clave) {
    return clave !== '';//true | false
}

//agregar a la lista de claves
function addToList(clave) {
    claves.push(clave);
}

function findKeys() {
    return document.getElementById('claves');
}

function clearList (){
    while(claves.length> 0){
        claves.pop();
    }
    //claves.slice(0,claves.length); //esta es otra opcion
}

//funcion completa para limpiar lista
//capturo el boton de limpiar
const boton = document.getElementById('limpiar');
boton.addEventListener('click',limpiar);

function limpiar() {
    //vaciar la lista
    clearList();

    //capturar ul y limpiar la lista
    document.getElementById('claves').innerHTML = '';
}

function clearList (){
    while(claves.length> 0){
        claves.pop();
    }
}