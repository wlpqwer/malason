var cbQyZxTpl = require('../tpls/cbQyZx.string');
// 定义视图
SPA.defineView('cbQyZx', {
  	html: cbQyZxTpl,
    plugins: [{
  		name: 'avalon',
  		options: function(vm){
  			vm.cbzx = [];
  		}
  	},'delegated'],
  	bindActions: {
  		'g.cbzx': function(el,data){
        console.log(data);
  			SPA.open('list2',{
          param:{
            id:data.id
          }
        })
  		},

  	},
    bindEvents:{
      'show':function(){
        var vm=this.getVM();
        $.ajax({
          async:false,
          url:"/chuangq/mock/livelist.json",
          type:"get",
          data:{},
          success:function(res){
            vm.cbzx=res.data;
          }
        });

        $("#detail-wx .container").height(window.document.body.clientHeight-77);
        $("#CbConFoun .container").height(window.document.body.clientHeight-77);
        var cbZxScroll = this.widgets.cbZxScroll;
        var topSize = 35;
        var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
          bottomImgHasClass = head.hasClass('down');
          cbZxScroll.refresh();
          cbZxScroll.on('scroll', function () {

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

          cbZxScroll.on('scrollEnd', function () {
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
              cbZxScroll.scrollTo(0, -topSize);
              head.removeClass('up');
              head.attr('src', '/chuangq/img/arrow.png');

            }
          });
          }
          var maxY = this.maxScrollY - this.y;
          var self = this;
          if (maxY > -topSize && maxY < 0) {
            cbZxScroll.scrollTo(0, self.maxScrollY + topSize);
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
