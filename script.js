$(function(){

    $("#p3").click(function(){      // Le toggle(); permet de faire le contraire de l'état actuel. Si c'est invisible il le rend visible et vice-versa.
        $("#p4").toggle();      
    });

    $("#p8").fadeOut();             // La fct. fade(); change l'opacité d'un objet.
    $("#p6").hover(function(){
        $("#p8").fadeIn(3000);
    });

    $("#p1").click(function(){        // Le fadeToggle(); fait le fadeOut(); puis son contraire: le fadeIn();
        $("#p5").fadeTo("3000", 0.5);   // Pour la fct. fadeTo(); , le 1er argument est le temps, le 2nd est l'opacité.

    });

});
