(function(){
	timer1 = null,
	num1 = 0,
	num2 = 0,
	num3 = null,
	num4 = 0,
	num5 = 0,
	num7 = 0,
	num6 = 0,
	carouselDate = {
		"width":840,
		"height":506,
		"posterWidth":300,
		"posterHeight":506,
		"scale":0.92,
		"speed":500,
		"autoPlay":true,
		"delay":3000,
		"verticalAlign":"middle"		
	};

$('.slick1').slick({
	autoplay:true,
	arrows:false,
	fade:true,
	autoplaySpeed:3000,
	speed: 600,
	cssEase: 'linear',
	pauseOnHover:true,
	draggable:false,
});

$('.slick2').slick({
	autoplay:true,
	arrows:false,
	autoplaySpeed:5000,
	speed: 600,
	cssEase: 'linear',
	pauseOnHover:true,
	draggable:false,
});

$('.slick3').slick({
	autoplay:true,
	arrows:false,
	speed: 800,
	cssEase: 'linear',
	asNavFor: '.slick4',
	pauseOnHover:true,
	draggable:false,
});

$('.slick4').slick({
	autoplay:true,
	arrows:false,
	speed: 800,
	cssEase: 'linear',
	asNavFor: '.slick3',
	pauseOnHover:true,
	draggable:false,
});


Carousel.init($("#carousel"));
$("#carousel").init();
$("#carousel").attr('data-setting',carouselDate);

$('.room').on('mouseover',function(){
	$('.slick3,.slick4').slick('slickPause');
});

$('.room').on('mouseout',function(){
	$('.slick3,.slick4').slick('slickPlay');
});


$('.slide-dots').on('mouseover',function(){
	$('.slick1').slick('slickPause');
});

$('.slide-dots').on('mouseout',function(){
	$('.slick1').slick('slickPlay');
});

$('.train-cont .prev,.train-cont .next,.train-cont .pag').on('mouseover',function(){
	$('.slick2').slick('slickPause');
});

$('.train-cont .prev,.train-cont .next,.train-cont .pag').on('mouseout',function(){
	$('.slick2').slick('slickPlay');
});

$('.slide-dots li').on('click',function(){	
	num1 = $(this).index();
	num1--;
	$('.slide-dots li').each(function(index){
		$('.slide-dots li').eq(index).removeClass('show');
		$('.slide-text li').eq(index).removeClass('show');
	});
	$('.slide-dots i').text('0' + (num1+2));
	$('.slide-dots li').eq($(this).index()).addClass('show');
	$('.slide-text li').eq($(this).index()).addClass('show');
	$('.slick1').slick('slickGoTo',$(this).index());
});

$('.slick1').on('beforeChange', function(event, slick,currentSlide){
	num1++;
	if(num1 === 5){
		num1 = 0;
	}
	$('.slide-dots li').each(function(index){
		$('.slide-dots li').eq(index).removeClass('show');
		$('.slide-text li').eq(index).removeClass('show');
	});
	$('.slide-dots li').eq(num1).addClass('show');
	$('.slide-text li').eq(num1).addClass('show');
	$('.slide-dots i').text('0' + (num1+1));
});


$('.train-cont .prev').on('click',function(){
	$('.slick2').slick('slickPrev');
	num2 = $('.slick2').slick('slickCurrentSlide');
	$('.train-cont .pag li').each(function(index){
		$('.train-cont .pag li').eq(index).removeClass('active');
	});
	
	$('.train-cont .pag li').eq(num2).addClass('active');
});

$('.train-cont .next').on('click',function(){
	$('.slick2').slick('slickNext');
});

$('.train-cont .pag li').on('click',function(){	
	num2 = $(this).index();
	num2--;
	$('.train-cont .pag li').each(function(index){
		$('.train-cont .pag li').eq(index).removeClass('active');
	});
	
	$('.train-cont .pag li').eq($(this).index()).addClass('active');
	$('.slick2').slick('slickGoTo',$(this).index());
});

$('.slick2').on('beforeChange', function(event, slick,currentSlide){
	num2++;	
	if(num2 === 6){
		num2 = 0;
	}
	
	$('.train-cont .pag li').each(function(index){
		$('.train-cont .pag li').eq(index).removeClass('active');
	});
	$('.train-cont .pag li').eq(num2).addClass('active');
});


$('.train-cont .menu li').on('mouseover',function(){
	console.log($(this).index());
	if(num3 != $(this).index()){
		$('.train-cont .menu li div').eq(num3).slideDown();
		
		$('.train-cont .menu li div').eq($(this).index()).slideUp();
		num3 = $(this).index();
	}
});

$('.train .menu').on('mouseleave',function(){		
	$('.train-cont .menu li div').eq(num3).slideDown();	
	num3 = null;
});

function coursetclick(){
	$('.course .dots dd').removeClass('active');
	$('.my-slide1 li').fadeOut(500);
	$('.my-slide1 li').eq(num4).fadeIn(500);
	$('.course .dots dd').eq(num4).addClass('active');
};

function coursetimer(){
	timer = setInterval(function(){
		num4++;
		
		if(num4 >= $('.my-slide1 li').length){
			num4 = 0;
		}
		
		coursetclick();
	},3000)
};

coursetimer();

$('.my-slide1,.course .dots,.course .prev,.course .next').on('mouseover',function(){
	clearInterval(timer);
});

$('.my-slide1,.course .dots,.course .prev,.course .next').on('mouseleave',function(){
	coursetimer();
});

$('.course .dots dd').on('click',function(){
	num4 = $(this).index();
	coursetclick();
});

$('.course .prev').on('click',function(){
	num4--;
	if(num4 < 0){
		num4 = 6;
	}
	coursetclick();
});

$('.course .next').on('click',function(){
	num4++;
	if(num4 >= $('.my-slide1 li').length){
		num4 = 0;
	}
	coursetclick();
});

$('.slick4').on('beforeChange', function(event, slick,currentSlide){
	num5++;	
	if(num5 >= $('.room .ican li').length){
		num5 = 0;
	}
	$('.room .ican li').removeClass('active');
	$('.room .text li').removeClass('show');
	$('.room .ican li').eq(num5).addClass('active');
	$('.room .text li').eq(num5).addClass('show');
	$('.room .dots i').text('0'+(num5+1));
});

$('.room .ican li').on('click',function(){
	num5 = $(this).index();
	num5--;
	$('.slick4').slick('slickGoTo',num5);
});


$('.cont-box .cou-cont .bot .dots i').on('click',function(){	
	$('.cont-box .cou-cont .bot .dots i').removeClass('active');
	$('.cont-box .cou-cont .bot .dots i').eq($(this).index()).addClass('active');
	$('.cont-box .cou-cont .bot .slide .box').fadeOut(800);
	$('.cont-box .cou-cont .bot .slide .box').eq($(this).index()).fadeIn(800);
});

var timer2 = null;
function timer2Interval(){
	timer2 = setInterval(function(){
		num6++;
		var len = $('.cont-box .cou-cont .bot .slide .box').length;
		if(num6 === len){
			num6 = 0;
		}
		
		$('.cont-box .cou-cont .bot .dots i').removeClass('active');
		$('.cont-box .cou-cont .bot .dots i').eq(num6).addClass('active');
		$('.cont-box .cou-cont .bot .slide .box').fadeOut(800);
		$('.cont-box .cou-cont .bot .slide .box').eq(num6).fadeIn(800);	
	},3000);
}

timer2Interval();

$('.cont-box .cou-cont .bot .fr').on('mouseenter',function(){
	clearInterval(timer2);
});

$('.cont-box .cou-cont .bot .fr').on('mouseleave',function(){
	timer2Interval();
});


function cousthreeslidefade(index){
	$('.cont-box .cou3-top .cou3-dots i').removeClass('active');
	$('.cont-box .cou3-top .cou3-dots i').eq(index).addClass('active');
	$('.cont-box .cou3-top .imgs img').fadeOut(800);
	$('.cont-box .cou3-top .imgs img').eq(index).fadeIn(800);
}


$('.cont-box .cou3-top .cou3-dots i').on('click',function(){	
	cousthreeslidefade($(this).index());
});

$('.cont-box .cou3-top .arrl').on('click',function(){	
	num7--;
	if(num7 < 0){
		num7 = 0;
	}else{
		cousthreeslidefade(num7);
	}
});

$('.cont-box .cou3-top .arrr').on('click',function(){	
	num7++;
	var len = $('.cont-box .cou3-top .cou3-dots i').length;
	if(num7 === len){
		num7 = 0;
	}
	cousthreeslidefade(num7);
});

var timer3 = null;
function timer3Interval(){
	timer3 = setInterval(function(){
		num7++;
		var len = $('.cont-box .cou3-top .cou3-dots i').length;
		if(num7 === len){
			num7 = 0;
		}
		
		cousthreeslidefade(num7);
	},3000);
}

timer3Interval();

$('.cont-box .cou3-top').on('mouseenter',function(){
	clearInterval(timer3);
});

$('.cont-box .cou3-top').on('mouseleave',function(){
	timer3Interval();
});

})();
