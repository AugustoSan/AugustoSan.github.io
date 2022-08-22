const menuUlList =  document.querySelector( '.nav-pills' );

const menuOptions = [
    {
        name: 'HOME',
        href: '#Home'
    },
    {
        name: 'ABOUT',
        href: '#Home'
    },
    {
        name: 'SKILLS',
        href: '#Home'
    },
    {
        name: 'RESUMES',
        href: '#Home'
    },
    {
        name: 'SERVICES',
        href: '#Home'
    },
    {
        name: 'PORTAFOLIO',
        href: '#Home'
    },
    {
        name: 'TESTIMONIALS',
        href: '#Home'
    },
    {
        name: 'CONTACT ME',
        href: '#Home'
    },
    
];

const createItemsMenu = () => {
    menuOptions.forEach( createItem );
}

const createItem = ( {name, href} ) => {
    const menuItem = `<li class="nav-item">
            <a class="navbar-brand text-light" href="${ href }">${ name }</a>
        </li>`;

    const item = document.createElement( 'li' );
    item.classList.add( 'class="nav-item' );
    const itemA = document.querySelector( 'a' );
    itemA.classList.add( 'navbar-brand' );
    itemA.classList.add( 'text-light' );
    itemA.href = '#' + href;
    itemA.text = name;
    item.append( itemA );
    console.log( 'item', item );
    menuUlList.append( item );
    console.log('menuulist',menuUlList);
    // item.appendChild()

    // const div = document.createElement( 'div' );
    // div.innerHTML = menuItem;
    // console.log( div.firstChild );
    // menuUlList.appendChild(div.firstChild);
}

export {
    createItemsMenu
}