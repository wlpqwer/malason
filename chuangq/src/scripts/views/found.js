var foundTpl= require('../tpls/found.string');
SPA.defineView('found', {
  	// 装载模板
  	html: foundTpl,
  	plugins: [{
  		name: 'avalon',
  		options: function(vm){
  			vm.cbListFou = [];
  			vm.cbListFoundW=[];
  		}
  	},'delegated'],
  	//绑定事件
  	bindActions: {
        'goCBDetail': function (el,data) {
            SPA.open('cbWxList',{
              param:{
                id:data.id
              }
            });

        },
     	'goCBWXList':function(){
        	SPA.open('cbQyCp0');
        },
        'goCBWXLi':function(){
          	SPA.open('cbQyCp');
          },
          'goCBWX':function(){
              SPA.open('cbQyYy');
            },
        't.f':function(){
          SPA.open('search')
        }
   	},
   	  // 绑定视图事件
	  bindEvents: {
	    'show': function () {
	      // 获得vm
	      var vm = this.getVM();
	      // swiper
	      var mySwiper = new Swiper('#cbFoundListOwn-swiper', {
	        loop: false,
	        onSlideChangeStart: function(swiper){
	          var index = swiper.activeIndex;
	          $('.cbListSeQW div').eq(index).addClass('active').siblings().removeClass('active');
	        }
	      });
	      $('.cbListSeQW div').on('tap', function () {
	        mySwiper.slideTo($(this).index());
	      });
	      // ajax拉取数据
        // 企业
	      $.ajax({
          async:false,
	        url: '/chuangq/mock/livelist.json',
	        type: 'get',
//	        data: {
//	          type: 'more',
//	          pageNo: 1
//	        },
	        success: function (res) {
	            vm.cbListFou = res.data;
	            // vm.isShowLoading = false;
	        }
	      });
	      // ajax拉取数据
        // 文献
	      $.ajax({
	        url: '/chuangq/mock/livelist.json',
	        type: 'get',
//	        data: {
//	          type: 'more',
//	          pageNo: 1
//	        },
	        success: function (res) {
	            vm.cbListFoundW= res.data;
	            // vm.isShowLoading = false;
	        }
	      });

	      // scroll
//	      scroll({
//	        scroll: this.widgets.myScroll,
//	        vm: vm
//	      })
	    }
	  }
})
