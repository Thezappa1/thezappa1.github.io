<script type="text/javascript">
jQuery("a[id='id-to-select']").click(function() {
    // Code here
});
</script>

jQuery(document).ready(function($){
			//open popup
			jQuery("a[class='cd-popup-trigger']").on('click', function(event){
				event.preventDefault();
				$('.cd-popup').addClass('is-visible');
			});
			
			//close popup
			jQuery("a[class='cd-popup']").on('click', function(event){
				if( $(event.target).is('a[class='cd-popup-close']') || $(event.target).is('a[class='cd-popup']') ) {
					event.preventDefault();
					$(this).removeClass('is-visible');
				}
			});
			//close popup when clicking the esc keyboard button
			$(document).keyup(function(event){
		    	if(event.which=='27'){
		    		jQuery("a[class='cd-popup']").removeClass('is-visible');
			    }
		    });
		});
