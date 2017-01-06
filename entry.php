<?php
  include 'WechatJssdk.class.php';
  $appid = "wx6e359f1396fde261";
  $appsecret = "fed92405b05989cc06ff4f087d2fee93";
  $jssdk = new WechatJssdk($appid,$appsecret);
  $signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>马拉松导航</title>
  <meta charset="UTF-8">
  <meta name="keywords" content="" />
	<meta name="description" content=""/>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
  <!-- <meta name="format-detection" content="telephone=no" /> -->
  <meta name = "apple-mobile-web-app-capable" content = "yes"/>
	<meta name = "apple-touch-fullscreen" content = "yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <link rel="stylesheet" href="/chuangq/prd/styles/app@5e23f444f78841f352fa20b2966dae25.css">
<script>
    document.ontouchmove = function(e) {
        if (e.target.tagName.toUpperCase() !== 'IFRAME') {
            e.preventDefault();
        }
    };
</script>
</head>
<body>
  <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
  <script>
    wx.config({
      debug: false,
      appId: "<?php echo $signPackage['appId']; ?>",
      timestamp: '<?php echo $signPackage["timestamp"]; ?>',
      nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
      signature: '<?php echo $signPackage["signature"]; ?>',
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'onVoicePlayEnd',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'translateVoice',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
    });
  </script>
  <script src="/chuangq/prd/scripts/app@66353a6ab870e37e438ac88064be8bf1.js"></script>
</body>
</html>
