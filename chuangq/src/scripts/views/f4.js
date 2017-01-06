var f4Tpl=require('../tpls/f4.string');
SPA.defineView("f4",{
  html:f4Tpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      }
  }
})
