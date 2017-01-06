var helpTpl = require('../tpls/help.string');
SPA.defineView('help',{
  html:helpTpl,
  plugins: ['delegated'],
  bindActions: {
    'cbhelp': function(){
      SPA.open('help');
    },
    "help_bk": function(){
      this.hide();
    },
    "toRule": function(){
      SPA.open("mine_rule");
    },
    "toUse":function(){
      SPA.open('usehelp');
    },
    "toUser":function(){
      SPA.open("mine_userxy");
    }
  }
})
