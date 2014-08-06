$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = 215;
         if ($(window).scrollTop() > navHeight) {
             $('nav').addClass('fixed');
             $('nav').removeClass('hidden');
         }
         else {
             $('nav').removeClass('fixed');
             $('nav').addClass('hidden');
         }
    });
});