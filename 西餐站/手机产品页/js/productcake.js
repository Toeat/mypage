(function(){
	var proCakeSlide1 = new Swiper('.procake-slide1', {
		autoplay :true,
		autoplay:{
			disableOnInteraction: false,
		},
		speed:800,
		loop:true,
		loopAdditionalSlides :1,
		effect : 'coverflow',
		slidesPerView:2,
		centeredSlides : true,
		coverflowEffect: {
		    rotate: 0,
		    stretch: 0,
		    depth: 200,
		    modifier: 1.9,
		    slideShadows : true
		},
	});
	
	var proCakeSlide2 = new Swiper('.procake-slide2', {
		autoplay :true,
		autoplay:{
			disableOnInteraction: false,
		},
		speed:800,
		on: {
	    	slideChangeTransitionStart: function(){
	    		$('.procake-slide3 img').removeClass('active');
				$('.procake-slide3 img').eq(this.activeIndex).addClass('active');
		    },
	  },	
	});
	
	$('.procake-slide3 img').on('touchend',function(){
		$('.procake-slide3 img').removeClass('active');
		$('.procake-slide3 img').eq($(this).index()).addClass('active');
		proCakeSlide2.slideTo($(this).index(), 1000, false);
	});
	
    $("img").lazyload({effect: "fadeIn"});
    
    
})();
