var f3Tpl=require('../tpls/f3.string');
SPA.defineView("f3",{
  html:f3Tpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      }
  }
})
