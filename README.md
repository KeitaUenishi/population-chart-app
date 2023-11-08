# アプリケーションの概要
選択した都道府県ごとの人口推移表を表示するSingle Page Applicationです。
データは折れ線グラフで表示され、X軸:年、Y軸:人口数 の形で表示されます。

表示するデータは「総人口」「年少人口」「生産年齢人口」「老年人口」の4種類が選択でき、デフォルトの表示は「総人口」です。
また、「全て選択」ボタンを押下することで、全ての都道府県の人口推移データを取得することができます。

当アプリケーションは [株式会社ゆめみのフロントエンドコーディング試験](https://notion.yumemi.co.jp/%E6%8E%A1%E7%94%A8%E9%96%A2%E9%80%A3%E8%B3%87%E6%96%99%E5%85%AC%E9%96%8B/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E8%A9%A6%E9%A8%93) より作成されています。

# 開発
ソースコードのクローン
```
git clone https://github.com/KeitaUenishi/population-chart-app.git
```
ディレクトリに移動
```
cd population-chart-app
```
パッケージのインストール (devContainerで開発を行う場合は不要)
```
npm ci
``` 
環境変数ファイルのsetup
```
cp .env.development.sample .env.development
cp .env.production.sample .env.production
```


## Visual Studio CodeでdevContainerを使用する場合
1. Docker および Docker Compose をインストール
2. Visual Studio Code に拡張機能「Dev - Containers」をインストール
4. コマンドパレット で「Remote-Containers: Open Folder in Container...」を選択し、population-chart-app ディレクトリを選択してください

## 環境変数
以下の2つの環境変数の値を記述します。

.env.development

.env.production

| 変数名                               | 説明                                        | デフォルト値         |
| :----------------------------------- | :------------------------------------------ | :------------------- |
|baseURL|アプリケーション起動時のURL|http://localhost:3000|
|RESAS_API_KEY|RESASから情報を取得するためのAPIキー|-|

RESAS_API_KEYは[こちら](https://opendata.resas-portal.go.jp/)から利用登録を行うことで取得できます。

## アプリケーションの起動とテスト実行
```
npm run dev
npm test
```

# アーキテクチャ
## コンポーネント設計
下記の記事の考え方をベースとし、components直下にpage, model, uiのディレクトリを作成しコンポーネントの分割を行なっています。

参考記事: https://zenn.dev/knowledgework/articles/99f8047555f700

## 状態管理
Recoilを採用し、Fluxパターンとして扱えるような構成でコードを記述しています。基本的にコンポーネントから直接recoilを使用することはなく、GetterとActionsという関数をexportし使用するようにします。

参考記事: https://qiita.com/tak001/items/75c9cbbf0111f3ac7c9c