var onOff = true;

var mySwiper = new Swiper('.slide1', {
	effect : 'fade',
	autoplay : 4000,
	speed:800,
	autoplay:{
		disableOnInteraction: false,
	},
	on: {
	    slideChangeTransitionStart: function(){
	    	$('.slide-pag li').each(function(index){
				$('.slide-pag li').eq(index).removeClass('show');
			});
	      	$('.slide-pag li').eq(this.activeIndex).addClass('show');
	    },
  	},

});

var mySwiper2 = new Swiper('.slide2', {
	speed:500,
	autoplay : 3000,
	autoplay:{
		disableOnInteraction: false,
	},
	spaceBetween : 20,
	on: {
	    slideChangeTransitionStart: function(){
	    	$('.slide2-dots div').each(function(index){
				$('.slide2-dots div').eq(index).removeClass('show');
			});
	      	$('.slide2-dots div').eq(this.activeIndex).addClass('show');
	    },
  	},
});

$('.slide2-dots div').on('touchend',function(index){
	$('.slide2-dots div').each(function(index){
		$('.slide2-dots div').eq(index).removeClass('show');
	});
	
	$('.slide2-dots div').eq($(this).index()).addClass('show');
	mySwiper2.slideTo($(this).index(), 1000, false);
});

//mySwiper.slideTo(thisindex, 1000, false);

var mySwiper3 = new Swiper('.slide3', {
	slidesPerView : 3,
	speed:500,
});

$('.ambient-prev').on('touchend',function(){
	mySwiper3.slidePrev();
});

$('.ambient-next').on('touchend',function(){
	mySwiper3.slideNext();
});

$('.head-btn').on('touchend',function(e){
	if(onOff){
		$('.head-nav').fadeIn();
	}else{
		$('.head-nav').fadeOut();
	}
	onOff = !onOff;
	
	
	$(document).on('touchend',function(){
		$('.head-nav').fadeOut();
		onOff = true;
	});
	
	e.stopPropagation();
});

$('.new-nav li').on('touchend',function(){
	$('.new-nav li').each(function(index){
		$('.new-nav li').eq(index).removeClass('active');
		$('.new-list').children('li').eq(index).removeClass('show');
	});
	
	$('.new-nav li').eq($(this).index()).addClass('active');
	$('.new-list').children('li').eq($(this).index()).addClass('show');	
});

$('.footer h3').on('touchend',function(){
	$('html,body').animate({scrollTop: 0},'slow')
});
