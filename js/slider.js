// save slader in var
var slider = $("#slider");
var siguiente = $("#btn-next");
var anterior = $("#btn-prev");


$("slider section:last").insertBefore("#slider section:first")

slider.css("margin-lef", "-"+100+"%");

function moverD(){
    slider.animate({
        marginLeft:"-"+200+"%"
    },700,function(){
        
    });
}

siguiente.on("click",function(){
    moverD();
});
