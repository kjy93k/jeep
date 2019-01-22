$(document).ready(function(){
	var $current=0;
	var sidenum=0;
	var sidenum2=0;
	var sidenum3=0;

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

	$('#side-nav').hide();
	$('.sidemenu').click(function(e){
		e.preventDefault();
		if(sidenum==0){
			$(this).addClass('on');
			$('#side-nav ul').hide();
			sidenum2=0;
			sidenum3=0;
			$('#side-nav').show(300);
			sidenum=1;
		} else{
			$(this).removeClass('on')
			sidenum=0;
			$('#side-nav').hide(300);
		}
	});
	$('#side-nav ul').hide();
	$('#side-nav .standard h2').click(function(){
		if (sidenum2==0){
			$(this).addClass('on');
			$(this).next().show(300);
			sidenum2=1;
		} else{
			$(this).removeClass('on');
			$(this).next().hide(300);
			sidenum2=0;
		}
	});
	$('#side-nav .limited h2').click(function(){
		if (sidenum3==0){
			$(this).addClass('on');
			$(this).next().show(300);
			sidenum3=1;
		} else{
			$(this).removeClass('on');
			$(this).next().hide(300);
			sidenum3=0;
		}
	});

});
