$(function($) {
    $('.PostStream .Avatar').hover(
        function(){
            $(this).parents('.PostStream-item').find('.UserCard').addClass('in');
        }
    ).mouseout(function(){
        $(this).parents('.PostStream-item').find('.UserCard').removeClass('in');
    })
});