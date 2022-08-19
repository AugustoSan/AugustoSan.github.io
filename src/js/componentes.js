// imports
import { educacionHtml } from "./Educacion";
import { redSocialHtml } from "./redSocial";

// Referencias
const divHome        = document.querySelector('#Home');
const divPerfil      = document.querySelector('#Perfil');
const divTecnologias = document.querySelector('#Tecnologias');
const divEducacion   = document.querySelector('#Educacion');
const divExperiencia = document.querySelector('#Experiencia');


const menuNav      = document.querySelector('nav'); 

const imgEscuelas = document.querySelectorAll('.imgEducacion');

const linkedin  = document.querySelector('#linkedinLogo');
const gmail     = document.querySelector('#gmailLogo');
const facebook  = document.querySelector('#facebookLogo');

const imgPerfil = document.querySelector('#imgPerfil');






const menuHtml = () =>{
    ocultaDivs();
}

const perfilHtml = () => {
    imgPerfil.width = 200;
}


const widthImgs = () => {
    linkedin.width  = 50;
    gmail.width     = 50;
    facebook.width  = 50;
    imgEscuelas.forEach( ( img ) => {
        img.style.width = '80%';
        console.log(img);
    });
}

const ocultaDivs = () => {
    divHome.hidden          = true;
    divPerfil.hidden        = true;
    divTecnologias.hidden   = true;
    divEducacion.hidden     = true;
    divExperiencia.hidden   = true;
}

// Eventos
menuNav.addEventListener( 'click', ( event ) =>{
    const seleccion = event.target.text;
    console.log( seleccion );
    switch( seleccion ){
        case 'Inicio':
            ocultaDivs();
            divHome.hidden = false;
            break;
        case 'Perfil':
            ocultaDivs();
            divPerfil.hidden = false;
            break;
        case 'Tecnologías':
            ocultaDivs();
            divTecnologias.hidden = false;
            break;
        case 'Educación':
            ocultaDivs();
            divEducacion.hidden = false;
            break;
        case 'Experiencia':
            ocultaDivs();
            divExperiencia.hidden = false;
            break;
    }
});


export const init = () => {
    widthImgs();
    menuHtml();
    perfilHtml();
    educacionHtml();
    redSocialHtml();
}