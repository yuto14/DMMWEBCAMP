//１つずつの記述
$(function(){
	$('.bg1').on('click', function(){
		$('.bg1').slideUp();
	});
    $('.bg2').on('click', function(){
    	$('.bg2').slideUp();
    });
    $('.bg3').on('click', function(){
    	$('.bg3').slideUp();
    });
    $('.bg4').on('click', function(){
    	$('.bg4').slideUp();
    });
})



//thisを用いた記述
$(function(){
	$('.box1').on('click', function(){
		$(this).slideUp();
	});
});



//childrenを用いた記述
$(function(){
	$('button').on('click', function(){
		$('ul').children().css('color', 'red');
	});
});