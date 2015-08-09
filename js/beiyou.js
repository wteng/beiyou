
function menu_hover() {
	var flag;
	$("#header_menu ul li a").hover(function() {
		flag = $(this).attr("class");
		if (flag == "") {
			$(this).attr("class","current");
		};
	},function() {
		if (flag == "") {
			$(this).removeClass("current");
		};
	});
}

function init() {
	menu_hover();

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