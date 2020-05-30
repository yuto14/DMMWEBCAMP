//メイン部分
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
	var addStr = "Hello" + strA;
	return addStr;
}


//入力ダイアログで値を入力
var promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);



//複数の関数を定義する
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
alert('あなたの選んだ手は' + user_hand + 'です。');




//Javascroptとじゃんけん
//じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
//ユーザの手とJavascriptのじゃんけんの手を比べる関数を呼び出し結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
//結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
	hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
	hand_name = "パー";
  }

  return hand_name;
}
//ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if(js == "パー"){
			winLoseStr = "負け";
		}
	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
	    }else if(js == "パー"){
	    	winLoseStr = "勝ち";
	    }
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js =="パー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}




//確認問題
//Javascroptとじゃんけん
//じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand !=　"グー")&&(user_hand !=　"チョキ")&&(user_hand !=　"パー")&&(user_hand != null))
{
	alert('グー・チョキ・パーのいずれかを入力して下さい');
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。チョキ、パーから選んで下さい。')
}
//じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
//ユーザの手とJavascriptのじゃんけんの手を比べる関数を呼び出し結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
//結果を表示する
if(user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else{
	alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
	hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
	hand_name = "パー";
  }

  return hand_name;
}
//ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if(js == "パー"){
			winLoseStr = "負け";
		}
	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
	    }else if(js == "パー"){
	    	winLoseStr = "勝ち";
	    }
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js =="パー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}
