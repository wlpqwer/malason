var editTpl=require('../tpls/edit.string');
SPA.defineView("edit",{
  html:editTpl,
  plugins:['delegated'],
  bindActions:{
      "e.b":function(){
        this.hide();
      }
  }
})
