$(document).ready(function(){
    $('.sliders').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        dots:true,
    });



    $('.slider-two').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 1,
    });


    $(window).resize(function() {
        var width = $(window).width();
        if (width < 1200){
            $('.slider-two').slick({
                autoplay: true,
                autoplaySpeed: 1000,
                arrows:false,
                slidesToShow: 3,
                slidesToScroll: 1,
            });
        }
      });


    // for fixed menu

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 850) {
            $(".menu-section").addClass("fixed");
        } else {
            $(".menu-section").removeClass("fixed");
        }
    });



    // for scroll top button
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 850) {
            $("#sctop").addClass("show");
        } else {
            $("#sctop").removeClass("show");
        }
    });

    // nav
    $('#nav-bar').onePageNav({
        currentClass: 'current',
	changeHash: false,
	scrollSpeed: 450,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
    });

    // for scroll top button click

    $("#sctop").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#main-section").offset().top
        }, 1000);
    });

    $('#click').click(function(){
        $('#nav-bar').toggleClass('show')
    })
    
    $('#click2').click(function(){
        $('#nav-bar').toggleClass('show')
    })


    // for icons

    $('#bar').click(function(){
        $('#bar').addClass('hide'),
        $('#bar2').removeClass('hide')
    });

    $('#bar2').click(function(){
        $(this).addClass('hide'),
        $('#bar').removeClass('hide')

    });

    var typed = new Typed('.element', {
        strings: ["Advanced.", "Basics.", "Professional"],
        typeSpeed: 100,
        backSpeed:50,
        loop:true,
        startDelay: 500,
        showCursor: false,
      });
  
   



  });
