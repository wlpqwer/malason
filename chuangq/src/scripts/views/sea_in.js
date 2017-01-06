var sea_inTpl=require('../tpls/sea_in.string');
SPA.defineView("sea_in",{
  html:sea_inTpl,
  plugins:['delegated'],
  bindActions:{
      "ss":function(){
        this.hide();
      },
      'g.xq':function(){
        SPA.open('list0')
      },
      'g.xqq':function(){
        SPA.open('list')
      }
  }
})
