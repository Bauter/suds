$(document).ready(function() {

    $(".card").mouseover(function(event) {
        event.preventDefault();
        $(this).children("img.shirtImg").css({"opacity":".6"})
        console.log("FOUND")
    });

    $(".card").mouseleave(function(event) {
        event.preventDefault();
        $(this).children("img.shirtImg").css({"opacity":"1"})
        console.log("FOUND")
    });






















}); // END OF APP.JS file