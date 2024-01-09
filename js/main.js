/** ==========================================================================================

  Project :   Tripzia - Responsive Multi-purpose HTML5 Template
  Author :    CymolThemes

========================================================================================== */


/** ===============

01. Preloader
02. header_search
03. Fixed-header
04. Menu
05. Number rotator
06. Skillbar
07. Tab
08. Accordion
09. Isotope
10. Prettyphoto
11. share-icon_btn
12. Slick_slider
13. Back to top 

 =============== */


(function($) {

   'use strict'


/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/
   // makes sure the whole site is loaded
    $(window).on("load",function() {
            // will first fade out the loading animation
         $("#preloader").fadeOut();
            // will fade out the whole DIV that covers the website.
         $("#status").fadeOut(9000);
    })


/*------------------------------------------------------------------------------*/
/* header_search
/*------------------------------------------------------------------------------*/
    
    $(".header_search").each(function(){  
        $(".search_btn", this).on("click", function(e){

            e.preventDefault();
            e.stopPropagation();

            $(".header_search_content").toggleClass("on");

            if ($('.header_search a').hasClass('open')) {

                $( ".header_search a i" ).removeClass('ti-close').addClass('ti-search');
                
                $(this).removeClass('open').addClass('sclose');    

            } 

            else {
                $(".header_search a").removeClass('sclose').addClass('open');

                $( ".header_search a i" ).removeClass('ti-search').addClass('ti-close');  
                
            }
        });

    });


 

/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

    $(window).scroll(function(){
        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            if ($(window).scrollTop() >= 50 ) {

                $('.cmt-stickable-header').addClass('fixed-header');
            }
            else {

                $('.cmt-stickable-header').removeClass('fixed-header');
            }
        }
    });



/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/

    var menu = {
        initialize: function() {
            this.Menuhover();
        },

        Menuhover : function(){
            var getNav = $("nav.main-menu"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.menu").data("in"),
                getOut = getNav.find("ul.menu").data("out");
            
            if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
                                                     
                // Enable click event
                $("nav.main-menu ul.menu").each(function(){
                    
                    // Dropdown Fade Toggle
                    $("a.mega-menu-link", this).on('click', function (e) {
                        e.preventDefault();
                        var t = $(this);
                        t.toggleClass('active').next('ul').toggleClass('active');
                    });   

                    // Megamenu style
                    $(".megamenu-fw", this).each(function(){
                        $(".col-menu", this).each(function(){
                            $(".title", this).off("click");
                            $(".title", this).on("click", function(){
                                $(this).closest(".col-menu").find(".content").stop().toggleClass('active');
                                $(this).closest(".col-menu").toggleClass("active");
                                return false;
                                e.preventDefault();
                                
                            });

                        });
                    });  
                    
                }); 
            }
        },
    };

    
    $('.btn-show-menu-mobile').on('click', function(e){
        $(this).toggleClass('is-active'); 
        $('.menu-mobile').toggleClass('show'); 
        return false;
        e.preventDefault();  
    });

    // Initialize
    $(document).ready(function(){
        menu.initialize();

    });
 

/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
    var self      = $(this);
    var animation = self.data("appear-animation");
    var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });


   
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
    $('.cmt-progress-bar').each(function() {
        $(this).find('.progress-bar').width(0);
    });

    $('.cmt-progress-bar').each(function() {

        $(this).find('.progress-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });


    // Part of the code responsible for loading percentages:

    $('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });

/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 

    $(document).ready(function() { 
        
        $('.content-tab').children('.content-inner').first().addClass('active');
        $('.cmt-tabs .tabs li').on('click', function(e) {  
            if (!$(this).hasClass('active')) { 
                var i = $(this).index(); 
                $('.cmt-tabs .tabs li.active').removeClass('active'); 
                $('.content-tab .active').hide().removeClass('active'); 
                $(this).addClass('active'); 
                $($('.content-tab').children('.content-inner')[i]).fadeIn(600).addClass('active');
                e.preventDefault();
            } 
        });
    });
    

/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/
    /*https://www.antimath.info/jquery/quick-and-simple-jquery-accordion/*/
    $(".accordion").each(function(){

        var allPanels = $('.toggle').children(".toggle-content").hide();
        $('.toggle').children(".toggle-content").eq(2).slideDown("easeOutExpo");
        $('.toggle').children(".toggle-title").children("a").eq(2).addClass("active");

        $('.toggle').children(".toggle-title").children("a").on('click', function(){       
            var current = $(this).parent().next(".toggle-content");
            $(".toggle-title > a").removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");                
            return false;                
        });

    });


/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

   $(function () {

        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.cmt-box-col-wrapper',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };

   });


    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
    $(function () {

         // Normal link
        jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
            if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') && !jQuery(this).hasClass('modula-lightbox') ){
                var attr = $(this).attr('data-gal');
                if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
                    jQuery(this).attr('data-rel','prettyPhoto');
                }
            }
        });     

        jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
        jQuery('a.cmt_prettyphoto').prettyPhoto();
        jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'})

    });
    $(document).ready(function() {
    var e = '<div class="cmt_floting_customsett">'+
                '<a href="https://support.cymolthemes.com/" class="tmtheme_fbar_icons"><i class="fa fa-headphones"></i><span>Support</span></a>'+
                '<a href="https://www.cymolthemes.com/" class="tmtheme_fbar_icons"><i class="themifyicon themifyicon ti-pencil"></i><span>Customization</span></a>'+
                '<a href="https://1.envato.market/rkkqG" class="tmtheme_fbar_icons"><i class="themifyicon ti-shopping-cart"></i><span class="buy_link">Buy<span></span></span></a>'+
                '<div class="clearfix"></div>'+
            '</div>';

    $('body').append(e);
});
    

    
/*------------------------------------------------------------------------------*/
/* share-icon_btn
/*------------------------------------------------------------------------------*/
    jQuery(".cmt-blog-classic").each(function(t){
        var e=jQuery(this);
        e.find(".cmt-social-share-icon_btn").on("click",function(){
            return e.find(".social-icons").toggleClass("show"),!1
        })
    });


