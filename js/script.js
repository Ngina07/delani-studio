$(document).ready(function () {
    //Portfolio label on hover effect
    $('#portfolio span').addClass("hide");
    $('#portfolio .doings').hover(function () {
        /*fade in code*/
        $(this).find('span').removeClass('hide');
        $(this).find('.doings').addClass('imageEffect');
    }, function () {
        /*fade out code*/
        $(this).find('span').addClass('hide');
        $(this).find('.doings').removeClass('imageEffect');
    });
    // What we do toggle styling

    $(".first").click(function () {
        $("#design-icon").toggle(100);
        $("#design").toggle(100);
    });
    $(".second").click(function () {
        $("#dev-icon").toggle(100);
        $("#developement").toggle(100);
    });
    $(".third").click(function () {
        $("#product-icon").toggle(100);
        $("#product-management").toggle(100);
    });
});