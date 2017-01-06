var mine_ruleTpl=require('../tpls/mine_rule.string');
SPA.defineView("mine_rule",{
  html:mine_ruleTpl,
  plugins:['delegated'],
  bindActions:{
      "lpback_":function(){
        this.hide();
      }
  }
})
