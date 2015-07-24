// +function ($) {
//   'use strict';

//   // bind images loaded
//   $('.page-main--index').imagesLoaded()
//     .always( function( instance ) {
//       console.log('all images loaded');
//       pack();
//     })
//     .done( function( instance ) {
//       console.log('all images successfully loaded');
//     })
//     .fail( function() {
//       console.log('all images loaded, at least one is broken');
//     })
//     .progress( function( instance, image ) {
//       var result = image.isLoaded ? 'loaded' : 'broken';
//       console.log( 'image is ' + result + ' for ' + image.img.src );
//     });
//     // TO DO: get rid of this shizz

//     // initialize packery
//     var pack = function() {
//       var $container = $('.page-main--index');
//       // init
//       $container.packery({
//         itemSelector: '.postPreview',
//         columnWidth: '.column',
//         percentPosition: true
//       });
//     };

// }(jQuery);

(function() {
  var container;

  container = document.querySelector(".page-index");

  if (container) {
    imagesLoaded(container, function() {
      var pckry;
      return pckry = new Packery(container, {
        itemSelector: ".postPreview",
        gutter: 0
      });
    });
  }

}).call(this);