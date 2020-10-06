// save slader in var
var slider = $("#slider");
var parrafoSlider = $("#parrafoSider")
var siguiente = $("#btn-next");
var anterior = $("#btn-prev");

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

// PERROS CALIENTES
var Cslider = $("#Cslider");
var CparrafoSlider = $("#CparrafoSider")
var Csiguiente = $("#Cbtn-next");
var Canterior = $("#Cbtn-prev");

$("#Cslider section:last").insertBefore("#Cslider section:first")

Cslider.css("margin-lef", "-"+100+"%");

function CmoverD(){
    Cslider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#Cslider section:first").insertAfter("#Cslider section:last");
        Cslider.css("margin-lef", "-"+100+"%");
     
    });
}
function CmoverDparrafo(){
    CparrafoSlider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#CparrafoSider section:first").insertAfter("#CparrafoSider section:last");
        CparrafoSlider.css("margin-lef", "-"+100+"%");
     
    });
}

function CmoverI(){
    Cslider.animate({
        marginLeft:0
    },700,function(){
        $("#Cslider section:last").insertBefore("#Cslider section:first");
        Cslider.css("margin-lef","-"+100+"%"); 
                     
    });
}

function CmoverIparrafo(){
    CparrafoSlider.animate({
        marginLeft:0
    },700,function(){
        $("#CparrafoSider section:last").insertBefore("#CparrafoSider section:first");
        CparrafoSlider.css("margin-lef","-"+100+"%"); 
                     
    });
}
Csiguiente.on("click",function(){
    CmoverD();
    CmoverDparrafo();

});
Canterior.on("click",function(){
    CmoverI();
    CmoverIparrafo();
});

//PAPAS LOCAS
var Lslider = $("#Lslider");
var LparrafoSlider = $("#LparrafoSider")
var Lsiguiente = $("#Lbtn-next");
var Lanterior = $("#Lbtn-prev");

$("#Lslider section:last").insertBefore("#Lslider section:first")

Lslider.css("margin-lef", "-"+100+"%");

function LmoverD(){
    Lslider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#Lslider section:first").insertAfter("#Lslider section:last");
        Lslider.css("margin-lef", "-"+100+"%");
     
    });
}
function LmoverDparrafo(){
    LparrafoSlider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#LparrafoSider section:first").insertAfter("#LparrafoSider section:last");
        LparrafoSlider.css("margin-lef", "-"+100+"%");
     
    });
}

function LmoverI(){
    Lslider.animate({
        marginLeft:0
    },700,function(){
        $("#Lslider section:last").insertBefore("#Lslider section:first");
        Lslider.css("margin-lef","-"+100+"%"); 
                     
    });
}

function LmoverIparrafo(){
    LparrafoSlider.animate({
        marginLeft:0
    },700,function(){
        $("#LparrafoSider section:last").insertBefore("#LparrafoSider section:first");
        LparrafoSlider.css("margin-lef","-"+100+"%"); 
                     
    });
}
Lsiguiente.on("click",function(){
    LmoverD();
    LmoverDparrafo();

});
Lanterior.on("click",function(){
    LmoverI();
    LmoverIparrafo();
});

//CARNES
var Oslider = $("#Oslider");
var OparrafoSlider = $("#OparrafoSider")
var Osiguiente = $("#Obtn-next");
var Oanterior = $("#Obtn-prev");

$("#Oslider section:last").insertBefore("#Oslider section:first")

Oslider.css("margin-lef", "-"+100+"%");

function OmoverD(){
    Oslider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#Oslider section:first").insertAfter("#Oslider section:last");
        Oslider.css("margin-lef", "-"+100+"%");
     
    });
}
function OmoverDparrafo(){
    OparrafoSlider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#OparrafoSider section:first").insertAfter("#OparrafoSider section:last");
        OparrafoSlider.css("margin-lef", "-"+100+"%");
     
    });
}

function OmoverI(){
    Oslider.animate({
        marginLeft:0
    },700,function(){
        $("#Oslider section:last").insertBefore("#Oslider section:first");
        Oslider.css("margin-lef","-"+100+"%"); 
                     
    });
}

function OmoverIparrafo(){
    OparrafoSlider.animate({
        marginLeft:0
    },700,function(){
        $("#OparrafoSider section:last").insertBefore("#OparrafoSider section:first");
        OparrafoSlider.css("margin-lef","-"+100+"%"); 
                     
    });
}
Osiguiente.on("click",function(){
    OmoverD();
    OmoverDparrafo();

});
Oanterior.on("click",function(){
    OmoverI();
    OmoverIparrafo();
});

// THE END
var Hslider = $("#Hslider");
var HparrafoSlider = $("#HparrafoSider")
var Hsiguiente = $("#Hbtn-next");
var Hanterior = $("#Hbtn-prev");

$("#Hslider section:last").insertBefore("#Hslider section:first")

Hslider.css("margin-lef", "-"+100+"%");

function HmoverD(){
    Hslider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#Hslider section:first").insertAfter("#Hslider section:last");
        Hslider.css("margin-lef", "-"+100+"%");
     
    });
}
function HmoverDparrafo(){
    HparrafoSlider.animate({
        marginLeft:"-"+0+"%"
    },700,function(){
        $("#HparrafoSider section:first").insertAfter("#HparrafoSider section:last");
        HparrafoSlider.css("margin-lef", "-"+100+"%");
     
    });
}

function HmoverI(){
    Hslider.animate({
        marginLeft:0
    },700,function(){
        $("#Hslider section:last").insertBefore("#Hslider section:first");
        Hslider.css("margin-lef","-"+100+"%"); 
                     
    });
}

function HmoverIparrafo(){
    HparrafoSlider.animate({
        marginLeft:0
    },700,function(){
        $("#HparrafoSider section:last").insertBefore("#HparrafoSider section:first");
        HparrafoSlider.css("margin-lef","-"+100+"%"); 
                     
    });
}
Hsiguiente.on("click",function(){
    HmoverD();
    HmoverDparrafo();

});
Hanterior.on("click",function(){
    HmoverI();
    HmoverIparrafo();
});



