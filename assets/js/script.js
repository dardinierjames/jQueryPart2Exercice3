$(document).ready(function(){

    $('#show').click(function(){
        $('#texte').show(2000);
    });
// je cible id "show" avec le gestionnaire d'évènement "click", (au click sur la cible) et je déclare une fonction anonyme qui cible mon id "texte" avec le gestionnaire d'évènement "show" qui dévoile le paragraphe
// 2000 correspond à une tempo "2000 milliseconde" 
    $('#hide').click(function(){
        $('#texte').hide(2000);
    })
// idem mais à l'inverse le gestionnaire "hide" masque le paragraphe
});