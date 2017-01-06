var f2Tpl=require('../tpls/f2.string');
SPA.defineView("f2",{
  html:f2Tpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      }
  }
})
