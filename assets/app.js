$(document).ready(function() {

    $(".card").mouseover(function(event) {
        event.preventDefault();
        $(this).children("img.shirtImg").css({"opacity":".6"})
    });

    $(".card").mouseleave(function(event) {
        event.preventDefault();
        $(this).children("img.shirtImg").css({"opacity":"1"})
    });






















}); // END OF APP.JS file