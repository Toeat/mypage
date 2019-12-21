var page1num = 0;

$('.page1-slick').slick({
//	autoplay:true,
	fade:true,
	arrows:false,
	autoplaySpeed:3000,
	dotsClass:'dots',
	speed: 500,
	cssEase: 'linear',
});

$('.page1-slick-btnl').on('click',function(){
	page1num--;
	
	if(page1num < 0){
		page1num = 9
	}
	
	$('.page1-slick').slick('slickPrev');
	
	$('.dots li').each(function(index){
		$('.dots li').eq(index).removeClass('active');
	});
				
	$('.dots li').eq(page1num).addClass('active');
	
	$('.slide-page1 .text .show i').text(page1num+1);
	
	console.log(page1num);
});

$('.page1-slick-btnr').on('click',function(){	
	page1num++;
	
	if(page1num > 9 ){
		page1num = 0
	}
	
	$('.page1-slick').slick('slickNext');
	
	$('.dots li').each(function(index){
		$('.dots li').eq(index).removeClass('active');
	});
				
	$('.dots li').eq(page1num).addClass('active');
	$('.slide-page1 .text .show i').text(page1num+1);
});

$('.dots li').on('click',function(){
		
	page1num = $(this).index();
		
	$('.dots li').each(function(index){
		$('.dots li').eq(index).removeClass('active');
	});
		
		
	$('.dots li').eq(page1num).addClass('active');
	$('.page1-slick').slick('slickGoTo',page1num);
	$('.slide-page1 .text .show i').text(page1num+1);
});