/*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: true,
        dots: false,                   
        autoplay: false,
        centerMode : false,

        responsive: [{

            breakpoint: 1360,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    /* testimonials */
    var testinav=jQuery('.testimonials-nav',this);
    var testiinfo=jQuery('.testimonials-info',this);

    jQuery('.testimonials-info',this).slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        fade            : false,
        arrows          : true,
        asNavFor        : testinav,
        adaptiveHeight  : true,
        speed           : 1500,
        autoplay        : true,
    });

    jQuery('.testimonials-nav',this).slick({

        slidesToShow    : 3,
        slidesToScroll  : 1,
        asNavFor        : testiinfo,
        centerMode      : true,
        centerPadding   : '0',
        focusOnSelect   : true,
        autoplay        : false,
        speed           : 1500,
        arrows          : false,
        dots            : false,
        variableWidth   : true,

        responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
        
    });


    /* testimonials */
    var blognav=jQuery('.blog-nav',this);
    var bloginfo=jQuery('.blog-info',this);

    jQuery('.blog-info',this).slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        fade            : false,
        asNavFor        : blognav,
        autoplay        : false,
        speed           : 1500,
        arrows          : true,
        dots            : false,
    });

    jQuery('.blog-nav',this).slick({

        slidesToShow    : 4,
        slidesToScroll  : 1,
        asNavFor        : bloginfo,
        focusOnSelect   : true,
        autoplay        : false,
        speed           : 1500,
        arrows          : false,
        dots            : false,
        vertical        : true,

        responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        }
      ]
        
    }); 
  
         	//Tabs Box
             if($('.tabs-box').length){
                $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
                    e.preventDefault();
                    var target = $($(this).attr('data-tab'));
                    
                    if ($(target).is(':visible')){
                        return false;
                    }else{
                        target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                        $(this).addClass('active-btn');
                        target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                        target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                        $(target).fadeIn(300);
                        $(target).addClass('active-tab');
                    }
                });
            }
            
	//Product Tabs
	if($('.project-tab').length){
		$('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}


    // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}



    function openVal(evt, valName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-content");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-btn");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(valName).style.display = "block";
        evt.currentTarget.className += " active";
      }
/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/
    
    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    jQuery(window).scroll(function() {
        "use strict";
        if (jQuery(this).scrollTop() >= 1000) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click",function() {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        return false;
    });



})(jQuery);

const itemsPerPage = 50;  // Number of items to display per page
let currentPage = 1;

const table = document.getElementById('data-table');
const paginationControls = document.getElementById('pagination-controls');

// Function to display a specific page
function displayPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Hide all rows
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].style.display = 'none';
  }

  // Display rows for the current page
  for (let i = start; i < end && i < table.rows.length; i++) {
    table.rows[i].style.display = 'table-row';
  }

  document.getElementById('page-info').innerText = `Page ${page}`;
}

// Event listener for previous button
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

// Event listener for next button
document.getElementById('next-btn').addEventListener('click', () => {
  if (currentPage < Math.ceil(table.rows.length / itemsPerPage)) {
    currentPage++;
    displayPage(currentPage);
  }
});

// Display the initial page
displayPage(currentPage);


$('#myCarousel').carousel({
    interval: false
  });
  $('#carousel-thumbs').carousel({
    interval: false
  });
  
  // handles the carousel thumbnails
  // https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr('id');
    var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
    $('#myCarousel').carousel(id);
  });
  // Only display 3 items in nav on mobile.
  if ($(window).width() < 575) {
    $('#carousel-thumbs .row div:nth-child(4)').each(function() {
      var rowBoundary = $(this);
      $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
    });
    $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
      var boundary = $(this);
      $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
    });
  }
  // Hide slide arrows if too few items.
  if ($('#carousel-thumbs .carousel-item').length < 2) {
    $('#carousel-thumbs [class^=carousel-control-]').remove();
    $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
  }
  // when the carousel slides, auto update
  $('#myCarousel').on('slide.bs.carousel', function(e) {
    var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
  });
  // when user swipes, go next or previous
  $('#myCarousel').swipe({
    fallbackToMouseEvents: true,
    swipeLeft: function(e) {
      $('#myCarousel').carousel('next');
    },
    swipeRight: function(e) {
      $('#myCarousel').carousel('prev');
    },
    allowPageScroll: 'vertical',
    preventDefaultEvents: false,
    threshold: 75
  });
  /*
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
  */
  
  $('#myCarousel .carousel-item img').on('click', function(e) {
    var src = $(e.target).attr('data-remote');
    if (src) $(this).ekkoLightbox();
  });
  $(' .abroad-carousel ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})