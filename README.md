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

```
cd ./backend

npm install
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
