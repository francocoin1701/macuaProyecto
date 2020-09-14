// save slader in var
var slider = $("#slider");
var parrafoSlider = $("#parrafoSider")
var siguiente = $("#btn-next");
var anterior = $("#btn-prev");
var ant_erior = $("#ant_erior")
var des_pues = $("#des_pues")
var sliPerros = $("#sliPerros")
var sliPapas = $("#sliPapas")
var ant = $("#ant")
var des = $("#des")
var sliCarnes = $("#sliCarnes")
var ante = $("#ante")
var desp = $("#desp")
var sliOtros = $("#sliOtros")
var despuesd = $("#despuesd")
var antesd = $("#antesd")


$("#slider section:last").insertBefore("#slider section:first")

slider.css("margin-lef", "-"+100+"%");

function moverD(){
    slider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#slider section:first").insertAfter("#slider section:last");
        slider.css("margin-lef", "-"+100+"%");
     
    });
}
function moverDparrafo(){
    parrafoSlider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#parrafoSider section:first").insertAfter("#parrafoSider section:last");
        parrafoSlider.css("margin-lef", "-"+100+"%");
     
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

function moverIparrafo(){
    parrafoSlider.animate({
        marginLeft:0
    },700,function(){
        $("#parrafoSider section:last").insertBefore("#parrafoSider section:first");
        parrafoSlider.css("margin-lef","-"+100+"%"); 
                     
    });
}
siguiente.on("click",function(){
    moverD();
    moverDparrafo();

});
anterior.on("click",function(){
    moverI();
    moverIparrafo();
});

//perros
$("#sliPerros section:last").insertBefore("#sliPerros section:first")

sliPerros.css("margin-lef", "-"+100+"%");

function moverDperros(){
    sliPerros.animate({
        marginLeft:"-"+0+"%"
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

//papasLocas
$("#sliPapas section:last").insertBefore("#sliPapas section:first")

sliPapas.css("margin-lef", "-"+100+"%");

function moverDpapas(){
    sliPapas.animate({
        marginLeft:"-"+0+"%"
    },600,function(){
        $("#sliPapas section:first").insertAfter("#sliPapas section:last");
        sliPapas.css("margin-lef", "-"+100+"%");
     
    });
};    

function moverIpapas(){
    sliPapas.animate({
        marginLeft:0
    },600,function(){
        $("#sliPapas section:last").insertBefore("#sliPapas section:first");
        sliPapas.css("margin-lef","-"+100+"%");               
    });
};
des.on("click",function(){
    moverDpapas();
});
ant.on("click",function(){
    moverIpapas();
});

//carnes
$("#sliCarnes section:last").insertBefore("#sliCarnes section:first")

sliCarnes.css("margin-lef", "-"+100+"%");

function moverDcarnes(){
    sliCarnes.animate({
        marginLeft:"-"+0+"%"
    },600,function(){
        $("#sliCarnes section:first").insertAfter("#sliCarnes section:last");
        sliCarnes.css("margin-lef", "-"+100+"%");
     
    });
};    

function moverIcarnes(){
    sliCarnes.animate({
        marginLeft:0
    },600,function(){
        $("#sliCarnes section:last").insertBefore("#sliCarnes section:first");
        sliPapas.css("margin-lef","-"+100+"%");               
    });
};
desp.on("click",function(){
    moverDcarnes();
});
ante.on("click",function(){
    moverIcarnes();
});

//otros
$("#sliOtros section:last").insertBefore("#sliOtros section:first")

sliOtros.css("margin-lef", "-"+100+"%");

function moverDotros(){
    sliOtros.animate({
        marginLeft:"-"+0+"%"
    },600,function(){
        $("#sliOtros section:first").insertAfter("#sliOtros section:last");
        sliOtros.css("margin-lef", "-"+100+"%");
     
    });
};    

function moverIotros(){
    sliOtros.animate({
        marginLeft:0
    },600,function(){
        $("#sliOtros section:last").insertBefore("#sliOtros section:first");
        sliOtros.css("margin-lef","-"+100+"%");               
    });
};
despuesd.on("click",function(){
    moverDotros();
});
antesd.on("click",function(){
    moverIotros();
});


