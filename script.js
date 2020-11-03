$(function(){

    $("#but1").click(function(){

        $("#but3").width("200");    // Il ya des raccourci en jQuery qui permettent de demander la valeur d'une propriété ou de la modifier direct. sans utiliser la fct. css(); 
        console.log($("#but3").height());
        $("#p1").css("color", "blue"); // La  fct. css(); permet d'influer directement sur les propriétés css des éléments html.
    });


    $("#but2").click(function(){

        console.log( $("#p1").css("color") );  // En enlevant la valeur de la propriété demandée, ici blue, la fct. css(); ne fera que nous renvoyer la valeur de la propriété en question. 
    });


    $("#but3").click(function(){

        $("#p1").css({            //    On peut insérer plusieurs propriétés css à un élément html en mettant un objet {} à la fct. css(); 
            "color": "red",
            "font-weight": "bold",
            "background": "yellow"
        });
    });


});