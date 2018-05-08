var onOff1 = true,
	oDate = new Date(),
	nSignupH = $('.signup .cont .right ul').height(),
	nSignupT = 0;

var mySwiper1 = new Swiper('.slide1', {
	autoplay : 4000,
	speed:800,
	autoplay:{
		disableOnInteraction: false,
	},
	effect : 'cube',
	cubeEffect: {
	    slideShadows: false,
	    shadow: false,
	    shadowOffset: 0,
	    shadowScale: .7
	},
});

var mySwiper2 = new Swiper('.slide2', {
	speed:800,
	autoplay:true,
	autoplay:{
		disableOnInteraction: false,
	},
	effect : 'slide',
	observer:true,
    observeParents:true,
    on: {
	    slideChangeTransitionStart: function(){
			$('.course .cont1 .imgs>div').eq(0).find('.pag dd').removeClass('active');
	      	$('.course .cont1 .imgs>div').eq(0).find('.pag dd').eq(this.activeIndex).addClass('active');	    	
	    },
  	},
});

var mySwiper3 = new Swiper('.slide3', {
	speed:800,
	autoplay:true,
	autoplay:{
		disableOnInteraction: false,
	},
	effect : 'slide',
	observer:true,
    observeParents:true,
    on: {
	    slideChangeTransitionStart: function(){
			$('.course .cont1 .imgs>div').eq(1).find('.pag dd').removeClass('active');
	      	$('.course .cont1 .imgs>div').eq(1).find('.pag dd').eq(this.activeIndex).addClass('active');	    	
	    },
  	},
});

var mySwiper4 = new Swiper('.slide4', {
	initialSlide:0,
	speed:800,
	autoplay:true,
	autoplay:{
		disableOnInteraction: false,
	},
	effect : 'slide',
	observer:true,
    observeParents:true,
    on: {
	    slideChangeTransitionStart: function(){
			$('.course .cont1 .imgs>div').eq(2).find('.pag dd').removeClass('active');
	      	$('.course .cont1 .imgs>div').eq(2).find('.pag dd').eq(this.activeIndex).addClass('active');	    	
	    },
  	},
});

var mySwiper5 = new Swiper('.slide5', {
	speed:800,
	autoplay:true,
	autoplay:{
		disableOnInteraction: false,
	},
	effect : 'slide',
	observer:true,
    observeParents:true,
    on: {
	    slideChangeTransitionStart: function(){
			$('.course .cont2 .imgs>div').eq(0).find('.pag dd').removeClass('active');
	      	$('.course .cont2 .imgs>div').eq(0).find('.pag dd').eq(this.activeIndex).addClass('active');	    	
	    },
  	},
});

var mySwiper6 = new Swiper('.slide6', {
	initialSlide:0,
	speed:800,
	autoplay:true,
	autoplay:{
		disableOnInteraction: false,
	},
	effect : 'slide',
	observer:true,
    observeParents:true,
    on: {
	    slideChangeTransitionStart: function(){
			$('.course .cont2 .imgs>div').eq(1).find('.pag dd').removeClass('active');
	      	$('.course .cont2 .imgs>div').eq(1).find('.pag dd').eq(this.activeIndex).addClass('active');	    	
	    },
  	},
});

var mySwiper7 = new Swiper('.slide7', {
	initialSlide:0,
	speed:800,
	autoplay:true,
	autoplay:{
		disableOnInteraction: false,
	},
	effect : 'slide',
	observer:true,
    observeParents:true,
    on: {
	    slideChangeTransitionStart: function(){
			$('.course .cont2 .imgs>div').eq(2).find('.pag dd').removeClass('active');
	      	$('.course .cont2 .imgs>div').eq(2).find('.pag dd').eq(this.activeIndex).addClass('active');	    	
	    },
  	},
});


var mySwiper8 = new Swiper('.slide8', {
	autoplay : 4000,
	speed:800,
	autoplay:{
		disableOnInteraction: false,
	},
	pagination: {
    	el: '.swiper-pagination',
    	clickable :true,
  	},
	effect : 'slide',
	on: {
	    slideChangeTransitionStart: function(){
			$('.scene .slide .pag li').removeClass('active');
	      	$('.scene .slide .pag li').eq(this.activeIndex).addClass('active');	    	
	    },
  	},
});

