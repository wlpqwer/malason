var f1Tpl=require('../tpls/f1.string');
SPA.defineView("f1",{
  html:f1Tpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      }
  }
})
