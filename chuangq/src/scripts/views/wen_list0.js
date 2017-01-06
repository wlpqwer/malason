var wen_listTpl=require('../tpls/wen_list.string');
SPA.defineView("wen_list",{
  html:wen_listTpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      },
      'g.list':function(){
        SPA.open('list')
      }
  }
})
