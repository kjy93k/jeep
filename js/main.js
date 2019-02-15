$(document).ready(function(){
	var $current=0;
	var sidenum=0;
	var sidenum2=0;
	var sidenum3=0;
	
	$('#fullpage').fullpage({
	anchor:["1st","2st","3st","4st","5st"],
	menu:"#menu",
	afterLoad:function(anchorsLink,index){
		if (index==1) {
			$(".video-wrap").vide("images/main/visual/jeep.mp4",{loop:true,muted:true,autoplay:true});
		} else{
		$(".video-wrap").vide("images/main/visual/jeep.mp4",{loop:false,muted:false});

		}
		if (index!=1){
			$('.bg-dim').stop(true).fadeOut();			
		}
	}
	});
	$(".video-wrap").vide("images/main/visual/jeep.mp4",{loop:true,muted:true,autoplay:true});
	$('.interval .main-cmt').eq(0).delay(1000).addClass('animated fadeInDown');	
	$('.interval .main-cmt').eq(1).delay(1000).addClass('animated fadeInLeft');	
	$('.interval .main-cmt').eq(2).delay(1000).addClass('animated fadeInUp');	
	$('.interval .main-cmt').eq(3).delay(1000).addClass('animated fadeInDown');	
	$('.bg-dim').fadeIn(1000).delay(5000).fadeOut(1000);
	$('.bg-dim').click(function(){
		$('.bg-dim').stop(true).fadeOut();
	});
	$('.interval ul li').eq(0).fadeIn(0).delay(4800).fadeOut(200);
	timer();
	function timer(){
		setInterval(function(){
			if ($current<=2) {
				$current++;
			} else {
				$current=0;
			}
			$('.interval ul li').eq($current).fadeIn(200).delay(4600).fadeOut(200);

		},5000)
	}

	// var $bW = $('body').width();
	// var $bH = $('body').height();
	// var $vSrc ='images/main/visual/jeep-visual-';
	// var $mSrc ='images/main/visual/jeep-main-';
	// var $mISrc ='images/main/visual/jeep-main-img-';
	
	// if ($bW/$bH<1.74) {
	// 	$('.video-wrap').hide();
	// 	$('.no-video').show();
	// } else{
	// 	$('.video-wrap').show();
	// 	$('.no-video').hide();
	// }


	// if ($bW/$bH<1.22) {
	// 	$('.interval li').each(function(index){
	// 		$(this).css({'background':'url('+$vSrc+eval(index+1)+'-2.jpg)  center bottom no-repeat','background-size': 'cover','padding-top':'200px'});
	// 	});
	// 	$('.interval .main-cmt').css({'position':'static','text-align':'center'});
	// 	$('#page3').css({'background':'url('+$mISrc+2+'-2.jpg) center bottom no-repeat','background-size': 'cover'});
	// 	$('#page3 .main-cmt').css({'position':'static','padding-top':'200px'});
	// 	$('#page3 .main-cmt img').css('width','240px');
	// 	$('#page4').css({'background':'url('+$mISrc+3+'-2.jpg) center bottom no-repeat','background-size': 'cover'});
	// 	$('#page4 .main-cmt').css({'position':'static','width':'225px','font-size':'20px','margin':'0 auto','padding-top':'200px'});
	// 	$('.slide').eq(0).css({'background':'url('+$mSrc+1+'-2.jpg)  center top no-repeat','background-size': 'cover'})
	// 	$('.slide').eq(1).css({'background':'url('+$mSrc+2+'-2.jpg) center no-repeat','background-size': 'cover'})
	// 	$('.slide').eq(5).css({'background':'url('+$mSrc+6+'-2.jpg) center no-repeat','background-size': 'cover'})
	// }
setTimeout(function(){resZ()},1);

	$(window).resize(function(){
		// 
		resZ();
	});


	$('#menu li').mouseover(function(){
		$('#menu li').removeClass('tada animated');
		$(this).addClass('tada animated');
	});
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
function resZ(){
	var $bW = $('body').width();
		var $bH = $('body').height();
		var $vSrc ='images/main/visual/jeep-visual-';
		var $mSrc ='images/main/visual/jeep-main-';
		var $mISrc ='images/main/visual/jeep-main-img-';

		if ($bW/$bH<1.74) {
			$('.video-wrap').hide();
			$('.no-video').show();
		} else{
			$('.video-wrap').show();
			$('.no-video').hide();
		}

		 if($bW/$bH>1.22){
			$('.interval li.interval1').css({'background':'url('+$vSrc+1+'.jpg) right center no-repeat','background-size': 'cover'});
			$('.interval li.interval2').css({'background':'url('+$vSrc+2+'.jpg) right center no-repeat','background-size': 'cover'});
			$('.interval li.interval3').css({'background':'url('+$vSrc+3+'.jpg) right center no-repeat','background-size': 'cover'});
			$('.interval li.interval4').css({'background':'url('+$vSrc+4+'.jpg) center no-repeat','background-size': 'cover'});
			$('.interval .main-cmt').css({'position':'absolute'});
			$('.interval .main-cmt').eq(3).css({'position':'static'});
			$('#page3').css({'background':'url('+$mISrc+2+'.jpg) center no-repeat','background-size': 'cover'});
			$('#page3 .main-cmt').css({'position':'absolute','padding-top':'0'});
			$('#page3 .main-cmt img').css('width','340px');
			$('#page4').css({'background':'url('+$mISrc+3+'.jpg) center no-repeat','background-size': 'cover'});
			$('#page4 .main-cmt').css({'position':'absolute','width':'375px','font-size':'35px','padding-top':'0'});
			$('.slide').eq(0).css({'background':'url('+$mSrc+1+'.jpg)  center bottom no-repeat','background-size': 'cover'})
			$('.slide').eq(1).css({'background':'url('+$mSrc+2+'.jpg) left center no-repeat','background-size': 'cover'})
			$('.slide').eq(5).css({'background':'url('+$mSrc+6+'.jpg) center no-repeat','background-size': 'cover'})
		} else{
			$('.interval li').each(function(index){
				$(this).css({'background':'url('+$vSrc+eval(index+1)+'-2.jpg)  center bottom no-repeat','background-size': 'cover','padding-top':'200px'});
			});			
			$('.interval .main-cmt').css({'position':'static','text-align':'center'});
			$('#page3').css({'background':'url('+$mISrc+2+'-2.jpg) center bottom no-repeat','background-size': 'cover'});
			$('#page3 .main-cmt').css({'position':'static','padding-top':'200px'});
			$('#page3 .main-cmt img').css('width','240px');
			$('#page4').css({'background':'url('+$mISrc+3+'-2.jpg) center bottom no-repeat','background-size': 'cover'});
			$('#page4 .main-cmt').css({'position':'static','width':'225px','font-size':'20px','margin':'0 auto','padding-top':'200px'});
			$('.slide').eq(0).css({'background':'url('+$mSrc+1+'-2.jpg)  center top no-repeat','background-size': 'cover'})
			$('.slide').eq(1).css({'background':'url('+$mSrc+2+'-2.jpg) center no-repeat','background-size': 'cover'})
			$('.slide').eq(5).css({'background':'url('+$mSrc+6+'-2.jpg) center no-repeat','background-size': 'cover'})
		}
}
