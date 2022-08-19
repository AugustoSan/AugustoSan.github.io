const divTecnologias = document.querySelector('.tecnologiasDiv');

const tecnologias = [
    {
        img: 'logo_android.png', 
        nombre: 'Android Studio'
    },
    {
        img: 'logo_api.png',
        nombre: 'API Rest'
    },
    {
        img: 'logo_c++.png',
        nombre: 'C++'
    }, 
    {
        img: 'logo_csharp.png',
        nombre: 'C#'
    },
    {
        img: 'logo_debian.png',
        nombre: 'Debian'
    },
    {
        img: 'logo_flutter.svg',
        nombre: 'Flutter'
    }, 
    {
        img: 'logo_git.png',
        nombre: 'Git'
    },
    {
        img: 'logo_html.png',
        nombre: 'HTML'
    },
    {
        img: 'logo_java.png',
        nombre: 'Java'
    }, 
    {
        img: 'logo_js.png',
        nombre: 'JavaScript'
    },
    {
        img: 'logo_json.png',
        nombre: 'JSON'
    },
    {
        img: 'logo_linux_mint.png',
        nombre: 'Linux Mint'
    }, 
    {
        img: 'logo_mx_linux.png',
        nombre: 'Mx Linux'
    },
    {
        img: 'logo_mysql.png',
        nombre: 'MySQL'
    },
    {
        img: 'logo_php.png',
        nombre: 'PHP'
    },
    {
        img: 'logo_sql_server.png',
        nombre: 'SQL Server'
    },
];

const tecnologiaHtml = () =>{
    tecnologias.forEach( creaDivTecnologia );
}


const creaDivTecnologia = ( { img, nombre } ) => {

    const imageObj = new Image();
    imageObj.src = 'assets/img/tecnologias/' + img ;

    imageObj.onload = function() {
        escala( imageObj, 100 );
    }
    imageObj.classList.add('m-2')
    divTecnologias.append( imageObj );
}


const escala = ( img, maxPixels ) => {
    if( img.width >= img.height ){
        const newHeigth = ( img.height * maxPixels ) / img.width;
        img.width  = maxPixels;
        img.height = newHeigth;
    }
    else{
        const newWidth = ( img.width * maxPixels ) / img.height;
        img.height  = maxPixels;
        img.width   = newWidth;
    }
}

export {
    tecnologiaHtml
}