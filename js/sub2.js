$(document).ready(function(){
	var sidenum=0;
	var sidenum2=0;
	var sidenum3=0;
	// var CN1_1 ='sport';
	// var CN1_2 ='sahara';
	// $('.car-1-1').html(CN1_1);
	// $('.car-1-2').html(CN1_2);
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
	var $rti ='1';

	$('#side-nav li').click(function(){
		var $folderN = $(this).attr('class');
		console.log($folderN);
	});

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
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+'r0'+$rti+'.jpg'});
	});
	$('.car-select h3').click(function(){
		$('.car-select>ul>li>ul').removeClass('on');
		$(this).next().addClass('on');
	});
	$('.color li').click(function(){
	var $ti = $(this).index();
		if($ti<9) {
			$cti='0'+eval($ti+1);
		} else {
			$cti=eval($ti+1);
		}
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+'r0'+$rti+'.jpg'});
	});

	$('.wheel li').click(function(){

	var $ti = $(this).index();
		if($ti<9) {
			$wti='0'+eval($ti+1);
		} else {
			$wti=eval($ti+1);
		}
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+'r0'+$rti+'.jpg'});
	});
	$('.top li').click(function(){
	var $ti = $(this).index();
		if($ti<9) {
			$tti='0'+eval($ti+1);
		} else {
			$tti=eval($ti+1);
		}
		$('.car-shape').css({'background-image':'url(images/sub/'+$folderN+'/'+$cn+'c'+$cti+'w'+$wti+'t'+$tti+'r0'+$rti+'.jpg'});
	});


	$('.car-select ul').addClass('on');
});
