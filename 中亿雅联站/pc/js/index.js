(function(){
	//隐藏数字标题
	if($(window).width() < 1350){
		$('.solve .mid .box .num-tit').css('display','none');
		$('.procedure .box .num-tit').css('display','none');
		$('.product .box .num-tit').css('display','none');
	}else{
		$('.solve .mid .box .num-tit').css('display','block');
		$('.product .box .num-tit').css('display','block');
	}
	
	timer1 = null;
	timer1 = setInterval(function(){
		if($(window).width() < 1500){
			$('.header .logo').css('background','url(images/head-logo2.jpg) no-repeat');
			$('.header .logo').width(268);
		}else{
			$('.header .logo').css('background','url(images/head-logo.jpg) no-repeat');
			$('.header .logo').width(578);
		}
	},100);	
	
	$('.number .cont li').mouseenter(function(){
		$(this).children().children('img').attr('src','images/number-hover'+ ($(this).index()+1) +'.png');
	});
	
	$('.number .cont li').mouseleave(function(){
		$(this).children().children('img').attr('src','images/number-ican'+ ($(this).index()+1) +'.png');
	});
	
	$('.solve .menu li').each(function(){					
		$('.solve .menu li').eq($(this).index()).on('click',function(){
			if($(this).index() < $('.solve .menu li').length-1){
				$('.solve .menu li').each(function(){
					$('.solve .menu li').eq($(this).index()).removeClass('active');
					$('.solve .mid .txt li').eq($(this).index()).fadeOut();
				});
				
				$('.solve .menu li').eq($(this).index()).addClass('active');
				$('.solve .mid .txt li').eq($(this).index()).fadeIn();
			}
		});
		
	});
	
	$('.caselist .btnl').on('click',function(){
		var index = $('.caselist .show').index();
		if(index != 0){
			$('.caselist .text').removeClass('show');
			$('.caselist .text').eq(index-1).addClass('show');
		}
	});
	
	$('.caselist .btnr').on('click',function(){
		var index = $('.caselist .show').index();
		if(index < $('.caselist .text').length-1){
			$('.caselist .text').removeClass('show');
			$('.caselist .text').eq(index+1).addClass('show');
		}
	});
	
	$('.service .cla').mouseenter(function(){
		$('.service .cla .b').show();
		$('.service .cla .t').hide();
		$(this).children('.b').hide();
		$(this).children('.t').show();
	});
	
	$('.service .cla').mouseleave(function(){
		$('.service .cla .t').hide();
		$(this).children('.b').hide();
		$(this).children('.t').show();
	});
	
	$('.product .top .bx').mouseenter(function(){
		$('.product .top .bx .zz').hide();
		$(this).children('.zz').show();
	});
	
	var newliwidth = $('.news .list ul li').width();
	$('.news dt').each(function(){
		$('.news dt').eq($(this).index()).on('click',function(){
			$('.news .list ul').animate({left: -newliwidth * $(this).index()+'px'})
		})
	});
	
	function fnabousfocus(){
		$(this).val('');
		$(this).css('color','#000');
	}
	
	$('.abous .bg1 input').focus(fnabousfocus);
	$('.abous .bg2 input').focus(fnabousfocus);
	$('.abous .bg3 input').focus(fnabousfocus);
	
	$('.abous .bg1 input').blur(function(){
		$(this).val('您的名字');
		$(this).css('color','#cecece');
	});
	
	
	$('.abous .bg2 input').blur(function(){
		$(this).val('您的联系电话');
		$(this).css('color','#cecece');
	});
	
	
	$('.abous .bg3 input').blur(function(){
		$(this).val('您的邮箱');
		$(this).css('color','#cecece');
	});
	
	$('.news .fl li').mouseenter(function(){
		$('.news .fl li').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.news .fr a').mouseenter(function(){
		$('.news .fr a').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.news .fr a').mouseleave(function(){
		$('.news .fr a').removeClass('active');
	});
	
	$('.news .menu dt').each(function(){
		$('.news .menu dt').on('click',function(){
			$('.news .menu dt').removeClass('font-y');
			$(this).addClass('font-y');
		})
		
	});
})();

