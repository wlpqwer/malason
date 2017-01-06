var rec_inTpl=require('../tpls/rec_in.string');
SPA.defineView("rec_in",{
  html:rec_inTpl,
  plugins:['delegated'],
  bindActions:{
      "rec_b":function(){
        this.hide();
      },
      're.de':function(){
        SPA.open('res_q')
      }
  }
})
