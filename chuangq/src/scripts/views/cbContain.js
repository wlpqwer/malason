var cbContainTpl= require('../tpls/cbContain.string');
SPA.defineView('cbContain', {
  	// 装载模板
  	html: cbContainTpl,
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
  		options: function(vm){
  			vm.cbListFou = [];
  			vm.cbListContain =[];
  		}
  	},'delegated'],
    modules : [{
      name: "detailwx",
      container: "#detail-wx",
      views: ['cbShou', 'cbQyCp', 'cbQyZx', 'cbQyYy'],
      defaultTag: 'cbShou'
    }],
  	//绑定事件
  	bindActions: {
      'back': function () {
	      this.hide();
	    },
      'g.ct':function(){
        SPA.open('search')
      },
      'swiwx':function(el,data){
        this.modules.detailwx.launch(data.name);
        $('#swf div').eq($(el.el).index()).addClass('active').
          siblings().removeClass('active');
      }
   },
    // 绑定视图事件
  bindEvents: {
    'show': function () {
	    // 获得vm
	    var vm = this.getVM();

		    // ajax拉取数据
	      $.ajax({
	        url: '/chuangq/mock/livelist.json',
	        type: 'get',
//	        data: {
//	          type: 'more',
//	          pageNo: 1
//	        },
	        success: function (res) {
              // vm.cbListContain=that.getItem(that.param.id,res);
	            vm.cbListContain = res.data;
	        }
	      });
	   }
	}
})
