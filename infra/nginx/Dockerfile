# ベースイメージとして Nginx を使用
FROM nginx:alpine

# Nginx のデフォルト設定を削除
RUN rm /etc/nginx/conf.d/default.conf

# カスタム Nginx 設定ファイルをコピー
COPY ./infra/nginx/nginx.conf /etc/nginx/nginx.conf

# ビルド成果物を Nginx の公開ディレクトリにコピー
COPY /app/dist /usr/share/nginx/html

# ポート 80 を公開
EXPOSE 80

# Nginx をフォアグラウンドで起動
CMD ["nginx", "-g", "daemon off;"]
