var list10Tpl = require('../tpls/list10.string');

// 定义视图
SPA.defineView('list10', {
  	// 装载模板
  	html: list10Tpl,
    init:{
      getItem:function(id,res){
        console.log(res);
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
    }
	},
    // 绑定视图事件
	bindEvents: {
		'show': function () {
	  	  // console.log(this.param.id);
        var vm=this.getVM();
        var that=this;
        $.ajax({
          url:"/chuangq/mock/read.json",
          type:"get",
          data:{
            // type:"more",
            // pageNo:1
          },
          success:function(res){
            vm.detail=that.getItem(that.param.id,res);
            console.log(res);
          }
        });
        // $('.la').on('tap',function(){
        //   var data={
        //     userId:1,
        //     time:new Date(),
        //     text:$('.text').val()
        //   };
        //   $.ajax({
        //     type:"post",
        //     url:"http://www.abc.com/message",
        //     data:data,
        //     success:function(res){
        //       alert("信息发送成功");
        //       $('.messagebox').append("<div></div>");
        //     },
        //     error:function(err){
        //       console.log(err);
        //     }
        //   });
        // });
		}
	}

});
