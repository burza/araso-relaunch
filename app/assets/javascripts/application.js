// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

// When ready...
// window.addEventListener("load",function() {
//   // Set a timeout...
//   setTimeout(function(){
//     // Hide the address bar!
//     window.scrollTo(0, 1);
//   }, 0);
// });

$(document).ready(function() {

  $(window).scroll(function () {
    if($(this).scrollTop() == 0) {
      $('.navbar').addClass('reset-navbar-styles');
    } else if ($(this).scrollTop() >= 20) {
      $('.navbar').removeClass('reset-navbar-styles');    
    }
  });

	$(function() {
		$('.projects li.project ').each( function() { $(this).hoverdir({
			hoverDelay : 75
		}); } );
	});



  $('#flash').delay(5000).fadeOut();
  
  $('.field_with_errors > *').focus();
  
  if ($(window).scrollTop() >= 20) {
    $('.navbar').removeClass('reset-navbar-styles');    
  }

  
	$('.navbar .nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 750,
    scrollOffset: 0,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',

    begin: function() {
      //I get fired when the animation is starting
    },
    
    end: function() {
      //I get fired when the animation is ending
    },
    
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });
});

(function( win ){
	var doc = win.document;
   	
	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){
		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );
		win.addEventListener( "load", function(){
			setTimeout(function(){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
			}, 0);
		} );
	}
})( this );

