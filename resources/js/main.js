$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var lastScrollTop = 0;//to store how far user has scrolled

  $(window).scroll(function(){//this is the scroll event handler
    var scrollTop = $(this).scrollTop();//stores the value of the scrolltop property of this
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');//stores height of navabr
      $('.navbar').animate({top: '-' + navHeight}, 150);//change top offset of navbar to be -ive
      //height of the navabr over 150ms
      lastScrollTop = scrollTop; //set new distance moved to distance moved
    } else if (lastScrollTop - scrollTop > 50) { //if the otherway around then animate back down
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });

});
