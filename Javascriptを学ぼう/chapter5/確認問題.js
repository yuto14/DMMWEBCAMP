$(function(){
	$('.box1').slideDown(function() {
            $('.box1').css({
                'background-color': '#0000FF',
                'width': '200px',
                'height': '100px'
            }).slideUp();
        });
    });

//javascriptでは、引数の中に関数の挿入が可能。slideDown()の引数にfunctionを書き加えることで、スライドダウン後にfunctionを実行可能。
//なのでslideDownの中のfunctionに、cssで色と大きさを変え、slideUp()をすることで要件を満たすことができます。
//アニメーション速度を変える場合はslideDown()の第一引数に数字を入力することで実現可能。（単位はミリ秒。1秒の場合は'1000'。）
