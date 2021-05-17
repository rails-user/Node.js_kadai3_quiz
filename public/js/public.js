//正答数カウント用変数
let count = 0;
//テストデータ参照用のインデックス
let i = 0;
const url ='/getQuiz';

//開始ボタンクリック時の処理
document.getElementById('btn0').onclick = () => {
    //待機画面の生成
    createWait();

    //APIよりデータ取得
     async function getData(){
        //WEBAPIへのアクセス
        const results = await fetch(url);
        const jsonObj = await results.json();
        //Quizクラスのインスタンス生成
        const quizData = new Quiz(jsonObj);
        return quizData;
     }
     getData().then(quiz => {
        //クイズの実行（引数：JSONオブジェクト、問題のインデックス）
        exeQuiz(quiz, i);
     })
}

//クイズの実行
function exeQuiz(quiz, i) {
    //出題画面の出力（10問まで）
   if (i < quiz.getLength()) {
       //カテゴリー
       const category = quiz.getCategory(i);
       //クイズの形式がmultipleかtrue/falseかを格納
       const type = quiz.getType(i);
       //難易度
       const difficulty = quiz.getDifficulty(i);
       //問題
       const question = quiz.getQuestion(i);
       //正解
       const correct_answer = quiz.getCorrectAnswer(i);
       //間違い
       //const incorrect_answers = quiz.getIncorrectAnswers(i);
       //ボタンの値
       const buttonValue = quiz.getButtonValue(i);
       
       //タイトルの生成
       document.getElementById('h1').textContent = (`問題${i + 1}`);
       //ジャンル
       const div1 = document.getElementById('div1');
       div1.innerHTML = "";
       const txt1 = document.createTextNode(`[ジャンル]${category}`);
       div1.appendChild(txt1);
       //難易度
       const div2 = document.getElementById('div2');
       div2.innerHTML = "";
       const txt2 = document.createTextNode(`[難易度]${difficulty}`);
       div2.appendChild(txt2);
       //問題
       const div3 = document.getElementById('div3');
       div3.innerHTML = "";
       const txt3 = document.createTextNode(`${question}`);
       div3.appendChild(txt3);

       //クイズ画面の生成（４択）
       if (type === 'multiple') {

           //解答ボタンの生成
           const div4 = document.getElementById('div4');
           div4.innerHTML = "";
           const btn1 = document.createElement('input');
           btn1.type = 'button';
           btn1.name = 'buttons';
           btn1.id = 'btn1';
           btn1.value = `${buttonValue[0]}`;
           div4.appendChild(btn1);

           const div5 = document.getElementById('div5');
           div5.innerHTML = "";
           const btn2 = document.createElement('input');
           btn2.type = 'button';
           btn2.name = 'buttons';
           btn2.id = 'btn2';
           btn2.value = `${buttonValue[1]}`;
           div5.appendChild(btn2);

           const div6 = document.getElementById('div6');
           div6.innerHTML = "";
           const btn3 = document.createElement('input');
           btn3.type = 'button';
           btn3.name = 'buttons';
           btn3.id = 'btn3';
           btn3.value = `${buttonValue[2]}`;
           div6.appendChild(btn3);

           const div7 = document.getElementById('div7');
           div7.innerHTML = "";
           const btn4 = document.createElement('input');
           btn4.type = 'button';
           btn4.name = 'buttons';
           btn4.id = 'btn4';
           btn4.value = `${buttonValue[3]}`;
           div7.appendChild(btn4);
       }
       //クイズ画面の生成（２択）
       else if (type === 'boolean') {

           //解答ボタンの生成
           const div4 = document.getElementById('div4');
           div4.innerHTML = "";
           const btn1 = document.createElement('input');
           btn1.type = 'button';
           btn1.name = 'buttons';
           btn1.id = 'btn1';
           btn1.value = `TRUE`;
           div4.appendChild(btn1);

           const div5 = document.getElementById('div5');
           div5.innerHTML = "";
           const btn2 = document.createElement('input');
           btn2.type = 'button';
           btn2.name = 'buttons';
           btn2.id = 'btn2';
           btn2.value = `FALSE`;
           div5.appendChild(btn2);

           const div6 = document.getElementById('div6');
           div6.innerHTML = "";
           const div7 = document.getElementById('div7');
           div7.innerHTML = "";
       }
       //解答ボタンクリック時のイベントリスナー
       document.getElementsByName('buttons').forEach(btn => btn.addEventListener('click', () => {
       if (btn.value === correct_answer) {
           count++;
       }
       i++;
       exeQuiz(quiz, i)
       }));
   }
   //採点画面へ
   else {

       //採点画面の生成
       const h1 = document.getElementById('h1');
       h1.textContent = (`あなたの正答数は${count}です!!`);

       //ジャンルの削除
       const div1 = document.getElementById('div1');
       div1.innerHTML = "";
       //難易度の削除
       const div2 = document.getElementById('div2');
       div2.innerHTML = "";
       //メッセージの表示
       const div3 = document.getElementById('div3')
       div3.innerHTML = "";
       const txt4 = document.createTextNode(`再度チャレンジしたい場合は以下をクリック!!`)
       div3.appendChild(txt4);

       const div4 = document.getElementById('div4');
       div4.innerHTML = "";
       const div5 = document.getElementById('div5');
       div5.innerHTML = "";
       const div6 = document.getElementById('div6');
       div6.innerHTML = "";
       const div7 = document.getElementById('div7');
       div7.innerHTML = "";

       //ボタンの生成
       const btn5 = document.createElement('input');
       btn5.type = 'button';
       btn5.id = 'btn5';
       btn5.name = 'backBtn';
       btn5.value = `ホームに戻る`;
       div4.appendChild(btn5);

       //ホームに戻るボタンクリック時の処理（リロードしてTOP画面を表示する）
       document.getElementById('btn5').onclick = function () {
           location.reload();
       }

   }
} 

//待機画面の生成
createWait = () => {
    const h1 = document.getElementById('h1');
    h1.textContent = ('取得中');
    const div1 = document.getElementById('div3');
    div1.textContent = ('少々お待ち下さい');
    const btn0 = document.getElementById('btn0');
    btn0.remove();
}

//配列のランダムソート関数
const arrayShuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  //Quizクラス
  class Quiz {
    constructor(jsonObj) {
        this._quizChild = jsonObj.results;
    }
    //全クイズ数
	getLength() {
        return this._quizChild.length;
    }
    //カテゴリー
	getCategory(i) {
        return this._quizChild[i].category;
     }
    //クイズの形式がmultipleかtrue/falseかを格納
	getType(i) {
        return this._quizChild[i].type;
     }
     //難易度
     getDifficulty(i) {
        return this._quizChild[i].difficulty;
     }
    //問題
    getQuestion(i) {
        return this._quizChild[i].question;
    }
    //正解
    getCorrectAnswer(i) {
        return this._quizChild[i].correct_answer;
    }
    //間違い
    //getIncorrectAnswers(i) {
    //    return this._quizChild[i].incorrect_answers;
    //}
    //ボタンの値
    getButtonValue(i) {
        return this._quizChild[i].buttonValue;
    }
}