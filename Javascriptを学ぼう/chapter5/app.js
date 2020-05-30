//jqueryでのcssの変更
$(function(){
	$('.box1').css({
		'background-color': '#0000FF',
		'height': '100px'
	});
});


//上から下へスライド（app.cssのdisplay: none;が必要)
$(function(){
    $('.box1').slideDown();
});



//下から上へスライド
$(function(){
	$('.box1').slideUp();
});



//非表示をJgueryで表示 (app.cssのdisplay: none;必要)
$(function(){
	$('.box1').show();
	$('.box1').css({'background-color': '#0000FF'});
});



//表示をjgueryで非表示 (app.cssのdisplay: none;必要)
$(function(){
	$('.box1').hide();
});