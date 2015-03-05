
jQuery(document).ready(function($){
	//open popup
	$("a[class='cd-popup-trigger']").on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$("div[class='cd-popup']").on('click', function(event){
		if( $(event.target).is("a[class='cd-popup-close']") || $(event.target).is("div[class='cd-popup']") ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$("div[class='cd-popup']").removeClass('is-visible');
	    }
    });
});
