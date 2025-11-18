# ECサイト構築

Udemyの講義で作成したバックエンド部分をもとにフロントエンドを作成する．

## セットアップ

### 初回
```
git clone https://github.com/ZenkichiTerasaki/MyFirstRep_udemy.git
```

### 二回目以降
```
git pull
```

## バックエンド

### 使用技術

|||
|:-:|:-:|
|コンテナ|docker|
|DB|postgreSQL|
|フレームワーク|Nest.js|

### セットアップ

#### dockerのセットアップ

```
cd ./backend

docker compose up --build  //初回
docker compose up   //二回目以降
```

#### ローカルサーバのセットアップ

.envの追加

```
DATABASE_URL=""
JWT_SECRET=""
```

```
cd ./backend

npm install
npx prisma generate
npm run start:dev
```


## フロントエンド

### 使用技術

|||
|:-:|:-:|
|フレームワーク|Vue.js|

### セットアップ
```
cd ./frontend

npm install
npm run dev
```

-nodeのバージョンによっては上手く動作しないようです．（25.x.xでは動作しませんでした）
->22.x.xで動作確認

(feat/addReadmeで作成)