/*
creamos la funcion (Componente)
*/
function Paginator(props) {
    //para desestructurar un objeto
    //console.log('Paginator', props);==>me muestra las partes del objeto    
    
    //genero dos variables para mostrar la pag actual y el total de pag */
    /*const currentPage = props.page;
    const totalPage = props.total_pages;
    console.log(currentPage, totalPage);*/

    /*en una sola variable digo lo anterior */
    const {page, total_pages} = props;
    //console.log(page, total_pages);

    const prev = `
        <li class="page-item ${page > 1 ? '' : 'disabled'}">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true" ${page > 1 ? `onclick="search(${page - 1})"` : ''}>
                Previous
            </a>
        </li>`
    ;

    const next = 
        `<li class="page-item ${page < total_pages ? '' : 'disabled'}">
            <a class="page-link" href="#" ${page < total_pages ? `onclick="search(${page +1})"` : ''}>
                Next
            </a>
        </li>`
    ;

    const html = 
    `
    <nav aria-label="...">
        <ul class="pagination justify-content-center">
            ${prev} 
            ${Pages(page,total_pages )}  
            ${next} 
        </ul>
    </nav>
    `;

    return (
        html
    )
}

function Pages(currentPage, totalPage){
    let html = ``;
    for(let i=1;i<=totalPage;i++){
        html +=`<li class="page-item ${i === currentPage ? 'active' : ''}" aria-current="page">
                    <a class="page-link" href="#" ${i !== currentPage ? `onclick="search(${i})"` : ''}>
                        ${i}
                    </a>
                </li>`;
    }
    return (
        html
    )
}