var num1 = 0,
	num2 = null,
	num3 = 0,
	num4 = 0,
	num5 = 0,
	num6 = 0,
	num7 = 0,
	timer = null;

$('.slick').slick({
	autoplay:true,
	arrows:false,
	autoplaySpeed:3000,
	infinite: true,
	speed: 300,
	cssEase: 'linear',
	dots:true,
});

$('.slick').on('afterChange', function(event, slick,currentSlide){	
	var num = currentSlide;
	
	$('.text1 ul li').each(function(index){
		$('.text1 ul li').eq(index).removeClass('text-style');
	});
	
	$('.text1 ul li').eq(num).children('div').eq(1).removeClass('show');
	$('.text1 ul li').eq(num).children('div').eq(0).addClass('show');
	$('.text1 ul li').eq(num).addClass('text-style');
});

$('.slick').on('beforeChange', function(event, slick,currentSlide){	
	var num = currentSlide;	
	$('.text1 ul li').eq(num).children('div').eq(0).removeClass('show');
	$('.text1 ul li').eq(num).children('div').eq(1).addClass('show');	
});

$('.text1 ul li').each(function(index){
	$('.text1 ul li').on('click',function(){
		$('.slick').slick('slickGoTo',$(this).index());
	});
});

$('.train-tit li').each(function(index){
	$('.train-tit  li').eq(index).on('click',function(){
		if(num1 != $(this).index()){
			$('.train-tit  li').eq(num1).removeClass('active');
			$(this).addClass('active');
			$('.train-img  li').eq(num1).fadeOut(500);
			$('.train-img  li').eq($(this).index()).fadeIn(1000);
			num1 = $(this).index();
		}
	});
});

$('.img-cont img').each(function(index){
	$('.img-cont img').eq(index).on('mouseover',function(){
		$(this).addClass('shadow');
	});
	$('.img-cont img').eq(index).on('mouseout',function(){
		$(this).removeClass('shadow');
	});
});

$('.project-img a').each(function(index){	
	$('.project-img a').eq(index).on('mouseover',function(){
		if(num2 != $(this).index()){
			$('.project-img a div').eq(num2).slideDown();
			$(this).children('div').slideUp();			
			num2 = $(this).index();			
		};		
	});	
});

function interval(){
	var arrint = [0,2,4];
	timer = setInterval(function(){
		num6++;
		if(num6 > 2){
			num6 = 0;
		}
		
		$('.student-cont ul').animate({left:-$('.student-cont ul li').width()*num6 + 'px'});		
		$('.student-dots li').eq(num3).removeClass('dots1');
		$('.student-dots li').eq(num3).addClass('dots2');
		$('.student-dots li').eq(arrint[num6]).removeClass('dots2');
		$('.student-dots li').eq(arrint[num6]).addClass('dots1');
		
		num3 = arrint[num6];	

	},5000);
};

interval();

$('.student-cont ul,.student-dots').on('mouseover',function(){
	clearInterval(timer);
});

$('.student-cont ul,.student-dots').on('mouseout',function(){
	interval();
});

$('.student-dots .dots').each(function(index){
	var num7 = index;
	$('.student-dots .dots').eq(index).on('click',function(){
		$('.student-dots li').eq(num3).removeClass('dots1');
		$('.student-dots li').eq(num3).addClass('dots2');
		$('.student-dots li').eq($(this).index()).removeClass('dots2');
		$('.student-dots li').eq($(this).index()).addClass('dots1');
		$('.student-cont ul').animate({left:-$('.student-cont ul li').width()*num7 + 'px'})
		num3 = $(this).index();
		console.log(num3);
	});
});

$('.ambient-slide .prev').on('click',function(){
	if(num4 > 0){
		num4--;
	}
	$('.ambient-img ul').animate({left:-$('.ambient-img ul li').outerWidth(true)*num4+'px'});
});

$('.ambient-slide .next').on('click',function(){
	if(num4 < $('.ambient-img ul li').length-3){
		num4++;
	}
	$('.ambient-img ul').animate({left:-$('.ambient-img ul li').outerWidth(true)*num4+'px'});
});

$('.news-nav li').each(function(index){
	$('.news-nav li').eq(index).on('click',function(){
		$('.news-nav li').eq(num5).removeClass('active');
		$('.news-list li').eq(num5).removeClass('show');
		$('.news-list li').eq($(this).index()).addClass('show');
		$(this).addClass('active');
		num5 = $(this).index();
	});
});


