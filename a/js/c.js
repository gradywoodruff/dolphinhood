jQuery(document).ready(function() {

    if ("ontouchstart" in document)
    jQuery('body').addClass('iftouch');


    jQuery(".link-youtube").hover(function () {
    	jQuery('body').toggleClass('hover-youtube');
    });
    jQuery(".link-apple").hover(function () {
    	jQuery('body').toggleClass('hover-apple');
    });
    jQuery(".link-soundcloud").hover(function () {
    	jQuery('body').toggleClass('hover-soundcloud');
    });
    jQuery(".link-snapchat").hover(function () {
    	jQuery('body').toggleClass('hover-snapchat');
    });
    jQuery(".link-vine").hover(function () {
    	jQuery('body').toggleClass('hover-vine');
    });
    jQuery(".link-twitter").hover(function () {
    	jQuery('body').toggleClass('hover-twitter');
    });
    jQuery(".link-instagram").hover(function () {
    	jQuery('body').toggleClass('hover-instagram');
    });
    jQuery(".link-play").hover(function () {
    	jQuery('body').toggleClass('hover-play');
    });
    jQuery(".link-facebook").hover(function () {
    	jQuery('body').toggleClass('hover-facebook');
    });
    jQuery(".link-github").hover(function () {
    	jQuery('body').toggleClass('hover-github');
    });
    jQuery(".link-phone").hover(function () {
    	jQuery('body').toggleClass('hover-phone');
    });
    jQuery(".link-more").hover(function () {
    	jQuery('body').toggleClass('hover-more');
    });
    jQuery(".credits-name a").hover(function () {
    	jQuery('body').toggleClass('hover-name');
    });
    jQuery(".contact-press a").hover(function () {
    	jQuery('body').toggleClass('hover-press');
    });
    jQuery(".contact-booking a").hover(function () {
    	jQuery('body').toggleClass('hover-booking');
    });
    jQuery(".contact-collab a").hover(function () {
    	jQuery('body').toggleClass('hover-collab');
    });
    jQuery('.nav-item.nav-dark').on('click', function() {
	  jQuery('body').addClass('dark');
	});
	jQuery('.nav-item').not('.nav-dark').on('click', function() {
	  jQuery('body').removeClass('dark');
	});
    jQuery('.link-more.nav-link.nav-dark').on('click', function() {
	  jQuery('body').addClass('dark');
	});
	jQuery('.link-more.nav-link').not('.nav-dark').on('click', function() {
	  jQuery('body').removeClass('dark');
	});
    jQuery('.link-more.nav-link').on('click', function() {
	  jQuery('.nav-link.active').removeClass('active');
	});

    //scroll spy
    jQuery("#drops-spy ul li a[href^='#']").on('click', function(e) {

       e.preventDefault();

       jQuery('html, body').animate({
           scrollTop: jQuery(this.hash).offset().top
         }, 900, function(){
   
           window.location.hash = this.hash;
         });

    });

    jQuery('.search-modal').on('shown.bs.modal', function() {
		jQuery('#s').focus();
	})

    /*
	(function(window) {
	  function stopScrolling(interval) {
	    console.log('stop: ' + interval);
	    clearInterval(interval);
	  }
	  var interval = window.setInterval(function() {
	    var el = document.getElementById('credits-scroll');
	    if (el.scrollTop >= (el.scrollHeight - el.offsetHeight)) {
	      stopScrolling(interval);
	    }

	    var log = document.getElementById('log-0');
	    log.innerHTML += el.scrollTop;
	    el.scrollTop += 1;

	  }, 27);
	})(window);
	*/

});
