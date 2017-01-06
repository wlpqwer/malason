var mineTpl = require('../tpls/mine.string');

// 定义视图
SPA.defineView('mine', {
  	// 装载模板
  	html: mineTpl,
    //定义插件
    plugins: ['delegated'],
    bindActions: {
        'cbhelp': function (el) {
            SPA.open('help');
        },
        'go.send':function(){
          SPA.open('send_in');
        },
        'to.rec':function(){
          SPA.open('rec_in')
        },
        'to.b':function(){
          SPA.open('edit')
        },
        't.m':function(){
          SPA.open('adMony')
        },
        't.sc':function(){
          SPA.open('cbQy0')
        },
        'gli':function(){
              wx.scanQRCode({
              needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function (res) {
              var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            }
          });
        },
        'pai':function(){
          wx.chooseImage({
              count: 5, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                  var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
              }
          });
        }
    }

});
