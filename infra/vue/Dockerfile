
# ベースイメージとしてNode.jsを使用
FROM node:16-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ポートを公開
EXPOSE 8080

# デフォルトのコマンド（開発サーバーを起動）
CMD ["npm", "run", "serve"]
