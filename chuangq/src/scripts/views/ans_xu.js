var ans_xuTpl=require('../tpls/ans_xu.string');
SPA.defineView("ans_xu",{
  html:ans_xuTpl,
  plugins:['delegated'],
  bindActions:{
      "lpback_":function(){
        this.hide();
      },
      'a.b':function(){
        this.hide();
      }
  }
})
