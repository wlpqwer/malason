var cbWxListTpl= require('../tpls/cbWxList.string');
SPA.defineView('cbWxList', {
  	// 装载模板
  	html: cbWxListTpl,
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
  			vm.cbListWx=[]
  		}
  	},'delegated'],
  	//绑定事件
  	bindActions: {
      'back': function () {
	      this.hide();
	    },
      'goCBWxDetail':function(el,data){
        SPA.open('list1',{
          param:{
            id:data.id
          }
        });
      }
   },
   // 绑定视图事件
	  bindEvents: {
	    'show': function () {
	      // 获得vm
	      var vm = this.getVM();
        var that=this;
	      // swiper
	      var cbFoundListSwiper = new Swiper('#cbFoundList-swiper', {
	        loop: false,
	        onSlideChangeStart: function(swiper){
	          var index = swiper.activeIndex;
	          $('.cbListSeQW div').eq(index).addClass('active').siblings().removeClass('active');
	        }
	      });
	      $('.cbListSeQW div').on('tap', function () {
	        cbFoundListSwiper.slideTo($(this).index());
	      });
	      // ajax拉取数据
	      $.ajax({
	        url: '/chaungq/mock/WxList.json',
	        type: 'get',
	        // data: {
	        //   type: 'more',
	        //   pageNo: 1
	        // },
	        success: function (res) {
              vm.cbListWx=that.getItem(that.param.id,res);
              console.log(vm.cbListWx);
	            vm.cbListWx = res.data;
	            vm.isShowLoading = false;
	        }
	      });
	    }
	}
})
