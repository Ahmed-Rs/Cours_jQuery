$(function(){

    $("#but1").click(function(){
        $("#p1").addClass("red"); // La fct. addClass(); permet d'assigner une ou plusieurs classes à un ou plusieurs éléments
        });

    $("#but2").click(function(){
        $("#p1").removeClass("red")
    });


    $("#but3").click(function(){
        $("#p1").toggleClass("red"); // Le toggleClass(); permet à chaque fois que l'on clique dessus de switcher entre addClass et removeClass.
    });
});