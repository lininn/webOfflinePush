navigator.serviceWorker.register("sw.js").then(function(reg){
    console.log("Yes, it did register service worker.");
    if (window.PushManager) {
        reg.pushManager.getSubscription().then(subscription => {
            // 如果用户没有订阅
            if (!subscription) {
              console.log('没有订阅');
                subscribeUser(reg);
            } else {
                console.log("You have subscribed our notification",subscription);
            }       
        });     
    }
}).catch(function(err) {
    console.log("No it didn't. This happened: ", err)
});



function subscribeUser(swReg) {
  //后端生成的public key
  var applicationServerPublicKey='BMTDJhVkVFXYurncsdgoKhAlTo8fleSp_guJNHR32wHJfpQA9mkm9vXVVcyrsHi9bZIIVz6g4H2gAjVfFp8aSII';
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
      console.log(JSON.stringify(subscription));
    })
    .catch(function(err) {
      console.log('订阅失败: ', err);
    });
  }
  
  function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  