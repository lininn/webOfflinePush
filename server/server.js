const webpush = require('web-push');
// const vapidKeys = webpush.generateVAPIDKeys();


const vapidKeys = {
    publicKey: 'BMTDJhVkVFXYurncsdgoKhAlTo8fleSp_guJNHR32wHJfpQA9mkm9vXVVcyrsHi9bZIIVz6g4H2gAjVfFp8aSII',
    privateKey: 'L1OCeyVjzE2xr3hJ2ecZrBUnp7PsZQFt8njgff_dh4A'
  }
  webpush.setVapidDetails(
    'mailto:your@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  )
  //fcm api key
  webpush.setGCMAPIKey('apikey');
  /**前端生成注册后返回的 */
const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dV-98OYa8XU:APA91bFGsvfVTQLxWlPYAz3uaWpRXiX8hSJZ-PDFoQUu9xzpBHnTjl4rU9QtlHoE0DyvT6u26RMdeMInaepjXyQMHZMxLdmZ_bu9ga5fsw9r3tt4oN-ANL_WEyAquYFv2fCBX8w-vtjL","expirationTime":null,"keys":{"p256dh":"BNXlNFqW-k8-xnf4rUu0T2FZ3goCBu8af8H6u_0jrkE_ByqBu_wZyq6QfDgcQTdOoBVxLrVOQ3iSorWmXaU_Z3Q","auth":"zbEcG5EwXNa5ni00Etoqew"}}

webpush.sendNotification(subscription, 'hello myname is push');

