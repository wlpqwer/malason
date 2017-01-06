var list0Tpl = require('../tpls/list0.string');

// 定义视图
SPA.defineView('list0', {
  	// 装载模板
  	html: list0Tpl,
    init:{
      getItem:function(id,res){
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].id==id){
            return res.data[i];
          }
        }
      }
    },
    plugins: [{
	    name: 'avalon',
	    options: function (vm) {
	    	vm.detail = {};
	    }
	},'delegated'],
	bindActions: {
    "back":function(){
      this.hide();
    },
    'g.x':function(){
      SPA.open('cbQy')
    }
	},
    // 绑定视图事件
	bindEvents: {
		'show': function () {
	  	  // console.log(this.param.id);
        var vm=this.getVM();
        var that=this;
        $.ajax({
          url:"/chuangq/mock/list.json",
          type:"get",
          data:{
            // type:"more",
            // pageNo:1
          },
          success:function(res){
            vm.detail=that.getItem(that.param.id,res);
          }
        })
		}
	}

});
