const btnAdd = document.getElementById('btnAdd');
//el scope del array debe estar por encima de la funcion add
const claves = [];

//para asociar a un btn un evento
btnAdd.addEventListener('click', add); //esto seria el onclick="add()"" en el html

//declaro  la funcion add que llama "btnAdd.addEventListener"
function add() {

    /*podemos decir
    const clave = document.getElementById('clave').value;
    o utilizar una funcion*/
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

    // renderKeys();
    renderKeyByDOM();
}

function renderKeyByDOM() {
    const list = findKeys();
    //crear un <ul>
    
    const ul = document.createElement('ul');
    ul.id = 'clavesUl';
    ul.className = 'classUl';

    //agregar al div el hijo: ul
    list.appendChild(ul);


    //crear los <li> en base a el array de clave y los agrego
    //al <ul>
    for(let clave of claves) {
        const li = document.createElement('li');
        li.innerHTML = clave;
        li.id = Math.random();//0 - 0.999999

        //al li le agrega un evento
        li.addEventListener('click', () => alert('soy un li'))

        ul.appendChild(li);
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
