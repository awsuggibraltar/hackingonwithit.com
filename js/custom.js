/**
 * Created by sbbailey on 2/3/17.
 */

$(document).ready(function() {

    $(document).ready(function(){
        resizeDiv();
    });

    window.onresize = function(event) {
        resizeDiv();
    }

    function resizeDiv() {
        vpw = $(window).width();
        vph = $(window).height();
        var nintypercent = vph * 0.9;

        $('#intro').css({'height': nintypercent + 'px'});
    }

    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 50
    })

    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });

    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /* ---------------------------------------------- /*
     * Background image
     /* ---------------------------------------------- */

    $('#intro').backstretch('images/awsuggib.jpg');

    /* ---------------------------------------------- /*
     * Navbar
     /* ---------------------------------------------- */

    var navbar = $('.navbar');
    var navHeight = navbar.height();

    $(window).scroll(function() {
        if($(this).scrollTop() >= navHeight) {
            navbar.addClass('navbar-color');
        }
        else {
            navbar.removeClass('navbar-color');
        }
    });

    if($(window).width() <= 767) {
        navbar.addClass('custom-collapse');
    }

    $(window).resize(function() {
        if($(this).width() <= 767) {
            navbar.addClass('custom-collapse');
        }
        else {
            navbar.removeClass('custom-collapse');
        }
    });

});
