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
  			vm.cbListWx=[];
  		}
  	},'delegated'],
  	//绑定事件
  	bindActions: {
      'back': function () {
	      this.hide();
	    },
      'goCBFbDetail':function(el,data){
        SPA.open('list',{
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
	      // ajax拉取数据
	      $.ajax({
          // async:false,
	        url: '/chuangq/mock/livelist.json',
	        type: 'get',
	        // data: {
	        //   type: 'more',
	        //   pageNo: 1
	        // },
	        success: function (res) {
              // vm.cbListWx=that.getItem(that.param.id,res);
              console.log(vm.cbListWx);
              vm.cbListWx=res.data;
	            // vm.cbListWx = res.data;
	        }
	      });

        var cbScrollWx = this.widgets.cbScrollWx;
        var topSize = 44;
        var head = $('.head img'),
            topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
            bottomImgHasClass = head.hasClass('down');
            cbScrollWx.on('scroll', function () {

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

            cbScrollWx.on('scrollEnd', function () {
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
                cbScrollWx.scrollTo(0, -topSize);
                head.removeClass('up');
                head.attr('src', '/chuangq/img/arrow.png');
                vm.read=res.data.concat(vm.read);
              }
            });
            }
            var maxY = this.maxScrollY - this.y;
            var self = this;
            if (maxY > -topSize && maxY < 0) {
              cbScrollWx.scrollTo(0, self.maxScrollY + topSize);
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
