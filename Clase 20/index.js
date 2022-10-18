//invoco la funcion inicial
render();

function buscar(clave) {
    // alert(`buscando algo en index.js: ${clave}`);

    //data.js > USER_DATA.data
    //funciones flecha / arrow function
    const usersFiltered = USERS_DATA.data
    .filter(user => user.first_name.toLowerCase().includes(clave.toLowerCase()) || user.last_name.toLowerCase().includes(clave.toLowerCase()));

    const htmlUsers = Users(usersFiltered);
    document.getElementById('users').innerHTML = htmlUsers;
}

//disparar a las demas funciones
function render() {
    console.log('render()');

    //usar al componente Navbar
    const htmlNavbar = Navbar('Mi primer pseudocomponente',buscar);
    renderComponent('navbar',htmlNavbar);
 
    search('https://reqres.in/api/users');
}

function search(url) {
    //ahora invoco a 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const htmlUsers = Users(data.data);
            renderComponent('users',htmlUsers);
            
            //ahora "cargo" el componente Paginator()
            const htmlPaginator = Paginator(data);
            renderComponent('paginator',htmlPaginator);
        }
    );
}

function renderComponent(id, htmlComponent) {
    document.getElementById(id).innerHTML = htmlComponent;
}
