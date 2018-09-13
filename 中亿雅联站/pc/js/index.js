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
	
})();

