document.createElement("article");  
document.createElement("footer");  
document.createElement("header");  
document.createElement("hgroup");  
document.createElement("nav");

$(document).ready(function($){
	
	$('#iosslider-BW').each(function() {
	    $(this).iosSlider({
	        scrollbar: false,
			snapToChildren: true,
			desktopClickDrag: true,
			responsiveSlideWidth: true,
			navNextSelector: $('.nextButton-BW'),
			navPrevSelector: $('.prevButton-BW'),
			infiniteSlider: true,
			keyboardControls: true	    
		});	
	});
	
	$('#iosslider-LTKD').each(function() {
	    $(this).iosSlider({
	        scrollbar: false,
			snapToChildren: true,
			desktopClickDrag: true,
			responsiveSlideWidth: true,
			navNextSelector: $('.nextButton-LTKD'),
			navPrevSelector: $('.prevButton-LTKD'),
			infiniteSlider: true,
			keyboardControls: true,
			autoSlide: false    
		});	
	});
	
});
