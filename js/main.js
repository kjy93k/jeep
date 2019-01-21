$(document).ready(function(){
	var $current=0;

	$('#fullpage').fullpage({
	anchor:["1st","2st","3st","4st"],
	menu:"#menu"
	});
	$('.interval ul li').eq(0).fadeIn(0).delay(7800).fadeOut(200);
	timer();
	function timer(){
		setInterval(function(){
			if ($current<=2) {
				$current++;
			} else {
				$current=0;
			}
			$('.interval ul li').eq($current).fadeIn(200).delay(7600).fadeOut(200);
		},8000)
	};
});
