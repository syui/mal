$(function(){
	$("#fixed-box").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 2300) {
				$('#fixed-box').slideDown(100);
			} else {
				$('#fixed-box').slideUp(100);
			}
		});
	});
});
