function mostrarMensaje() {
    alert('Esta página aún está en contrucción');
}

var carouselInterval = null;
var idxImage = -1;
window.onload = function() {
    startCarousel();
}

function changeImage(){
    var carousel = document.getElementById('carousel');
    if (idxImage == 3) {
        idxImage = 0;
    }

    else {
        idxImage = idxImage + 1
    }

    switch (idxImage) {

        case 0:
            carousel.innerHTML = '<img  class="banner-one" src="/img/Banner5.png" alt="">';
            break

        case 1:
            carousel.innerHTML = '<img  class="banner-one" src="/img/Banner6.png" alt="">';
            break

        case 2:
            carousel.innerHTML = '<img  class="banner-one" src="/img/Banner7.png" alt="">';
            break

        case 3:
            carousel.innerHTML = '<img  class="banner-one" src="/img/Banner3.png" alt="">';
            break
    }
}

function startCarousel() {
    carouselInterval = setInterval(changeImage,5000)
}