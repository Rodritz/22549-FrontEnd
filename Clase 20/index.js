//invoco la funcion inicial
render();

//la funcion render dispara las demas funciones
function render() {
    console.log('render()');

    //usar al componente Navbar
    const htmlNavbar = Navbar('Mi primer pseudocomponente',buscar);
    renderComponent('navbar',htmlNavbar);

    search(1);
}    

function buscar(clave) {
    // alert(`buscando algo en index.js: ${clave}`);

    //data.js > USER_DATA.data
    //funciones flecha / arrow function
    const usersFiltered = USERS_DATA.data
    .filter(user => user.first_name.toLowerCase().includes(clave.toLowerCase()) || user.last_name.toLowerCase().includes(clave.toLowerCase()));

    const htmlUsers = Users(usersFiltered);
    renderComponent('users', htmlUsers);
}
function search(page) {
    //ahora invoco a 
    
    //debugger;
    const url = ` https://reqres.in/api/users${page >=1 ? `?page=${page}` : ''}`;
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

/*creamos una funcion para evitar repetir el codigo 
"documenteGet....", que va a tener dos parametros, 
el primero (id) hara referencia al id que queremos linkear, y  
el segundo (htmlcomponent) hara referencia a la variable */ 
function renderComponent(id, htmlComponent) {
    document.getElementById(id).innerHTML = htmlComponent;
}
