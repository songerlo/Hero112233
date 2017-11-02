$(function(){
	var swiper1 = new Swiper('.hezuo', {
      
        slidesPerView:3,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true,
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
    });
		
		var swiper = new Swiper('.lunbo', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });
})