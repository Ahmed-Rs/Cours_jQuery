$(function(){      // On selectionne le fichier avec "document, ici, ready est l'évènement", et ensuite il ya la fct. dans les parenthèses du ready.
                    //On peut retirer le "document.ready" car jQuery le permet comme raccourci.
    $("#p1").mouseenter(function(){
        $("#p5").hide();

    });

    $("#p1").mouseleave(function(){
        $("#p5").show();

    });

    $("#p3").hover(function(){          //  hover est une fct. particulière au sens où on peut séparer les 2 fct. avec juste une virgule, sans répéter la synthaxe complète de deux fct comme avec le mouseenter/leave.
        $("#p4").hide();
    
    },
    function(){
        $("#p4").show();
    
    });

    $("#p6").on("click",function(){         // Avec le 'on', on définie après le type d'évènement déclencheur de l'eve. suivant, ici hide.
        $("#p7").hide();

    });

    $("#p8").on({
        mouseenter: function(){         // On reproduit les mêmes opérations que précédemment mais en condensant l'écriture.
            $("#p9").hide();
        },
        mouseleave: function(){
            $("#p9").show();
        },
        click: function(){
            $("#p2").hide();
        }

        
    });


});