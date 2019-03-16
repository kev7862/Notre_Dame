$(document).ready(function(){


        // Tween-Max Section
        var slido = document.getElementsByClassName('slido');
        TweenMax.from(slido, 1, {x:200, autoAlpha:1});

        // ScrollMagic
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
  triggerElement: '.pro'
})
.setClassToggle('.pro', 'fade-in');






           //Preloader Begins Here
      //       setTimeout(function() {
        //       $('.kifungo').addClass('loaded');

        //     }, 3000);




      //       $(window).load(function(){

        //     $('.kifungo').removeClass('preload');

        //     });


           //Preloader Ends Here




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
