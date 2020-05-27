var hello = 'Hello World';
alert(hello);

// 整数を代入
var int1 = 1;
// 負数を代入
var int2 = -10;
// 小数点を代入
var float1 = 3.14;
// 文字列を代入
var str1 = 'JavaScirptを覚えよう';


// 足し算
alert(4 + 3);
//引き算
alert(8 - 5);
//掛け算
alert(2 * 6);
//割り算
alert(10 / 2);


//文字列の結合
alert('Hello' + 'World');


//文字列の結合２
var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

//条件分岐
var orange = 100;
var apple = 120;

if(orange < apple){
	alert('みかんの値段がりんごより高い');
}
else if(orange == apple){
	alert('みかんとりんごが同じ値段');
}
else{
	alert('みかんの値段がりんごより高い');
}


//繰り返し処理(while)
var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//繰り返し処理(for)
var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}
alert('1から10まで足算した結果は' + num + 'です');
