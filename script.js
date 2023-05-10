$(document).ready(function() {
    $('.inactive').mouseenter(function(){
        $('#active').removeClass('underline');
        $(this).addClass('underline');
    });
    $('.inactive').mouseleave(function(){
        $('#active').addClass('underline');
        $(this).removeClass('underline');
    });
});