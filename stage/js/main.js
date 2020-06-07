$(function () {
   "use strict";
   $(".toggle-sidebar").on("click", function () {
      $(".content-area, .sidebar").toggleClass("no-sidebar");
   });

   //toggle submenu
   $('.toggle-submenu').on('click', function () {
      $(this).find('.fa-angle-down').toggleClass('right');
      $(this).next('.child-links').slideToggle();
   });

   // fullscreen button
   $('.toggle-fullscreen').on('click', function () {
      $(this).toggleClass('full-screen');
      if ($(this).hasClass('full-screen')) {
         openFullscreen();
      } else {
         closeFullscreen();
      };
   })

   /* Get the documentElement (<html>) to display the page in fullscreen */
   var elem = document.documentElement;

   /* View in fullscreen */
   function openFullscreen() {
      if (elem.requestFullscreen) {
         elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
         elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
         elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
         elem.msRequestFullscreen();
      }
   }

   /* Close fullscreen */
   function closeFullscreen() {
      if (document.exitFullscreen) {
         document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
         document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
         document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
         document.msExitFullscreen();
      }
   }

   // settings toggle
   $('.toggle-settings').on('click', function () {
      $(this).children('i').toggleClass('fa-spin')
      $(this).parent().toggleClass('hide-settings')
   })

   //switch theme color

   var themesClasses = [];
   $('.color-options li').each(function () {
      themesClasses.push($(this).data('theme'))
   })
   
   $('.color-options li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
      $('body')
         .removeClass(themesClasses.join(' '))
         .addClass($(this).data('theme'));
   })
   
   //switch fonts
   var fonts = [];
   $('.font-options option').each(function () {
      fonts.push($(this).val())
   })
   $('.font-options select').on('change', function () {
      $('body').removeClass(fonts.join(' ')).addClass($(this).find('option:selected').val())
   })
});

//fn
let abadeer = function () {
   let birthYear = parseInt(prompt('when were you born?'))
   let currentYear = 2020
   
   if (birthYear > 1950 && birthYear < 2015) {
      let resultByYears = currentYear - birthYear;
      let resultByMonths = resultByYears * 12;

      return alert('You are ' + resultByYears + ' years old 🥂 - ' + resultByMonths + ' months by approximation.');
   } else {
      alert('بتهزر ياروح امك 🐸')
   }
}