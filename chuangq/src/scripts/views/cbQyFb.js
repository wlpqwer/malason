var cbQyFbTpl = require('../tpls/cbQyFb.string');
// 定义视图
SPA.defineView('cbQyFb', {
  	// 装载模板
  	html: cbQyFbTpl,
    init:{
      getItem:function(id,res){
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].id==id){
            return res.data[i];
          }
        }
      }
    },
  	//定义插件
  	plugins: [{
  		name: 'avalon',
  		options: function(vm){
  			vm.cbListFou = [];
  			vm.cbListFb =[];
  		}
  	},'delegated'],

  	// 绑定事件
  	bindActions: {
      'goCBFbDetail': function(el,data){
        SPA.open('list',{
          param:{
            id:data.id
          }
        })
      },
    },
    // 绑定视图事件
    bindEvents: {
      'show': function () {
        var vm = this.getVM();
        var that=this;
        // ajax拉取数据
        $.ajax({
          url: '/chuangq/mock/livelist.json',
          async:false,
          type: 'get',
  //	        data: {
  //	          type: 'more',
  //	          pageNo: 1
  //	        },
          success: function (res) {
              // console.log(that.getItem(that.param.id,res));
              vm.cbListFb=that.getItem(that.param.id,res);
              // console.log(vm.cbListFb);
              vm.cbListFb = res.data;
              vm.isShowLoading = false;
          }
        })

        $("#CbConFoun .container").height(window.document.body.clientHeight-77);
        var cbFbScroll = this.widgets.cbFbScroll;
        var topSize = 35;
        var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
          bottomImgHasClass = head.hasClass('down');
          cbFbScroll.refresh();
          cbFbScroll.on('scroll', function () {

              var y = this.y,
              maxY = this.maxScrollY - y;
                // console.log(this.maxScrollY);
              // console.log(this.maxScrollY);
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

          cbFbScroll.on('scrollEnd', function () {
            // 上拉加载
            var maxY = this.maxScrollY - this.y;
            var self = this;
            if (this.y <= this.maxScrollY ) {
              head.removeClass('up');
              $.ajax({
                async:false,
                url: '/chuangq/mock/new.json',
                type: 'get',
                success: function (res) {
                  head.removeClass('up');
                  head.attr('src', '/chuangq/img/arrow.png');

                }
              });
            }else if (this.y >= 0) {
            head.attr('src', '/chuangq/img/ajax-loader.gif');
            // ajax下拉刷新数据
          $.ajax({
            async:false,
            url: '/chuangq/mock/new.json',
            type: 'get',
            success: function (res) {
              cbFbScroll.scrollTo(0, -topSize);
              head.removeClass('up');
              head.attr('src', '/chuangq/img/arrow.png');

            }
          });
          }
          var maxY = this.maxScrollY - this.y;
          var self = this;
          if (maxY > -topSize && maxY < 0) {
            cbFbScroll.scrollTo(0, self.maxScrollY + topSize);
            foot.removeClass('down')
          } else if (maxY >= 0) {
            foot.attr('src', '/chuangq/img/ajax-loader.gif');
            $.ajax({
              url: '/chuangq/mock/new.json',
              type: 'get',
              success: function (res) {

              }
            });
          }
        });

      }
    }

});
