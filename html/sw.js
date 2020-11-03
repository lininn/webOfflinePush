self.addEventListener('push', function(event) {
    console.log('event',event)
   
    const title = event.data.text();
    const options = {
      body: event.data.text(),
     // icon: './images/logo/logo512.png',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  
// 添加notificationclick事件监听器，在点击notification时触发
self.addEventListener('notificationclick', function(event) {
    // 关闭当前的弹窗
    event.notification.close();
    // 在新窗口打开页面
    event.waitUntil(
      clients.openWindow('https://google.com')
    );
  });
  
// // 触发一条通知
// self.registration.showNotification('您有新消息', {
//   body: 'Hello Service Worker',
//   //icon: './images/logo/logo152.png',
// });
