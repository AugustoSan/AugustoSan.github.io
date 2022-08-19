// <a href="https://www.linkedin.com/in/augusto-sanchez-julian-495b55115/"><img id="linkedinLogo" src="assets/img/redes_sociales/linkedin.svg" alt="" srcset="" class="icon m-1"></a>
/* <a href="mailto:augustosanchez103@gmail.com?Subject=Web%20personal"><img id="gmailLogo" src="assets/img/redes_sociales/gmail.svg" alt="" srcset="" class="icon m-1"></a>
<a href="https://www.facebook.com/sanchez.agus1"><img id="facebookLogo" src="assets/img/redes_sociales/facebook.svg" alt="" srcset="" class="icon m-1"></a> */

const divRedesSociales = document.querySelector('.divRedesSociales');

const redesSociales = [
    {
        img: 'linkedin.svg',
        href: 'https://www.linkedin.com/in/augusto-sanchez-julian-495b55115/', 
    },
    {
        img: 'gmail.svg',
        href: 'mailto:augustosanchez103@gmail.com?Subject=Web%20personal', 
    },
    {
        img: 'facebook.svg',
        href: 'https://www.facebook.com/sanchez.agus1', 
    },
];

const redSocialHtml = () =>{
    redesSociales.forEach( creaDivRedSocial );
}


const creaDivRedSocial = ( { img, href } ) => {
    const elementoHtml = `
    <a href="${ href }">
        <img src="assets/img/redes_sociales/${ img }" alt="" srcset="" class="icon m-1" width="50px">
    </a>`;
    const div = document.createElement('div');
    div.innerHTML = elementoHtml;
    divRedesSociales.append( div.firstChild );
}

export {
    redSocialHtml
}