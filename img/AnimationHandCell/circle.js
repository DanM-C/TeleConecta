var intervaloCarrusel=null;
var idxImagen = -1;
window.onload=function(){
    iniciarCarrusel();
}

function cambiarImagen() {

    var carrusel = document.getElementById('carrusel');
    if (idxImagen ==15) {
        idxImagen = 0;
    }

    else {
        idxImagen = idxImagen + 1;
    }

    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = '<img src="2.png" alt="">';
            break;

        case 1:
            carrusel.innerHTML = '<img src="3.png" alt="">';
            break;

        case 2:
            carrusel.innerHTML = '<img src="4.png" alt="">';
            break;

        case 3:
            carrusel.innerHTML = '<img src="5.png" alt="">';
            break;

        case 4:
            carrusel.innerHTML = '<img src="6.png" alt="">';
            break;

        case 5:
            carrusel.innerHTML = '<img src="7.png" alt="">';
            break;

        case 6:
            carrusel.innerHTML = '<img src="8.png" alt="">';
            break;

        case 7:
            carrusel.innerHTML = '<img src="9.png" alt="">';
            break;

        case 8:
            carrusel.innerHTML = '<img src="10.png" alt="">';
            break;

        case 9:
            carrusel.innerHTML = '<img src="11.png" alt="">';
            break;

        case 10:
            carrusel.innerHTML = '<img src="12.png" alt="">';
            break;

        case 11:
            carrusel.innerHTML = '<img src="13.png" alt="">';
            break;

        case 12:
            carrusel.innerHTML = '<img src="14.png" alt="">';
            break;

        case 13:
            carrusel.innerHTML = '<img src="15.png" alt="">';
            break;

        case 13:
        carrusel.innerHTML = '<img src="15.png" alt="">';
        break;
    }
}

function iniciarCarrusel() {
    intervaloCarrusel = setInterval(cambiarImagen,55);
}