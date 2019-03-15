$(document).ready(function(){



        // Tween-Max Section
        var navbarResponsive = document.getElementById('navbarResponsive');
        TweenMax.from(navbarResponsive, 1, {x:200, autoAlpha:1});

        // ScrollMagic
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '.pro'
})
.setClassToggle('.pro', 'fade-in');

//teleprompter Section
var tele = document.getElementById('tele');
$("#tele").teleprompter();











//Back - to - Top Section
        $(window).scroll(function () {
               if ($(this).scrollTop() > 50) {
                   $('#back-to-top').fadeIn();
               } else {
                   $('#back-to-top').fadeOut();
               }
           });
           // scroll body to 0px on click
           $('#back-to-top').click(function () {
               $('#back-to-top').tooltip('hide');
               $('body,html').animate({
                   scrollTop: 0
               }, 800);
               return false;
           });

           $('#back-to-top').tooltip('show');



});
