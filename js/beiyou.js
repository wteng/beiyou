
function init() {
	$("#header_menu ul li a").hover(function() {
		$(this).attr("class","current");	
	},function() {
		$(this).removeClass("current");
	});

	$('#one').ContentSlider({
                    width : '920px',
                    height : '200px',
                    speed : 800,
                    easing : 'easeInOutBack'
              });
}




$(document).ready(function () {
	init();
});