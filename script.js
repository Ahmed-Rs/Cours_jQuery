$(function(){      // On selectionne le fichier avec "document, ici, ready est l'évènement", et ensuite il ya la fct. dans les parenthèses du ready.
                    //On peut retirer le "document.ready" car jQuery le permet comme raccourci.
    $("#p1").click(function(){
        $("#p5").hide();           // Création d'un évènement dans un évènement. Le p5 disparait quand on clique sur le p1.

    });             // On selectionne le selector class .par1.
});