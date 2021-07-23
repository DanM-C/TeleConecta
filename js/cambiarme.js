var carouselInterval=null;
var idxImagen = -1;

window.onload = function() {
    startCarousel();
}

function changeImage() {

    var carrusel = document.getElementById('carrusel');
    if (idxImagen ==15) {
        idxImagen = 0;
    }

    else {
        idxImagen = idxImagen + 1;
    }

    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/1.png" alt="handcell">';
            break;

        case 1:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/2.png" alt="handcell">';
            break;

        case 2:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/3.png" alt="handcell">';
            break;

        case 3:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/4.png" alt="handcell">';
            break;

        case 4:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/5.png" alt="handcell">';
            break;

        case 5:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/6.png" alt="handcell">';
            break;

        case 6:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/7.png" alt="handcell">';
            break;

        case 7:
            carrusel.innerHTML = '<<img src="/img/AnimationHandCell/8.png" alt="handcell">';
            break;

        case 8:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/9.png" alt="handcell">';
            break;

        case 9:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/10.png" alt="handcell">';
            break;

        case 10:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/11.png" alt="handcell">';
            break;

        case 11:
            carrusel.innerHTML = '<<img src="/img/AnimationHandCell/12.png" alt="handcell">';
            break;

        case 12:
            carrusel.innerHTML = '<<img src="/img/AnimationHandCell/13.png" alt="handcell">';
            break;

        case 13:
            carrusel.innerHTML = '<img src="/img/AnimationHandCell/14.png" alt="handcell">';
            break;

        case 13:
        carrusel.innerHTML = '<img src="/img/AnimationHandCell/15.png" alt="handcell">';
        break;

        case 0:
        carrusel.innerHTML = '<img src="/img/AnimationHandCell/1.png" alt="handcell">';
        break;
    }
}

function startCarousel() {
    carouselInterval = setInterval(changeImage,55);
}