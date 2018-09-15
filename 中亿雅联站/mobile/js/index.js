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
	});
	
	var mySwiper2 = new Swiper('.slide2', {
		autoplay :true,
		speed:800,
		loop:true,
		spaceBetween : 10
	});
	
})();