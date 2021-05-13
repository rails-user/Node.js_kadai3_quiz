//開始ボタンクリック時の処理
document.getElementById('btn0').onclick = () => {

    //待機画面の生成
    createWait();

    //APIよりデータ取得
    fetch('/getQuiz')
    .catch((error) => {
        //エラー処理はあとで記述する予定
        
    });
}

createWait = () => {
    const h1 = document.getElementById('h1');
    h1.textContent = ('取得中');
    const div1 = document.getElementById('div1');
    div1.textContent = ('少々お待ち下さい');
    const btn0 = document.getElementById('btn0');
    btn0.remove();
}

//解答ボタンクリック時のイベントリスナー
document.getElementsByName('buttons').forEach(btn => btn.addEventListener('click', () => {
    //あとで処理を書く予定
}));