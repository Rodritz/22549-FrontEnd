/*
creamos la funcion (Componente)
*/
function Paginator(props) {
            
    const {page, total_pages} = props;

    const prev = `
        <li class="page-item ${page > 1 ? '' : 'disabled'}">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>`
    ;

    const next = 
        `<li class="page-item ${page < total_pages ? '' : 'disabled'}">
            <a class="page-link" href="#">Next</a>
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
                    <a class="page-link" href="#">${i}</a>
                </li>`;
    }
    return (
        html
    )
}