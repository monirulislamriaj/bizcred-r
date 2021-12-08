(function($) {
  "use strict";
  //Copyright Year
  var copyrightYear = document.getElementById('copyrightYear');
  copyrightYear.innerHTML = new Date().getFullYear();
  
  //Headroom Js
  $(".main-nav").headroom();

  // Smooth scroll
  $("a.scroll-to").on("click", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50
        },
        1000
      );
    event.preventDefault();
  });

  // AOS initialize
  AOS.init({
    disable: "mobile",
    offset: 50,
    duration: 1500,
    once: true,
  });

  // Tooltip
  $(".footer-tooltip").tooltip();

  // hero Slider

  var $status_1 = $('.pageinfo-left');
  var $status_2 = $('.pageinfo-right');

  $(".hero-slider").on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
    slideanimate($firstAnimatingElements);
  });

  $(".hero-slider").on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status_1.text( "0" + i );

    var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    slideanimate($animatingElements);
  });

  $(".hero-slider").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status_2.text( "0" + i );
  });

  $(".hero-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    fade: true,
    cssEase: 'linear'
  });

  function slideanimate(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
      });
    });
  }

  // hero-two Slider

  $(".hero-two-slider").on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
    slideanimate($firstAnimatingElements);
  });

  $(".hero-two-slider").on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    slideanimate($animatingElements);
  });

  $(".hero-two-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    fade: true
  });
  function slideanimate(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
      });
    });
  }
  // hero-three Slider
  $(".hero-three-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500
  });
  // service-two Slider
  $(".service-two-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // service-four Slider
  $(".service-four-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // testimonial Slider
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button type="button"class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 6.999L0 7 7.003-.001v5.003H24v1.997z"/></svg></button>',
    nextArrow:
      '<button type="button"class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 7L0 6.999V5.002h16.996V-.001L24 7z"/></svg></button>',
    autoplay: false,
    speed: 500
  });
  // case-studie-two slider
  $(".case-studie-two-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // team-tow slider
  $(".team-tow-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  // brand slider
  $(".brand-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  // brand-two slider
  $(".brand-two-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Off Canvas Menu Open & Close
  $("#offCanvas").on("click", function() {
    $(".nav-offcanvas").addClass("open");
    $(".offcanvas-overlay").addClass("on");
  });
  $("#offCanvasClose, .offcanvas-overlay").on("click", function() {
    $(".nav-offcanvas").removeClass("open");
    $(".offcanvas-overlay").removeClass("on");
  });
  // progress-bar
  $(".progress-bar").each(function() {
    var width = $(this).data("percent");
    $(this).css({
      transition: "width 3s"
    });
    $(this).appear(function() {
      $(this).css("width", width + "%");
      $(this)
        .find(".skill-number")
        .countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50
        });
    });
  });

//item-thum magnificPopup
$(".item-thum").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
    }
  }
});
//case-studie-three-item-thum magnificPopup
$(".image-popup-no-margins").magnificPopup({
  type: "image",
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});
// magnificPopup
$(".popup-vimeo").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});
// magnificPopup images
$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
    }
  }
});
// -----------------------------
// ScrollTop
// -----------------------------
var btn = $("#button");
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0
    },
    "3000"
  );
});

// isotop
("use strict");
var $grid = $(".grid").isotope({
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
});
// filter items on button click
$(".isotop-menu").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({
    filter: filterValue
  });
});
$(".isotop-menu button").on("click", function(event) {
  $(this)
    .siblings(".active")
    .removeClass("active");
  $(this).addClass("active");
  event.preventDefault();
});

// counter-up
$(".counter").countUp();

//contact-four-address Match Height
$(".contact-four-address").matchHeight({
  byRow: 0
});

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("nav-bg");
  } else {
    $("nav").removeClass("nav-bg");
  }
});

// G-Map
/**
 * Created by Kausar on 06/10/2016.
 */
window.marker = null;

function initialize() {
    var map;
    var nottingham = new google.maps.LatLng(23.7783741, 90.3746808);
    var style = [
      {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#ff0000"
              }
          ]
      }
  ];
    var mapOptions = {
        // SET THE CENTER
        center: nottingham,
        // SET THE MAP STYLE & ZOOM LEVEL
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // SET THE BACKGROUND COLOUR
        backgroundColor: "#000",
        // REMOVE ALL THE CONTROLS EXCEPT ZOOM
        zoom: 13,
        panControl: false,
        scrollwheel: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE
        }
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // SET THE MAP TYPE
    var mapType = new google.maps.StyledMapType(style, {
        name: "Grayscale"
    });
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');
    //CREATE A CUSTOM PIN ICON
    var marker_image = 'images/pin.png';
    var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(21, 34));
    marker = new google.maps.Marker({
        position: nottingham,
        map: map,
        icon: pinIcon,
        title: 'bizcred'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

// chart js

	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
			datasets: [
				{
					label: 'Income',
					data: [4, 6, 5, 9, 7, 13],
					backgroundColor: '#5cc18c',
				},
				{
					label: 'Invest',
					data: [2, 3, 2, 7, 3, 8],
					backgroundColor: '#cc9564',
				}
      		]
		},
		options: {
			scales: {
				xAxes: [{
					type: 'time',
					time: {
						unit: 'month'
					}
				}]
			},
			legend: {
				position: 'top',
				align: 'start',
				labels: {
					boxWidth: 12,
					boxRadius: 50
				}
			}
		}
	});

})(jQuery);
