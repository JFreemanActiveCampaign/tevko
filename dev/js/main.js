(function($, window, undefined){
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    $('.Homenav a, .main-menu a').click(function () {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });
    //nav functionality
    $('.nav-button , .main-menu a').click(function() {
    	$('.content').toggleClass('nav-action');
    	$('.nav-button').toggleClass('nav-button_clicked');
    });
    $('.content' ).click(function() {
    	if ($('.content').hasClass('nav-action')) {
    		$('.content').removeClass('nav-action');
    		$('.nav-button').removeClass('nav-button_clicked');
    	}
    });
})(jQuery, window);
