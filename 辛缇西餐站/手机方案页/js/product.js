(function(){
	var proSwiper1 = new Swiper('.pro-slide1', {
		autoplay : 4000,
		speed:800,
		effect : 'fade',
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
		    slideChangeTransitionStart: function(){
				$('.pro-cont .pro-box1 ul li').removeClass('active');
		      	$('.pro-cont .pro-box1 ul li').eq(this.activeIndex).addClass('active');	    	
		    },
	  	},
	});
	
	$('.pro-cont .pro-box1 ul li').on('touchend',function(){
		$('.pro-cont .pro-box1 ul li').removeClass('active');
		$('.pro-cont .pro-box1 ul li').eq($(this).index()).addClass('active');
		proSwiper1.slideTo($(this).index(), 1000, false);
	});
	
	var proSwiper2 = new Swiper('.pro-slide2', {
		autoplay :true,
		speed:800,
		loop:true,
		loopAdditionalSlides :1,
		effect : 'coverflow',
		slidesPerView:3,
		centeredSlides : true,
		coverflowEffect: {
		    rotate: 0,
		    stretch: 0,
		    depth: 200,
		    modifier: 1.5,
		    slideShadows : false
		},
	});
	
	var proSwiper3 = new Swiper('.pro-slide3', {
		autoplay : 4000,
		speed:800,
		autoplay:{
			disableOnInteraction: false,
		},
	});
	
	$('.pro-cont .pro-box8 .prev').on('touchend',function(){
		proSwiper3.slidePrev();
	});

	$('.pro-cont .pro-box8 .next').on('touchend',function(){
		proSwiper3.slideNext();
	});
	
	var proSwiper4 = new Swiper('.pro-slide4', {
		autoplay : 4000,
		speed:800,
		autoplay:{
			disableOnInteraction: false,
		},
	});
	
	$('.pro-cont .pro-box2 .slide-cont .prev').on('touchend',function(){
		proSwiper4.slidePrev();
	});

	$('.pro-cont .pro-box2 .slide-cont .next').on('touchend',function(){
		proSwiper4.slideNext();
	});
	
	var proSwiper5 = new Swiper('.pro-slide5', {
		autoplay : 4000,
		speed:800,
		spaceBetween : 20,
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
		    slideChangeTransitionStart: function(){
				$('.pro-cont .pro-box2 .ican2 li').removeClass('active');
		      	$('.pro-cont .pro-box2 .ican2 li').eq(this.activeIndex).addClass('active');	    	
		    },
	  	},
	});
	
	var proSwiper6 = new Swiper('.pro-slide6', {
		autoplay : 4000,
		speed:800,
		spaceBetween : 20,
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
		    slideChangeTransitionStart: function(){
				$('.pro-cont .pro-box2-2 .ican2 li').removeClass('active');
		      	$('.pro-cont .pro-box2-2 .ican2 li').eq(this.activeIndex).addClass('active');	    	
		    },
	  	},
	});
	
	var proSwiper7 = new Swiper('.pro-slide7', {
		autoplay : 4000,
		speed:800,
		spaceBetween : 20,
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
		    slideChangeTransitionStart: function(){
				$('.pro-cont .pro-box2-3 .ican2 li').removeClass('active');
		      	$('.pro-cont .pro-box2-3 .ican2 li').eq(this.activeIndex).addClass('active');	    	
		    },
	  	},
	});
	
	var proSwiper8 = new Swiper('.pro-slide8', {
		autoplay : 4000,
		speed:800,
		spaceBetween : 20,
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
		    slideChangeTransitionStart: function(){
				$('.pro-cont .pro-box2-4 .ican2 li').removeClass('active');
		      	$('.pro-cont .pro-box2-4 .ican2 li').eq(this.activeIndex).addClass('active');	    	
		    },
	  	},
	});
	
	var proSwiper9 = new Swiper('.pro-slide9', {
		autoplay : 4000,
		speed:800,
		spaceBetween : 20,
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
		    slideChangeTransitionStart: function(){
				$('.pro-cont .pro-box2-5 .ican2 li').removeClass('active');
		      	$('.pro-cont .pro-box2-5 .ican2 li').eq(this.activeIndex).addClass('active');	    	
		    },
	  	},
	});
	
	$('.pro-cont .pro-box2 .ican2 li').on('touchend',function(){
		$('.pro-cont .pro-box2 .ican2 li').removeClass('active');
		$('.pro-cont .pro-box2 .ican2 li').eq($(this).index()).addClass('active');	
		proSwiper5.slideTo($(this).index(), 1000, false);
	});
	
	$('.pro-cont .pro-box2-2 .ican2 li').on('touchend',function(){
		$('.pro-cont .pro-box2-2 .ican2 li').removeClass('active');
		$('.pro-cont .pro-box2-2 .ican2 li').eq($(this).index()).addClass('active');	
		proSwiper6.slideTo($(this).index(), 1000, false);
	});
	
	$('.pro-cont .pro-box2-3 .ican2 li').on('touchend',function(){
		$('.pro-cont .pro-box2-3 .ican2 li').removeClass('active');
		$('.pro-cont .pro-box2-3 .ican2 li').eq($(this).index()).addClass('active');	
		proSwiper7.slideTo($(this).index(), 1000, false);
	});
	
	$('.pro-cont .pro-box2-4 .ican2 li').on('touchend',function(){
		$('.pro-cont .pro-box2-4 .ican2 li').removeClass('active');
		$('.pro-cont .pro-box2-4 .ican2 li').eq($(this).index()).addClass('active');	
		proSwiper8.slideTo($(this).index(), 1000, false);
	});
	
	$('.pro-cont .pro-box2-5 .ican2 li').on('touchend',function(){
		$('.pro-cont .pro-box2-5 .ican2 li').removeClass('active');
		$('.pro-cont .pro-box2-5 .ican2 li').eq($(this).index()).addClass('active');	
		proSwiper9.slideTo($(this).index(), 1000, false);
	});
	
	var proSwiper10 = new Swiper('.pro-slide10', {
		autoplay : 4000,
		speed:800,
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
		    slideChangeTransitionStart: function(){
				$('.pro-cont .pro-box1 .ican4 i').removeClass('active');
		      	$('.pro-cont .pro-box1 .ican4 i').eq(this.activeIndex).addClass('active');	    	
		    },
	  	},
	});	
	
	$('.pro-cont .pro-box1 .ican4 i').on('touchend',function(){
		$('.pro-cont .pro-box1 .ican4 i').removeClass('active');
		$('.pro-cont .pro-box1 .ican4 i').eq($(this).index()).addClass('active');	
		proSwiper10.slideTo($(this).index(), 1000, false);
	});
})();
