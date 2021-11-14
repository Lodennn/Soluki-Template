/*global $, alert, console*/

$(function () {

    'use strict';
    /* ================= VARIABLES ================= */
    var video = $(".video"),
        nav = $(".navigation"),
        upperNav = $(".links > li"),
        brand = $(".navigation .brand"),
        icons = $(".navigation .icons"),
        domainIcon = $(".domain form i"),
        domainList = $(".domain .domain-list"),
        domainElem = $(".domain .domain-list ul li"),
        down = $(".video .down"),
        i;
    /* ================= VARIABLES ================= */

    /* Video Height */
    /*video.height($(window).height() - (nav.innerHeight()));*/
    /* Video Height */

    /* ================= WINDOW SCROLL ================= */

    $(window).on("scroll", function () {
        var sc = $(this).scrollTop();

        if (sc > $(".uppernav").offset().top) {
            nav.addClass("active");
            $(".mobnav").addClass("active");
            upperNav.addClass("change");
            $(".mobnav .hamburger").css("top", "48px");
            brand.fadeIn(200);
            icons.fadeIn(200);
            $(".links .drop").fadeIn(200);
        } else {
            nav.removeClass('active');
            $(".mobnav").removeClass("active");
            upperNav.removeClass('change');
            $(".mobnav .hamburger").css("top", "78px");
            brand.fadeOut(200);
            icons.fadeOut(200);
            $(".links .drop").fadeOut(200);
        }
        if (sc >= $(".feauters").offset().top - 250) {
            $(".feauters .feat").each(function (i) {
                setTimeout(function () {
                    $(".feauters .feat").eq(i).addClass("show");
                }, 150 * (i + 1));
            });
        }
        if (sc >= $(".pricing").offset().top - 250) {
            $(".pricing .basic").css({
                opacity: 1,
                transform: "translateX(0)"
            });
            $(".pricing .enterprise").css({
                opacity: 1,
                transform: "translateX(0)"
            });
        }
        console.log(sc);
    });

    /* ================= WINDOW SCROLL ================= */

    /* Create Domain */
    domainIcon.click(function () {
        domainList.fadeToggle(300);
    });
    domainElem.click(function () {
        $(".com").text($(this).text());
        domainList.fadeToggle(200);
    });
    /* Create Domain */

    /* Add Remove Active From Nav Links */
    function addRemoveActive(param) {
        param.click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }
    addRemoveActive($(".navigation .links li:not(:nth-of-type(5))"));
    addRemoveActive($(".mobnav .mlinks li:not(:nth-of-type(5))"));
    /* Add Remove Active From Nav Links */

    /* Down Button */
    down.click(function () {
        $('html, body').animate({
            scrollTop: $('.feauters').offset().top
        }, 1500);
    });
    down.hover(function () {
        $(".video .overlay").css("background", "rgba(0, 0, 0, .85)");
    }, function () {
        $(".video .overlay").css("background", "rgba(0, 0, 0, .75)");
    });
    /* Down Button */

    /* Hamburger Active */
    $(".icon").click(function () {
        $(this).toggleClass('active');
        $(".nav-content .mlinks").slideToggle(300);
    });
    /* Hamburger Active */

    /* 5th Li Mobile */
    $(".mdrop").click(function () {
        $(".mdropMenu").slideToggle(200);
    });
    /* 5th Li Mobile */

    /* Icons Of Uppernav */
    function showAboutIcons(icon, elem, time) {
        icon.click(function () {
            elem.slideToggle(time);
        });
    }
    showAboutIcons($(".searchIcon"), $(".search"), 200);
    showAboutIcons($(".loginIcon"), $(".login"), 350);
    $("#close").click(function () {
        $(".login").slideToggle(350);
    });
    /* Icons Of Uppernav */
});
window.onload = function () {
    'use strict';
    /* Intro Animation */
    setTimeout(function () {
        $(".video h1").css({
            opacity: 1,
            transform: "translate(0)"
        });
        $(".video p").css({
            opacity: 1,
            transform: "translate(0)"
        });
        $(".video button").css({
            opacity: 1,
            transform: "scale(1)"
        });
        $(".announce h2,.banks h2,.contact-form h2,.know h2,.license h2,.signup h2,.ticket h2").css({
            opacity: 1,
            transform: "translate(0)"
        });
        /*$(".links > li").each(function (i) {
            setTimeout(function () {
                $(".links > li").eq(i).css({
                    opacity: 1,
                    transform: "translate(0)"
                });
            }, 100 * (i + 1));
        });*/
    });
};


