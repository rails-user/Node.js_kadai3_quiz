//expressモジュールをアプリケーションに追加
express = require("express");
//インスタンスの生成
app = express();
//ブランチがdevelopなのでポート番号は3000を設定する
app.set("port", 3000);
//ejsの設定
app.set("view engine","ejs");

//routeモジュールをアプリケーションに追加
const route = require("./routes/route.js");
app.use('/', route);

//静的ファイル(クイズ画面で仕様するJSファイル)の読み込み
app.use(express.static("public"));

app.listen(app.get("port"), () => {
	console.log(`Server is listening on port number:${app.get("port")}`);
});

