var carouselInterval = null;
var idxImagen = -1;

window.onload = nextCarousel()

function nextCarousel() {
    clearInterval(carouselInterval)
    carouselInterval = setInterval(nextImage,2500);
}

function stopCarousel() {
    clearInterval(carouselInterval)
}

function nextImage() {
    var carrusel = document.getElementById('carousel');

    if (idxImagen == 1) {
        idxImagen = 0;
    }

    else {
        idxImagen = idxImagen + 1;
    }

    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = '<img src="/img/LittleBanner2.png" alt="">';
            break;

        case 1:
            carrusel.innerHTML = '<img src="/img/LittleBanner1.png" alt="">';
            break;
    }
}

function afterImage() {
    clearInterval(carouselInterval);
    var carrusel = document.getElementById('carousel');

    if (idxImagen == -1) {
        idxImagen = 0;
    }

    else {
        idxImagen = idxImagen - 1;
    }

    switch (idxImagen) {
        case -1:
            carrusel.innerHTML = '<img src="/img/LittleBanner1.png" alt="">';
            break;

        case 0:
            carrusel.innerHTML = '<img src="/img/LittleBanner2.png" alt="">';
            break;
    }
}