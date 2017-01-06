var adMonyTpl=require('../tpls/adMony.string');
SPA.defineView("adMony",{
  html:adMonyTpl,
  plugins:['delegated'],
  bindActions:{
      "toL":function(){
        this.hide();
      },
      "m.b":function(){
        this.hide()
      }
  }
})
