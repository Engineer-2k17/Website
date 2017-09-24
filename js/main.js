
$(document).ready(function(){
	init();
	/* The button click and menu */
	$(".ninja-btn").click(function() {
            $(this).toggleClass("active");
            if ($("menu").hasClass("active")) {
                $("menu").animate({
                    opacity: "0.0"
                });
            } else
                $("menu").animate({
                    opacity: "1.0"
                });

            $("menu").toggleClass("active");
        });
});

function init(){
	$(window).scroll(function(){
		var percentage = $(window).scrollTop()/$(window).outerHeight();
		var opa = Math.round(percentage*100)/100
		$(".fade_in").css({"opacity" : opa});
		$(".fade_out").css({"opacity": 1-opa})
	})
}