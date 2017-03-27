// JavaScript Document
/*$(document).ready(function() {
var maxHeight = 0;

$(".campaign-item").each(function(){
   if ($(this).height() > maxHeight) {
   		maxHeight = $(this).height();
	}
});

$(".campaign-item").height(maxHeight);
});*/

  $(document).ready(function() {

      $("#carousel-bottom").owlCarousel({

          navigation : false, // Show next and prev buttons
          slideSpeed : 500,
          paginationSpeed : 400,
          singleItem:true,
		  paginationNumbers: false,
		  autoPlay: false,
		  pagination: false,
		  navigation: true,
		  navigationText : false



          // "singleItem:true" is a shortcut for:
          // items : 1,
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });
      $(".homeTonightRate").on("click", function () {
            $(".booking-widget form").submit();
      });
    });

	   $(document).ready(sizeContent);

	   $(window).resize(sizeContent);
	  
	   function sizeContent() {
		  var newHeight = $(window).height() - 123;
		if($(window).width() >= 768){   
			$("#homeCarousel .item").css("height", newHeight);
		}
	   }
		
		 

	 $(document).ready(function() {
		 
     setTimeout(function(){

       $(" #home-carousel-2,#room-carousel-1").owlCarousel({


           navigation : false, // Show next and prev buttons
           slideSpeed : 500,
           paginationSpeed : 400,
           items : 2,
           paginationNumbers: false,
            pagination: false,
            autoPlay: false,
            navigation: true,
            navigationText : false,

            itemsDesktop : [1199,2],
           itemsDesktopSmall : [980,2],
           itemsTablet: [768,2],
           itemsTabletSmall: false,
           itemsMobile : [767,1],

           // "singleItem:true" is a shortcut for:
           // items : 1,
           // itemsDesktop : false,
           // itemsDesktopSmall : false,
           // itemsTablet: false,
           // itemsMobile : false

       });
       setTimeout(function(){
             $(".price-wrap1").css('display' ,'block');
          },2000);
     }, 2000);


	  $(".filter").on("click", function () {
    var $this = $(this);
    // if we click the active tab, do nothing
    if (!$this.hasClass("active")) {
      $(".filter").removeClass("active");
      $this.addClass("active"); // set the active tab
      var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
      $filter == 'all' ? // if we select "view all", return to initial settings and show all
        $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn()
        : // otherwise
        $(".fancybox").fadeOut(0).filter(function () {
          return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
        }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
    } // if
  }); // on

     $('#custom-easing').lightGallery({
		cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
	});
    });

$(window).on('load scroll resize', function () {

 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();

	if(mwidth > 1240){
	if(mscroll > 100){
		$(".header-wrapper").addClass("fixed-header-wrapper");
		$("body").addClass("body-padd-sticky");
	}

	else{
		$(".header-wrapper").removeClass("fixed-header-wrapper");
		$("body").removeClass("body-padd-sticky");
	}
	}


	if(mwidth < 1240){
		$(".header-wrapper").addClass("fixed-header-device");
		$("body").addClass("body-padd-sticky");
		$(".header-wrapper").removeClass("fixed-header-wrapper");

	}
	else{
		$(".header-wrapper").removeClass("fixed-header-device");
	}

 });

 $(document).ready(function() {
	 $(".home-banner-wrap .item").hover(function(){
		 $(this).find(".transparent-bg").toggle();
	 });
 });

 $(document).ready(function() {
	 $(".menu-btn").click(function(){
		 $(".main-menu").slideToggle(300);
	 });
	 $('#lightgallery').lightGallery({
   		selector: '.item'
		})
 });

$('#homeCarousel,#specialsCarousel').carousel({
  interval: 7000,
  cycle: true
});

$('#roomDetailsCarousel11').carousel({
  interval: 3000,
  cycle: true
});


setTimeout(function(){
  $('#roomDetailsCarousel').carousel({
    interval: 3000,
    cycle: true
  });
},400);


  // title equal heights

$(window).on('load resize', function () {
var maxHeight = 0;


	var mwidth = $(window).width();
if(mwidth > 768){
// Home specials title equal heights

$(".home-specials-item h3").each(function(){
   if ($(this).height() > maxHeight) {
     maxHeight = $(this).height();
 }
});

$(".home-specials-item h3").height(maxHeight);

// Home specials description equal heights
$(".home-specials-item h3").each(function(){
   if ($(this).height() > maxHeight) {
     maxHeight = $(this).height();
 }
});

$(".home-specials-item p").height(maxHeight);

// Rooms title equal heights
setTimeout( function(){
	$(".rooms-item h2").each(function(){
   if ($(this).height() > maxHeight) {
     maxHeight = $(this).height();
 }
});

$(".rooms-item h2").height(maxHeight);

// Rooms title equal heights

$(".rooms-item p").each(function(){
   if ($(this).height() > maxHeight) {
     maxHeight = $(this).height();
 }
});

$(".rooms-item p").height(maxHeight);
}, 4000 );


}

});

/*Thumbnail Carousel Starts here*/

$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");

  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,

	autoPlay: false,

	navigationText : false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });

  sync2.owlCarousel({
    items : 6,
    itemsDesktop      : [1199,6],
    itemsDesktopSmall     : [979,6],
    itemsTablet       : [768,6],
    itemsMobile       : [479,4],
    pagination:false,
	autoPlay: false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });

  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });

  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }

  }



});



$(window).load(function(){
  if( $(window).width() > 768 ) {

     jQuery('ul.nav li.dropdown a').attr('data-toggle','disable');
   //Add Hover effect to menus
        jQuery('ul.nav li.dropdown').hover(function() {
          jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
        }, function() {
          jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
        });
  }
  else{
	   //jQuery('ul.nav li.dropdown a.dropdown-toggle').removeAttr('data-toggle');
  }
});
