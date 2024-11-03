const $btnNavbar = document.getElementById('nav-toggle');
const $navBar = document.getElementById('navbar');


$btnNavbar.addEventListener('change', () => {

    if(window.innerWidth > 768) {
        // no añadir div overlay
        return
    }

    if($btnNavbar.checked) {

        // Caso overlay: Crear overlay
        const $overlay = document.createElement('div');
        $overlay.id = 'overlay';
        $btnNavbar.parentElement.appendChild($overlay);

        //eliminar en caso de existencia
        $overlay.classList.remove('hide');

        document.body.style.overflow = 'hidden';
        return
    }

    if(!$btnNavbar.checked) {

        document.body.style.overflow = 'auto';
        // Caso overlay: añadir animación hide y eliminar overlay
        const $overlay = document.getElementById('overlay');
        $overlay.classList.add('hide');
        setTimeout(() => {
            $btnNavbar.parentElement.removeChild($overlay);
        }, 400);
        return
    }

});