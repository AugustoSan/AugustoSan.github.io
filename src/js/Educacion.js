const divEducacionBody = document.querySelector('.educacionDiv');

const escuelas = [
    {
        img: 'logo_de_la_BUAP.svg',
        nombre: 'Benemérita Universidad Autónoma de Puebla', 
        direccion: 'Av San Claudio s/n, Cd Universitaria, La Hacienda, 72592 Puebla, Pue.', 
        telefono: '(222) 229 5500', 
        periodo: 'Agosto-2015 - Julio-2021'
    },
    {
        img: 'escudo_epfaa.png',
        nombre: 'Escuela Preparatoría Federal por Cooperación "Antonio Audirac"', 
        direccion: 'Calle Guadalupe Victoria S/N, Centro, 73800 Teziutlán, Pue.', 
        telefono: '(231) 313 1819', 
        periodo: 'Agosto-2012 - Julio-2015'
    },
    {
        img: 'escudo_secu.png',
        nombre: 'Escuela Secundaria "Lic. Benito Juarez no.11"', 
        direccion: 'Reforma 93, Sta Maria Nativitas, 53020 Naucalpan de Juárez, Méx.', 
        telefono: '55 5560 2520', 
        periodo: 'Agosto-2009 - Julio-2012'
    },
];

const educacionHtml = () =>{
    escuelas.forEach( creaDivEscuela );
}


const creaDivEscuela = ( { img, nombre, direccion, telefono, periodo } ) => {
    const elementoHtml = `
    <li class="list-group-item">
        <div class="mb-3">
            <div class="row g-0">
                <div class="col-md-3">
                    <img src="assets/img/${ img }" class="img-fluid rounded-start" width="200px">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${ nombre }</h5>
                        <p class="card-text">${ direccion }</p>
                        <p class="card-text">Tel: ${ telefono }</p>
                        <p class="card-text">${ periodo }</p>   
                    </div>
                </div>
            </div>
        </div>
    </li>`;
    const div = document.createElement('div');
    div.innerHTML = elementoHtml;
    divEducacionBody.append( div);
}

export {
    educacionHtml
}