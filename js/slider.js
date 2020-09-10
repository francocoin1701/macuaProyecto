// save slader in var
var slider = $("#slider");
var siguiente = $("#btn-next");
var anterior = $("#btn-prev");
var ant_erior = $("#ant_erior")
var des_pues = $("#des_pues")
var sliPerros = $("#sliPerros")


$("#slider section:last").insertBefore("#slider section:first")

slider.css("margin-lef", "-"+100+"%");

function moverD(){
    slider.animate({
        marginLeft:"-"+200+"%"
    },700,function(){
        $("#slider section:first").insertAfter("#slider section:last");
        slider.css("margin-lef", "-"+100+"%");
     
    });
}

function moverI(){
    slider.animate({
        marginLeft:0
    },700,function(){
        $("#slider section:last").insertBefore("#slider section:first");
        slider.css("margin-lef","-"+100+"%");               
    });
}
siguiente.on("click",function(){
    moverD();
});
anterior.on("click",function(){
    moverI();
});

$("#sliPerros section:last").insertBefore("#sliPerros section:first")

sliPerros.css("margin-lef", "-"+100+"%");

function moverDperros(){
    sliPerros.animate({
        marginLeft:"-"+200+"%"
    },700,function(){
        $("#sliPerros section:first").insertAfter("#sliPerros section:last");
        sliPerros.css("margin-lef", "-"+100+"%");
     
    });
};    

function moverIperros(){
    sliPerros.animate({
        marginLeft:0
    },700,function(){
        $("#sliPerros section:last").insertBefore("#sliPerros section:first");
        sliPerros.css("margin-lef","-"+100+"%");               
    });
};
des_pues.on("click",function(){
    moverDperros();
});
ant_erior.on("click",function(){
    moverIperros();
});

