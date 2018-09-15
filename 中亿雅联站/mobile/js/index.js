(function(){
	var mySwiper1 = new Swiper('.slide1', {
		autoplay :true,
		speed:800,
		loop:true,
		spaceBetween : 10,
		loopAdditionalSlides :1,
		effect : 'coverflow',
		slidesPerView:1.2,
		centeredSlides : true,
		coverflowEffect: {
		    rotate: 0,
		    stretch: 0,
		    depth: 200,
		    modifier: 0,
		    slideShadows : false
		},
		autoplay:{
			disableOnInteraction: false,
		},
	});
	
	var mySwiper2 = new Swiper('.slide2', {
		autoplay :true,
		speed:800,
		spaceBetween : 10,
		autoplay:{
			disableOnInteraction: false,
		},
		on: {
	    	slideChangeTransitionStart: function(){
				$('.advantage .num span').removeClass('active');
		      	$('.advantage .num span').eq(this.activeIndex).addClass('active');	
	    	},
  		},

	});
	
	var mySwiper3 = new Swiper('.slide3', {
		autoplay :false,
		speed:800,
		spaceBetween : 20,
		on: {
	    	slideChangeTransitionStart: function(){
				$('.new .menu li').removeClass('active');
		      	$('.new .menu li').eq(this.activeIndex).addClass('active');	
	    	},
  		},
	});
	
	$('.programme .list-menu li').on('mousedown',function(){
		var len = $('.programme .list-menu li').length;
		var _index = $(this).index();
		if(_index < len){
			$('.programme .list-menu li').removeClass('active');
			$('.programme .list-menu li').eq(_index).addClass('active');
			$('.programme .list-cont li').fadeOut();
			$('.programme .list-cont li').eq(_index).fadeIn();
		}
	});
	
	$('.advantage .num .btnl').on('mousedown',function(){
		var _index = mySwiper2.activeIndex;
		_index--;
		if(_index >= 0){
			mySwiper2.slideTo(_index, 1000, false);
			$('.advantage .num span').removeClass('active');
			$('.advantage .num span').eq(_index).addClass('active');	
		}
	});
	
	$('.advantage .num .btnr').on('mousedown',function(){
		var _index = mySwiper2.activeIndex;
		var len = $('.advantage .num span').length;
		_index++;
		if(_index < len){
			mySwiper2.slideTo(_index, 1000, false);
			$('.advantage .num span').removeClass('active');
			$('.advantage .num span').eq(_index).addClass('active');	
		}
	});
	
	var caselist_index = $('.caselist .bor-box .show').index();
	$('.caselist .bor-box .btnl').on('mousedown',function(){
		caselist_index--;
		if(caselist_index >= 0){
			$('.caselist .bor-box .pos-box').fadeOut();
			$('.caselist .bor-box .pos-box').eq(caselist_index).fadeIn();
		}else{
			caselist_index = 0;
		}
	});
	
	$('.caselist .bor-box .btnr').on('mousedown',function(){
		var len = $('.caselist .bor-box .pos-box').length;
		caselist_index++;
		if(caselist_index < len){
			$('.caselist .bor-box .pos-box').fadeOut();
			$('.caselist .bor-box .pos-box').eq(caselist_index).fadeIn();
		}else{
			caselist_index = len-1;
		}
	});
	
	$('.new .menu li').on('mousedown',function(){
		var _index = $(this).index();
		$('.new .menu li').removeClass('active');
		$('.new .menu li').eq(_index).addClass('active');	
		mySwiper3.slideTo(_index, 1000, false);
	});
})();