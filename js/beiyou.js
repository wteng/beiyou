
function init() {
	$("#header_menu ul li a").hover(function() {
		$(this).attr("class","current");	
	},function() {
		$(this)removeClass("current");
	});
}


$(document).ready(function () {
	init();
});