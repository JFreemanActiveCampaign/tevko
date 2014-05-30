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
        $('body').toggleClass('off-cancas-body');
    });
    $('.content' ).click(function() {
    	if ($('.content').hasClass('nav-action')) {
    		$('.content').removeClass('nav-action');
    		$('.nav-button').removeClass('nav-button_clicked');
            $('body').removeClass('off-cancas-body');
    	}
    });

    //disable click and hover events on scroll, prevents browser repaint
    var body = document.body,
        timer;
    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover');
      }

      timer = setTimeout(function() {
        body.classList.remove('disable-hover');
      },200);
    }, false);
    //if our skill element is visible, do something cool to it
    $(window).scroll(function() {
        $('.theStack--item').each(function() {
            if($(this).visible()) {
                $(this).addClass('skillMagic');
            }
        });
    });
    //olde borwsers
    $('.Oldclose').click(function() {
        $('.ye-olde-browsers').hide();
    });
    //blog - show comments onclick of button and load in discuss
    $('.blog--button_comments').click(function() {
        var cBody = $('.comments_body').html();
        var txt = $('.blog--comments').is(':visible') ? 'Show Comments' : 'Hide Comments';
        if(!$(this).hasClass('clicked')) {
            $('.blog--comments').append(cBody);
            $(this).text(txt);
            $('.blog--comments').toggle();
            $(this).addClass('clicked');
        } else {
            $(this).text(txt);
            $('.blog--comments').toggle();
        }

    });
    //close popup
    $('.popup-close').click(function() {
        $(this).parent().fadeOut();
    });

})(jQuery, window);
