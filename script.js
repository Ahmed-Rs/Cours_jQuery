$(function(){

    $("#p1").click(function(){
        $("#p5").hide("1000", function(){     // Ajout d'effets aux Events. Ici on a usé d'un callback, c'est à dire insérer une event dans un autre event. Il s'enclenche dès la fin du premier event.
            $("#p2").hide("1000", function(){
                $('#p7').hide("2000");        // On peut mettre autant de callback que l'on souhaite.
            });          
        });
    });
    
});
