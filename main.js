$(document).ready(function () {
    $(".header-right__mobile--btn").click(function () {
        $(".header-mobile").css({ "transition": "left 0.8s", "left": "0" });
    });

    $(".header-right__mobile--btn").click(function () {
        $(".overlay").css({ "transition": "display 9s", "display": "block" });
    });

    $(".overlay").click(function () {
        $(".header-mobile").css({ "transition": "left 1s", "left": "-100%" });
        $(this).css({ "transition": "display 1s", "display": "none" });
    });

    $(".header-close").click(function () {
        $(".header-mobile").css({ "transition": "left 1s", "left": "-100%" });
        $(".overlay").css({ "transition": "display 1s", "display": "none" });
    });

    $(".header-right__demosite").click(function() {
        $(".eader-right__submenu").show();
    })
});