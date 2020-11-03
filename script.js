$(function(){

    $("#start1").click(function(){

        $("#p1").parents(".special").css("border-color", "green "); // En ciblant les parents, on peut aussi en selcetionner certains par ex. avec une classe déterminée.
        // $("#p4").siblings().css("border-color", "yellow");  // La fct. siblings(); ccible les frères de l'élément sélectionné sauf lui-même.
        // $("#p4").next().css("border-color", "yellow"); // La fct. next(); cible le frère juste après le #p4.
        // $("p").first().css("border-color", "yellow");  // first(); cible le premier élément de tous les "p". last(); aurait ciblé le dernier.
        // $("p").ep(2).css("border-color", "yellow");  // On cible ici le 3e paragraphe parmis les "p". (On compte à partir de zéro).
        // $("p").filter(".fil").css("border-color", "yellow"); // On filtre ici les paragraphes qui portent la classe ".fil". Pour cibler ceux qui n'ont PAS cette class, on remplace filter(); par not();
    
    });

    $("#start2").click(function(){

        $("#div4").children().css("border-color","blue");  // On séléctionne les enfants directs de #div4.
        
    });

    $("#start3").click(function(){

        $("#div4").find("p").css("border-color","blue");  // On fait une recherche des "p" parmis tous les descendants de #div4 et si on veut les sélectionner tous, on utlisie ("*") comme arg. à la fct. find();
    
    });


});