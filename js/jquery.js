
var animado = document.querySelectorAll(".animado");
jQuery(window).scroll(function () {
    var windowScrollPosTop = jQuery(window).scrollTop();

    if (windowScrollPosTop >= 150) {
        jQuery("#menu").addClass('bg-transition');
        
        $('#menu').css({
            "transition": "all .4s ease"
        });
        $('.logo-batse').css({
            "opacity": "1"
        });
        $('.navbar-light .navbar-nav .nav-link').css({
            "color": "#fff"
        });
        $('.navbar-light .navbar-nav .seleccionado').css({
            "color": "#fff"
        });
    }
    else {
        $('#menu').removeClass('bg-transition');
       
        $('.logo-batse').css({
            "opacity": "0"
        });
        $('.navbar-light .navbar-nav .nav-link').css({
            "color": "#000"
        });
        $('.navbar-light .navbar-nav .seleccionado').css({
            "color": "rgb(204, 122, 122)"
        });
        $('#menu').css({
            "transition": "all .4s ease"
        });

        $('.navbar-light .navbar-nav .nav-link').removeClass('text-item');
    }
});
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let altura = animado[i].offsetTop;
        if (altura - 600 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}
window.addEventListener('scroll', mostrarScroll);
//********************************Mostrar Foto********************************* */
var foto = document.querySelectorAll(".foto");
function mostrarFoto() {
    for (var i = 0; i < foto.length; i++) {
        let altura = 0;
        if (altura == 0) {
            foto[i].style.opacity = 1;
            foto[i].classList.add("mostrarAbajo");
        }
    }
}
window.addEventListener('load', mostrarFoto);
//*****************************************************Slider */
var slider = document.querySelectorAll(".slider");

function mostrarSlider() {
    for (var i = 0; i < slider.length; i++) {
        let altura = 0;
        if (altura == 0) {
            slider[i].style.opacity = 1;
            slider[i].classList.add("mostrarAbajo");
        }
    }
}
window.addEventListener('load', mostrarSlider);
//***********************************************Mensaje de contacto */
$(document).ready(function () {
    $(".toast").toast({ autohide: false });
    $(".toast").toast("show");
});
//******************************************************** */
$(document).ready(function () {
    $(".toast-contact").toast({ autohide: false });
    $(".toast-contact").toast("show");
});

//********************************************************/
function mostrarModal() {
    console.log('hola');
    $(document).ready(function () {

        $("#exampleModal").modal('show');
    });
}




