#1、基于镜像node版本
FROM node
#5、容器内创建目录/nuxt3
RUN mkdir -p /nuxt3
#7、切换工作目录到/nuxt3
WORKDIR /nuxt3
#8、暴露端口3000，默认端口
EXPOSE 3000
#12、start
CMD ["node","./server/index.mjs"]