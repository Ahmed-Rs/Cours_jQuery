$(function(){

    $("#start").click(function(){
        var myVar = $("div").html();    // La fct. html(); nous fait afficher le code html que renfeme "div".
        console.log(myVar);

        var myVar2 = $("#myInput").val(); // La fct. val(); nous affiche à la console la valeur de l'input.
        console.log(myVar2);

        var myVar3 = $("div").attr("style");  // La fct. attr(); nous permet d'afficher la valeur de l'attribut d'un élément.
        console.log(myVar3);

        $("#p1").text("Voici mon nouveau texte"); // La fct. text(); utilisée sans arguments affiche le contenu textuel du #p1, sans le html. Or, on peut modifier le contenu du #p1 en mettant en arg. le nouveau texte souhaité.
        $("#p2").html("Voila mon <b>nouveau</b> texte"); // Ici on change le code html avec la fct. idoine.
        $("#myInput").val("Nouvelle valeur");   //De même on change la valeur de l'Input grâce à la fct. val();
    
        $("div").append("<p>Mon paragraphe ajoute</p>") // Avec append(); on peut ajouter un élément html. Elle le place par défaut à la fin de la div le contenant.
        $("div").prepend("<p>Mon paragraphe ajoute</p>"); // Le prepend(); le place en première position dans la div.
        $("div").after("<p>Mon paragraphe1</p>");   // le after(); met l'élément html sélectionné après la div. Il exite également before();

        $("#p2").remove();      // la fct. remove(); retire l'élément html complètement. Elle ne fait pas que le cacher.
                                // Il existe aussi la fct. empty(); qui permet de vider l'élément sélectionné sans le supprimer. Par ex. vider une div de ses paragraphes, tout en la laissant exister.

    });

});
