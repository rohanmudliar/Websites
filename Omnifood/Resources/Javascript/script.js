//
//$(document).ready(function() {
//    $('h1').click(function() {
//        $(this).css('color', '#000');
//    })    
//});

$(document).ready(function() {
    
    
    /*-----This is for sticky-nav bar-----*/
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass("sticky-nav");
        } else {
            $('nav').removeClass("sticky-nav");
        }
    }, {
    offset: '9%'
    });
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
    })
    */
    
    
    /*------For Clicking ------*/
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });
    
    $('.js--scroll-to-features').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /*----Scrolling-----*/
    
    
/* $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});*/
    
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});
    
    
    /*--------------------Animation--------------------*/
    
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp'); 
    }, {
        offset: '50%'
    })
    
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    })
    
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse'); 
    }, {
        offset: '50%'
    })
    
    
    /*--------------------------------- Nav Bar----------------------------- */
    
    $('.js--nav').click(function(){
       var nav = $('.js--main-nav');
       var icon = $('.js--nav i');
        
        nav.slideToggle(200)
        
        if(icon.hasClass('ion-navicon-round')){
           icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else {
           icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
           }
    });
    
    
/* ********************* Maps **************************/
    
    
    /* Maps daalne google ka api daalneka. We can get that by forking it on that gpmaps wale github pe. */
    
    
    
   var map = new GMaps({
  div: '.map',
  lat: 19.1764299,
  lng: 73.3305614,
  zoom: 12
});
    
    map.addMarker({
  lat: 19.1764299,
  lng: 73.2305614,
  title: 'Our Headquoters',
  infoWindow: {
  content: '<p>Call me when you are near Badlapur</p>'
}
});
    
});




























