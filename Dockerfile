# ベースイメージとして Node.js を使用
FROM node:16-alpine

# 作業ディレクトリを /app に設定
WORKDIR /app

# パッケージ定義ファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ビルド用の環境変数を設定（必要に応じて）
ENV NODE_ENV=production

# アプリケーションをビルド
RUN npm run build

# 本番環境用のサーバーを提供するために軽量な Nginx を使用
FROM nginx:alpine

# ビルドされたファイルを Nginx の公開ディレクトリにコピー
COPY --from=0 /app/dist /usr/share/nginx/html

# ポート 80 を公開
EXPOSE 80

# Nginx をフォアグラウンドで起動
CMD ["nginx", "-g", "daemon off;"]
