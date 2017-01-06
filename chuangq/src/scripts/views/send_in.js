var send_inTpl=require('../tpls/send_in.string');
SPA.defineView("send_in",{
  html:send_inTpl,
  plugins:['delegated'],
  bindActions:{
      "lp_back":function(){
        this.hide();
      },
      'se.de':function(){
        SPA.open('send')
      }

  }
})
