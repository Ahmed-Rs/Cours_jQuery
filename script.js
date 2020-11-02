$(function(){

    $("button").click(function(){
        $("div").animate({      // On utilise la fct. animat(); qui prend comme arguments, d'abord l'objet auquel on peut apporter plusieurs modif. , puis le temps d'execution, puis si on veut une troisième argument qui est un callback.
            left: '500px',         // qui s'executera une fois que l'animation est terminée.
            opacity: '0.3',
            width: '+=150',
            height: '+=150px'
        },5000);
    });

});
