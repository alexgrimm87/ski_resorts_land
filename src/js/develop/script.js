function hotel_slider(selector){
  $(selector).slick({
    slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      useCSS: true,
      slide: '.hotels-item',
      prevArrow: '.prev-slide',
      nextArrow: '.next-slide',
      fade: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          }
        },
    ]
  })
}

function fancyGallery(){
  $(".gallery-image-container").fancybox({
      openEffect  : 'fade',
      closeEffect : 'fade',
      autoResize:true,
      wrapCSS:'gallery-image',
      'closeBtn' : true,
      fitToView:true,
      padding:'0',
      arrows: true    
  });

  $(".gallery-image-container1").fancybox({
      openEffect  : 'fade',
      closeEffect : 'fade',
      autoResize:true,
      wrapCSS:'gallery-image1',
      'closeBtn' : true,
      fitToView:true,
      padding:'0',
      arrows: true    
  });
}

function fancyPopUp(){
  $('.order-tour').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoResize:true,
    wrapCSS:'order-tour-wrap',
    'closeBtn' : true,
    fitToView:true,
    padding:'0'
  })
}

google.maps.event.addDomListener(window, 'load', init1);
var map;
function init1() {
  var mapOptions = {
    center: new google.maps.LatLng(41.277754, 47.411088),
    zoom: 10,
    zoomControl: false,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.DEFAULT,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable : false,
    overviewMapControl: false,
    overviewMapControlOptions: {
        opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  }

  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var locations = [
  ['Шахдаг, Азербайджан', 'undefined', 'undefined', 'undefined', 'undefined', 41.277721,  48.011378, 'images/googleIco.png'],['Габала, Азербайджан', 'undefined', 'undefined', 'undefined', 'undefined', 40.998995,  47.871894, 'images/googleIco.png']
  ];
  var  contentString = ["<div class='marker-description'><p>Шахдаг, Азербайджан<p></div>","<div class='marker-description1'><p>Габала, Азербайджан<p></div>"];
      
  for (i = 0; i < locations.length; i++) {
      if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
      if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
      if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
     if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
     if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
      marker = new google.maps.Marker({
          icon: markericon,
          position: new google.maps.LatLng(locations[i][5], locations[i][6]),
          map: map,
          title: [],
          desc: description,
          tel: telephone,
          email: email,
          web: web
      });
      link = '';
      var infowindow = new google.maps.InfoWindow({
    content: contentString[i],
    maxWidth: 90
  });
      infowindow.open(map, marker);
  }
}

/* triangles */
function trianglesScript() {
    function trianglesWidth() {
        var borderWidth = Math.round($(window).width() / 2);
        $('.triangles').each(function() {
            $(this).css({
                'border-width': '189px ' + borderWidth + 'px 0 ' + borderWidth + 'px',
                'margin-left': '-' + borderWidth + 'px'
            });
            if ($(this).is('.not-center')) {
                $(this).css({
                    'border-color': 'transparent #fff'
                });
            } else if ($(this).is('.center')) {
                $(this).css({
                    'border-color': '#fff transparent'
                });
            }
        });
    }
    trianglesWidth();
    $(window).resize(function() {
        trianglesWidth();
    });
};
/* triangles */

/* videoPlayer */
function videoPlayer() {
  $('.play, video').click(function() {
    if ( $('video').prop('paused') === false ) {
        $('video')[0].pause();
    } else {
      $('video')[0].play();
    }
    $('.play').toggleClass('pause');
  });

  $('.prev').click(function() {
    $('video')[0].currentTime -= $('video')[0].duration * 0.05;
  });

  $('.next').click(function() {
    $('video')[0].currentTime += $('video')[0].duration * 0.05;
  });

  function FullScreen(selector) {
    if (selector.requestFullscreen) {
        selector.requestFullscreen();
    } else if (selector.msRequestFullscreen) {
        selector.msRequestFullscreen();
    } else if (selector.mozRequestFullScreen) {
        selector.mozRequestFullScreen();
    } else if (selector.webkitRequestFullscreen) {
        selector.webkitRequestFullscreen();
    }
  }

  $('video').dblclick(function() {
      FullScreen($(this)[0]);
  });


};
/* videoPlayer */

$(document).ready(function(){
  trianglesScript();
  videoPlayer();
  hotel_slider('.hotels-slider');
  AOS.init();

  if ($(window).width() <= 768) {
    $('.mountains').removeAttr('data-aos');
  }

  fancyGallery();
  fancyPopUp();
});

$(window).load(function(){
  $('.title-resorts span').removeClass('left').removeClass('right');
  setInterval(function(){
    $('button').toggleClass('pulse');
  }, 300);
});

$(window).resize(function(){

});