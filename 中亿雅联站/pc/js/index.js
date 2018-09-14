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
})();

