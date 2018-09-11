FROM node

# 打包 app 源码
COPY dist /home

# 创建 app 目录
WORKDIR /home

EXPOSE 8002 4000
CMD [ "node", "src/index.js" ]