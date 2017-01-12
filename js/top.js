$(document).ready(function(){



	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToBottom').removeClass("show").addClass("hide");
			$('.scrollToTop').removeClass("hide").addClass("show");
		} else {
			$('.scrollToTop').removeClass("show").addClass("hide");
			$('.scrollToBottom').addClass("show").addClass("hide");
		}
	});

	//Click event to scroll to top
	$('.scrollToBottom').click(function(){
		$('html, body').animate({
   scrollTop: $(document).height()-$(window).height()},800);
		return false;
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});