$('.header-nav .menu-btn').on('touchend',function(e){
	if(onOff1){
		$('.header .head-menu').fadeIn();
	}else{
		$('.header .head-menu').fadeOut();
	}
	onOff1 = !onOff1;
	
	
	$(document).on('touchend',function(){
		$('.header .head-menu').fadeOut();
		onOff1 = true;
	});
	
	e.stopPropagation();
});

for(var i = 0; i < 6; i++){
	$('.signup .cont .right ul').append('<li>'+ $('.signup .cont .right ul li').eq(i).html() +'</li>');
}

$('.signup .cont .right ul li em').each(function(){
	$('.signup .cont .right ul li em').text(oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate());
});

timer1 = setInterval(function(){
	if(nSignupT > -nSignupH){
		nSignupT--;
	}else if(nSignupT == -nSignupH){
		nSignupT = 0;
	}
	
	$('.signup .cont .right ul').css('top',nSignupT+'px');
	
},30);

var arrowL1 = parseInt($('.course .cont1 .nav img').position().left);
var arrowL2 = parseInt($('.course .cont2 .nav img').position().left);
var aSwiper1 = [mySwiper2,mySwiper3,mySwiper4];
var aSwiper2 = [mySwiper5,mySwiper6,mySwiper7];
var aSwiper3 = [mySwiper2,mySwiper3,mySwiper4,mySwiper5,mySwiper6,mySwiper7];
function fnslideauto(swiper){
	swiper.slideTo(0, 100, false);
	swiper.autoplay.stop();
	swiper.autoplay.start();
}

function fnclickpag(ele,oswiper){
	ele.find('.pag dd').on('touchend',function(){
		ele.find('.pag dd').removeClass('active');
		ele.find('.pag dd').eq($(this).index()).addClass('active');
		oswiper.slideTo($(this).index(), 1000, false);
	});
}

$('.course .cont1 .nav li').on('touchend', function(){
	var nLi = parseInt($('.course .cont1 .nav li').eq($(this).index()).offset().left);
	
	$('.course .cont1 .nav img').animate({left: (nLi + arrowL1 -12) +'px'});
	$('.course .cont1 .imgs>div').each(function(index){
		$('.course .cont1 .imgs>div').eq(index).removeClass('show');
	});
	$('.course .cont1 .imgs>div').eq($(this).index()).addClass('show');
	$('.course .cont1 .imgs>div .pag dd').removeClass('active');
	$('.course .cont1 .imgs>div').eq($(this).index()).find('.pag dd').eq(0).addClass('active');
	fnslideauto(aSwiper1[$(this).index()]);
	fnclickpag($('.course .cont1 .imgs>div').eq($(this).index()),aSwiper1[$(this).index()])
});



$('.course .cont2 .nav li').on('touchend',function(){
	var nLi = parseInt($('.course .cont2 .nav li').eq($(this).index()).offset().left);
	
	$('.course .cont2 .nav img').animate({left: (nLi + arrowL2 -12) +'px'});
	$('.course .cont2 .imgs>div').each(function(index){
		$('.course .cont2 .imgs>div').eq(index).removeClass('show');
	});
	$('.course .cont2 .imgs>div').eq($(this).index()).addClass('show');
	$('.course .cont2 .imgs>div .pag dd').removeClass('active');
	$('.course .cont2 .imgs>div').eq($(this).index()).find('.pag dd').eq(0).addClass('active');
	fnslideauto(aSwiper2[$(this).index()]);
});


$('.course .imgs>div').each(function(index){
	fnclickpag($('.course .imgs>div').eq(index),aSwiper3[index])
});

$('.scene .slide .pag li').on('touchend',function(){
	$('.scene .slide .pag li').removeClass('active');
	$('.scene .slide .pag li').eq($(this).index()).addClass('active');
	mySwiper8.slideTo($(this).index(), 1000, false);
});

$('.news .nav li').on('touchend',function(){
	$('.news .nav li').removeClass('active');
	$('.news .cont li').removeClass('show');
	$('.news .nav li').eq($(this).index()).addClass('active');
	$('.news .cont li').eq($(this).index()).addClass('show');
});


$('.footer h3').on('touchend',function(){
	$('html,body').animate({scrollTop: 0},'slow')
});

//console.log(1);