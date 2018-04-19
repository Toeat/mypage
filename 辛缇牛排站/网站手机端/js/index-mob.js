var onOff1 = true;

var mySwiper1 = new Swiper('.slide1', {
	autoplay : 4000,
	speed:800,
	autoplay:{
		disableOnInteraction: false,
	},
	pagination: {
    	el: '.swiper-pagination',
    	clickable :true,
  	},
	effect : 'cube',
	cubeEffect: {
	    slideShadows: false,
	    shadow: false,
	    shadowOffset: 0,
	    shadowScale: .7
	},
	on: {
	    slideChangeTransitionStart: function(){
			$('.head-txt li').removeClass('active');
	      	$('.head-txt li').eq(this.activeIndex).addClass('active');	    	
	    },
  	},

});

var mySwiper2 = new Swiper('.slide2', {
	autoplay :true,
	autoplay:{
		disableOnInteraction: false,
	},
	speed:800,
	effect : 'fade',
	on: {
	    slideChangeTransitionStart: function(){
			$('.train-txt li').removeClass('active');
			$('.train-pag li').removeClass('active');
	      	$('.train-txt li').eq(this.activeIndex).addClass('active');
	      	$('.train-pag li').eq(this.activeIndex).addClass('active');
	    },
  	},

});

var mySwiper3 = new Swiper('.slide3', {
	autoplay : 4000,
	speed:800,
	effect : 'fade',
	on: {
	    slideChangeTransitionStart: function(){
	    	$('.scene .ican li').each(function(index){
				$('.scene .ican li').eq(index).removeClass('active');
			});
	      	$('.scene .ican li').eq(this.activeIndex).addClass('active');
	    },
  	},

});

var mySwiper4 = new Swiper('.slide4', {
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

var mySwiper5 = new Swiper('.slide5', {
	autoplay:true,
	speed:800,
	on: {
	    slideChangeTransitionStart: function(){
			$('.room .room-pag li').removeClass('active');
			$('.room .slide-txt li').removeClass('active');
			$('.room .slide-txt li').eq(this.activeIndex).addClass('active');
	      	$('.room .room-pag li').eq(this.activeIndex).addClass('active');
	      	$('.room .num span').text('0'+(this.activeIndex+1));
	    },
  	},
});

$('.head-nav').on('touchstart',function(e){
	var touch = e.originalEvent,
		startX = touch.changedTouches[0].pageX;
		
		startX = startX - parseInt($('.head-nav').css('left'));
	
	$('.head-nav').on('touchmove',function(e){
		e.preventDefault();
		touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		var pos = touch.pageX-startX,
			minpos =  $(document).width() - $('.head-nav').width();
		if(pos > 0){
			pos = 0;
		}else if(pos < minpos){
			pos = minpos;
		}
		
		$('.head-nav').css('left',pos);
	});
//	$('.head-nav').css('left',startX);
})


$('.menu-ican').on('touchend',function(e){
	if(onOff1){
		$('.head-nav').fadeIn();
	}else{
		$('.head-nav').fadeOut();
	}
	onOff1 = !onOff1;
	
});

$('.train-slide .prev').on('touchend',function(){
	mySwiper2.slidePrev();
});

$('.train-slide .next').on('touchend',function(){
	mySwiper2.slideNext();
});

$('.train-pag li').on('touchend',function(){
	$('.train-pag li').removeClass('active');
	$('.train-txt li').removeClass('active');
	$('.train-txt li').eq($(this).index()).addClass('active');
	$('.train-pag li').eq($(this).index()).addClass('active');
	mySwiper2.slideTo($(this).index(), 1000, false);
});

$('.scene .prev').on('touchend',function(){
	mySwiper3.slidePrev();
});

$('.scene .next').on('touchend',function(){
	mySwiper3.slideNext();
});

$('.scene .ican li').on('touchend',function(){
	$('.scene .ican li').removeClass('active');
	$('.scene .ican li').eq($(this).index()).addClass('active');
	mySwiper3.slideTo($(this).index(), 1000, false);
});

$('.room .room-pag li').on('touchend',function(){
	$('.room .room-pag li').removeClass('active');
	$('.room .slide-txt li').removeClass('active');
	$('.room .slide-txt li').eq($(this).index()).addClass('active');
	$('.room .room-pag li').eq($(this).index()).addClass('active');
	mySwiper5.slideTo($(this).index(), 1000, false);
	$('.room .num span').text('0'+($(this).index()+1));
});

$('.footer h3').on('touchend',function(){
	$('html,body').animate({scrollTop: 0},'slow')
});