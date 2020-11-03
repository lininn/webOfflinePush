# webOfflinePush
谷歌浏览器离线推送测试，需要全程外网
首先node server/renderKey 生成key，替换成自己的key，启动一个静态服务器方位html文件夹内容，弹窗后记录参数
申请fcmkey 填入server.js
node server.js ，前端收到推送