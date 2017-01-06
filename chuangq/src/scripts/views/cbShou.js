var cbShouTpl= require('../tpls/cbShou.string');
SPA.defineView('cbShou', {
  	// 装载模板
  	html: cbShouTpl,
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
  			vm.cbShouLi=[]
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

	      $('.cbListSeQW div').on('tap', function () {
	        cbFoundListSwiper.slideTo($(this).index());
	      });
	      // ajax拉取数据
	      $.ajax({
	        url: '/chuangq/mock/livelist.json',
	        type: 'get',
	        // data: {
	        //   type: 'more',
	        //   pageNo: 1
	        // },
	        success: function (res) {
              vm.cbShouLi=that.getItem(that.param.id,res);
              console.log(vm.cbShouLi);
	            vm.cbShouLi = res.data;
	            vm.isShowLoading = false;
	        }
	      });
        $("#detail-wx .container").height(window.document.body.clientHeight-77);
        var cbShouScroll = this.widgets.cbShouScroll;
        var topSize = 35;
        var head = $('.head img'),
            topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
            bottomImgHasClass = head.hasClass('down');
            cbShouScroll.on('scroll', function () {

                var y = this.y,
                maxY = this.maxScrollY - y;
                if (y >= 0) {
                  $('.head').show();
                  !topImgHasClass && head.addClass('up');
                  return '';
                }
                if (maxY >= 0) {
                  $('.foot').show();
                  !bottomImgHasClass && foot.addClass('down');
                  return '';
                }
            });

            cbShouScroll.on('scrollEnd', function () {
              // 上拉加载
              var maxY = this.maxScrollY - this.y;
              var self = this;
              if (this.y <= this.maxScrollY ) {
                head.removeClass('up');
                // $.ajax({
                //   async:false,
                //   url: '/chuangq/mock/new.json',
                //   type: 'get',
                //   success: function (res) {
                //     head.removeClass('up');
                //     head.attr('src', '/img/arrow.png');
                //     vm.read=res.data.concat(vm.read);
                //     spswiper2.updateSlidesSize();
                //   }
                // });
              }else if (this.y >= 0) {
              head.attr('src', '/chuangq/img/ajax-loader.gif');
              // ajax下拉刷新数据
            $.ajax({
              async:false,
              url: '/chuangq/mock/new.json',
              type: 'get',
              success: function (res) {
                cbShouScroll.scrollTo(0, -topSize);
                head.removeClass('up');
                head.attr('src', '/chuangq/img/arrow.png');

              }
            });
            }
            var maxY = this.maxScrollY - this.y;
            var self = this;
            if (maxY > -topSize && maxY < 0) {
              cbShouScroll.scrollTo(0, self.maxScrollY + topSize);
              foot.removeClass('down')
            } else if (maxY >= 0) {
              foot.attr('src', '/chuangq/img/ajax-loader.gif');
              // $.ajax({
              //   url: '/chuangq/mock/new.json',
              //   type: 'get',
              //   success: function (res) {
              //   vm.cart.pushArray(res.data.items);
              //   }
              // });
            }
          });



	    }
	}
})
