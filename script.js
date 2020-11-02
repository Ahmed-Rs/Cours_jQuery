$(function(){

    $("#start").click(function(){
        var myVar = $("div").html();    // La fct. html(); nous fait afficher le code html que renfeme "div".
        console.log(myVar);

        var myVar2 = $("#myInput").val(); // La fct. val(); nous affiche à la console la valeur de l'input.
        console.log(myVar2);

        var myVar3 = $("div").attr("style");  // La fct. attr(); nous permet d'afficher la valeur de l'attribut d'un élément.
        console.log(myVar3);
    });

});
