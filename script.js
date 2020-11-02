$(function(){

    $("#start").click(function(){
        $(".d1").animate({left:'600px'}, 3000); // Ici les animations se déroulent les unes à la suite des autres et non simultanément comme dans le précédent commit.
        $(".d1").animate({opacity: 0.2}, 3000);
        $(".d1").animate({width:'200px'}, 3000);
        $(".d1").animate({height:'200px'}, 3000);

    });

    $("#stop").click(function(){
        $(".d1").stop(true, true);    // Sans le true, il ya false par default et le stop n'arrêtera que la première animation et pas les autres. Avec le 1er true, il stope la 1ère anim. là où on a appuyé ainsi que les anim. qui devaient suivre.
    });                         // Avec le 2e true, il laisse la première anim. arriver à son terme mais arrête les suivantes.

    $("#slide").click(function(){
        $(".d2").slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
    });         // Pour faire s'enchaîner des EFFECTS, on peut mettre sur la même ligne, séparés d'un point, les différentes fct. qui entrent en jeu.

});
