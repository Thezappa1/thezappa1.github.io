
jQuery(document).ready(function($){
	//open popup
	$("a[class='cd-popup-trigger']").on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$("a[class='cd-popup-close']").on('click', function(event){
		event.preventDefault();
		$(this).removeClass('is-visible');
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});
