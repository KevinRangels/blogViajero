/*--=============================
BANNER          
==============================*/

$(".fade-slider").jdSlider({

	isSliding: false,
	isAuto: true,
	isLoop: true,
	isDrag: false,
	interval:5000,
	isCursor: false,
	speed:3000

});

var alturaBanner = $(".fade-slider").height();

// $(".bannerEstatico").css({"height":alturaBanner+"px"})

/*--=============================
ANIMACIONES SCROLL         
==============================*/
$(window).scroll(function(){
    var posY = window.pageYOffset;
    if(posY > alturaBanner){
        $("header").css({"background":"white"});
        $("header .logotipo").css({"filter":"invert(100%)"});
        $(".fa-search, .fa-bars").css({"color":"black"});
    }else{
        $("header").css({"background":"rgba(0,0,0,.5)"});
        $("header .logotipo").css({"filter":"invert(0%)"});
        $(".fa-search, .fa-bars").css({"color":"white"});
    }
})
/*--=============================
MENU
==============================*/


$(".fa-bars").click(function(){
    $(".menu").fadeIn("fast");
})

$(".btnClose").click(function(){
    $(".menu").fadeOut("fast");

})
/*--=============================
GRID CATEGORIAS
==============================*/
$(".grid figure, .footer_grid figure").mouseover(function(){
    $(this).css({"background-position":"right bottom"})
})

$(".grid figure, .footer_grid figure").mouseout(function(){
    $(this).css({"background-position":"left top"})

})

$(".grid figure, .footer_grid figure").click(function(){
    var vinculo = $(this).attr("vinculo");
    window.location = vinculo;
})
/*--=============================
PAGINACION
==============================*/
$(".pagination").twbsPagination({
    totalPages: 10,
    visiblePages: 4,
    first: "Primero",
    last: "Ultimo",
    prev: '<i class="fas fa-angle-left"></i>',
    next: '<i class="fas fa-angle-right"></i>'
});
/*--=============================
SCROLLORAMA
==============================*/

var controller = $.superscrollorama();

controller.addTween(".contenido_inicio .container", TweenMax.from(
        $(".contenido_inicio .container"), .5, {css:{opacity: 0}}   
))

/*--=============================
SCROLL UP
==============================*/
$.scrollUp({
    scrollText:"",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
})
/*=============================
PRELOAD          
==============================*/
$("body").css({"overflow-y":"hidden"});

var cargarImg = $("img");
var cargarScript = $("script");
var cargarCss = $("link");
var cargarVideos = $("video");
var cargarAudios = $("audio");
var numItem = 0;
var valorPorcentaje = 0;
var incremento = 0;
var numCarga = 0;

var totalObjetos = [];

totalObjetos.push(cargarImg, cargarCss, cargarScript, cargarVideos, cargarAudios);

totalObjetos.forEach(funcionForEach);

function funcionForEach(item, index){
    for(var i =0; i < item.length; i++){
        numItem++;

        valorPorcentaje = 100/numItem;
    }

    for(var i =0; i < item.length; i++){
        preload(i, item);
       
    }
}
function preload(i, item){

setTimeout(function(){
    $(item[i]).ready(function(){
        numCarga++
        incremento = Math.floor(numCarga * valorPorcentaje);

        $("#preload_carga_porcentaje").html(incremento+"%");
        $("#preload_carga_relleno").css({"width":incremento+"%"});

        if(incremento >= 100){
            $("#preload").delay(350).fadeOut("slow");
            $("body").delay(350).css({"overflow":"scroll"});
        }         
    })
},i*100)
}
/*=============================
DESLIZADOR DE ARTICULOS          
==============================*/
$(".articulo_deslizador").jdSlider({
    wrap: ".slide-inner",
    slideShow: 3,
    slideToScroll: 3,
    isLoop: true,
    responsive: [{
        viewSize: 320,
        settings: {
            slideShow: 1,
            slideToScroll: 1
        }
    }]
})
/*=============================
BLOQUEAR ACCIONES
==============================*/
// BLOQUEAR CLICK DERECHO
document.oncontextmenu = function(){return false};
// BLOQUEAR TECLA
$(document).keydown(function(event){
    if(event.keyCode == "123"){
        event.preventDefault();
    }
})