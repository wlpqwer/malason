var mine_userxyTpl=require('../tpls/mine_userxy.string');
SPA.defineView("mine_userxy",{
  html:mine_userxyTpl,
  plugins:['delegated'],
  bindActions:{
      "toL":function(){
        this.hide();
      }
  }
})
