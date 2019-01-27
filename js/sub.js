$(document).ready(function(){
	var sidenum=0;
	var sidenum2=0;
	var sidenum3=0;
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
	var $cn=$('.car-1-1').html();
	var $cti ='01';
	var $wti ='01';
	var $tti ='01';
	var $rti =''
	var $i=8;
	var $folderN =$('.find-name div').attr('class');
	function r(){
		 if($('.rotate').length){
			$rti = 'r0'+$i;
		}
	}
	r();
	if ($('.car-list li').length>2) {
		$('.car-list>ul').css('padding','0 30%');
	}
	$('.car').each(function(){
		$(this).addClass($(this).text());
	});
	$('.car-select').each(function(){
		var $carIndex = $(this).index()-3;
		console.log($carIndex);
		$(this).addClass($('.car').eq($carIndex).text());
	});
	$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+$rti+'.jpg'});
	$('.car-select').hide();
	$('.car-select-1').show();
	$('.car-list li').click(function(){
		$cn=$(this).html();
		$cnti=$(this).index();
		$('.car-list li').removeClass('select');
		$(this).addClass('select');
		$('.car-select').hide()
		$('.car-select').eq($cnti).fadeIn().show();
		$cti ='01';
		$wti ='01';
		$tti ='01';
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+$rti+'.jpg'});
	});
	$('.color li:first-child').addClass('select');
	$('.wheel li:first-child').addClass('select');
	$('.top li:first-child').addClass('select');
	$('.rotate li:first-child').addClass('select');
	$('.color li').click(function(){
		var $ti = $(this).index();
		if($ti<9) {
			$cti='0'+eval($ti+1);
		} else {
			$cti=eval($ti+1);
		}
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+$rti+'.jpg'});
		$('.color li').removeClass('select');
		$(this).addClass('select');
	});

	$('.wheel li').click(function(){

		var $ti = $(this).index();
		if($ti<9) {
			$wti='0'+eval($ti+1);
		} else {
			$wti=eval($ti+1);
		}
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+$rti+'.jpg'});
		$('.wheel li').removeClass('select');
		$(this).addClass('select');		
	});
	$('.top li').click(function(){
		var $ti = $(this).index();
		if($ti<9) {
			$tti='0'+eval($ti+1);
		} else {
			$tti=eval($ti+1);
		}
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+$rti+'.jpg'});
		$('.top li').removeClass('select');
		$(this).addClass('select');		
	});

	$('.rotate li').click(function(){
		$('.rotate li').removeClass('select');
		$(this).addClass('select');
	});

	$('.left').click(function(){
		$i--;
		if ($i<1) {
			$i=8;
		}
		$rti = 'r0'+$i;
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+$rti+'.jpg'});
	});
	$('.right').click(function(){
	$i++;
		if ($i>8) {
			$i=1;
		}
		$rti = 'r0'+$i;
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+$rti+'.jpg'});

	});

	$('.car-select ul').addClass('on');
});
