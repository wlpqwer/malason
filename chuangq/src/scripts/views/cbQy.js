var cbQyTpl= require('../tpls/cbQy.string');
SPA.defineView('cbQy', {
  	// 装载模板
  	html: cbQyTpl,
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
  			vm.cbListWx =[];
  		}
  	},'delegated'],
    //装载子视图
  	modules : [{
  		name: "cbContent",
  		container: "#CbConFoun",
  		views: ['cbQyZ', 'cbQyCp', 'cbQyZx', 'cbQyYy', 'cbQyFb'],
  		defaultTag: 'cbQyZ'
  	}],
  	//绑定事件
  	bindActions: {
      'back': function () {
	      this.hide();
	    },
      'cb.ss':function(){
        SPA.open('search')
      },
      'switchCbQy': function(el,data){
  			this.modules.cbContent.launch(data.name);
  			$('#founddiv div').eq($(el.el).index()).addClass('active')
        		.siblings().removeClass('active');
  		}
   },
    // 绑定视图事件
  bindEvents: {
    'show': function () {
	    // 获得vm
	    var vm = this.getVM();
      var that=this;
      // ajax拉取数据
      $.ajax({
        url: '/chuangq/mock/wxlist.json',
        async:false,
        type: 'get',
//	        data: {
//	          type: 'more',
//	          pageNo: 1
//	        },
        success: function (res) {
            // console.log(that.getItem(that.param.id,res));
            vm.cbListWx=that.getItem(that.param.id,res);
            console.log(vm.cbListWx);
            vm.cbListWx = res.data;
            vm.isShowLoading = false;
        }
      });

      // swiper
	    var cbSwiper1 = new Swiper('#Qy-swiper', {
	        loop: false,
	        slidesPerView: 3.5,
          paginationClickable: true,
          freeMode: true
		    });
        // $("#CbConFoun .container").height(window.document.body.clientHeight-77);
	   }
	}
})
