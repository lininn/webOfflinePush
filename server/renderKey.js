const webpush = require('web-push');
//VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys.publicKey, vapidKeys.privateKey);
