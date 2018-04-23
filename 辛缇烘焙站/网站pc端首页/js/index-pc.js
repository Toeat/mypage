var num1 = 0,
	num2 = 0,
	onOff = true,
	timer1 = null,
	nTop = $('.dynamic .cont ul').position().top,
	oDate = new Date(),
	oArrow = $('.course .cont .list .arrow').position().top;

$('.slick1').slick({
	autoplay:true,
	arrows:false,
	autoplaySpeed:3000,
	speed: 600,
	cssEase: 'linear',
	pauseOnHover:true,
});

$('.slick2').slick({
	autoplay:true,
	arrows:false,
	autoplaySpeed:3000,
	speed: 400,
	cssEase: 'linear',
	pauseOnHover:true,
	draggable:false,
});

$('.slick3').slick({
	autoplay:true,
	arrows:false,
	fade:true,
	autoplaySpeed:3000,
	speed: 600,
	cssEase: 'linear',
	pauseOnHover:true,
	draggable:false,
});

for(var i = 0; i < 6; i++){
	$('.dynamic .cont ul').append('<li>'+ $('.dynamic .cont ul li').eq(i).html() +'</li>');
}

$('.dynamic .cont ul li em').each(function(){
	$('.dynamic .cont ul li em').text(oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate());
});

var nMaxtop = $('.dynamic .cont ul').height() - $('.dynamic .cont').height()-18;

timer1 = setInterval(function(){
	if(nTop > -nMaxtop){
		nTop--;
	}else if(nTop == -nMaxtop){
		nTop = 0;
	}
	
	$('.dynamic .cont ul').css('top',nTop+'px');
	
},20);


$('.course .cont .slick2').on('mouseover',function(){
	$('.slick2').slick('slickPause');
});

$('.course .cont .slick2').on('mouseout',function(){
	$('.slick2').slick('slickPlay');
});

$('.scene .slide-cont .slick3').on('mouseover',function(){
	$('.slick3').slick('slickPause');
});

$('.scene .slide-cont .slick3').on('mouseout',function(){
	$('.slick3').slick('slickPlay');
});

$('.course .cont .pag .active').width(92);

function fnCourse(oIndex){
	$('.course .cont .list li').each(function(index){
		$('.course .cont .list li').eq(index).removeClass('active');
		$('.course .cont .pag li').eq(index).removeClass('active');
		$('.course .cont .pag li').eq(index).animate({width :'14px'},200);
	});
	$('.course .cont .list li').eq(oIndex).addClass('active');
	$('.slick2').slick('slickGoTo',oIndex);
	$('.course .cont .list .arrow').animate({top : oArrow + (70 * oIndex) +'px'},200);
	$('.course .cont .pag li').eq(oIndex).addClass('active');
	$('.course .cont .pag li').eq(oIndex).animate({width :'92px'},200);	
};

$('.slick2').on('beforeChange', function(event, slick,currentSlide){
	num1++;
	
	if(num1 === $('.course .cont .list li').length){
		num1 = 0;
	}
	
	fnCourse(num1)
});

$('.course .cont .list li').each(function(index){
	$('.course .cont .list li').eq(index).on('click',function(){
		num1 = $(this).index();
		num1--;		
		fnCourse($(this).index())
	});
	
	$('.course .cont .pag li').eq(index).on('click',function(){
		num1 = $(this).index();
		num1--;
		fnCourse($(this).index());
	});
	
});

$('.scene .slide-cont .ican .active').width(60);

function fnScene(oIndex){
	$('.scene .slide-cont .ican li').each(function(index){
		$('.scene .slide-cont .ican li').eq(index).removeClass('active');
		$('.scene .slide-cont .ican li').eq(index).animate({width :'14px'},200);
	});
	
	$('.scene .slide-cont .ican li').eq(oIndex).addClass('active');
	$('.scene .slide-cont .ican li').eq(oIndex).animate({width :'60px'},200);
};

$('.scene .slide-cont .prev').on('click',function(){
	onOff = !onOff;

	$('.slick3').slick('slickPrev');
	num2 = $('.slick3').slick('slickCurrentSlide');
	
	fnScene(num2);
	onOff = !onOff;
});

$('.scene .slide-cont .next').on('click',function(){
	$('.slick3').slick('slickNext');
});

$('.scene .slide-cont .ican li').on('click',function(){
	onOff = !onOff;
	num2 =  $(this).index();
	
	fnScene($(this).index());
	$('.slick3').slick('slickGoTo',$(this).index());
	onOff = !onOff;
});

$('.slick3').on('beforeChange', function(event, slick,currentSlide){
	if(onOff){
		num2++;
		if(num2 >= $('.course .cont .list li').length){
			num2 = 0;
		}
		
		fnScene(num2);
	}
});

$('.news .cont .nav li').on('click',function(){
	$('.news .cont .nav li').each(function(index){
		$('.news .cont .nav li').eq(index).removeClass('active');
		$('.news .cont .list-cont li').eq(index).removeClass('show');
	});
	$('.news .cont .nav li').eq($(this).index()).addClass('active');
	$('.news .cont .list-cont li').eq($(this).index()).addClass('show');
});

console.log($('.course .cont .list li').length);
