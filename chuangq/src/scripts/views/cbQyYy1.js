var cbQyYy1Tpl = require('../tpls/cbQyYy1.string');
// 定义视图
SPA.defineView('cbQyYy1', {
  	// 装载模板
  	html: cbQyYy1Tpl,
    plugins: [{
      name: 'avalon',
      options: function(vm){
        vm.cbYy = [];
      }
    },'delegated'],
    bindActions: {
      'go.cbYyDt': function(el,data){
        SPA.open('yycj',{
          param:{
            id:data.id
          }
        })
      },
      "back2":function(){
        this.hide()
      }

    },
    bindEvents:{
      'show':function(){
        var vm=this.getVM();
        $.ajax({
          async:false,
          url:"/chuangq/mock/yy.json",
          type:"get",
          data:{},
          success:function(res){
            vm.cbYy=res.data;
          }
        });

        $("#detail-wx .container").height(window.document.body.clientHeight-77);
        $("#CbConFoun .container").height(window.document.body.clientHeight-77);
        var cbYyScroll = this.widgets.cbYyScroll;
        var topSize = 35;
        var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
          bottomImgHasClass = head.hasClass('down');
          cbYyScroll.refresh();
          cbYyScroll.on('scroll', function () {

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

          cbYyScroll.on('scrollEnd', function () {
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
              cbYyScroll.scrollTo(0, -topSize);
              head.removeClass('up');
              head.attr('src', '/chuangq/img/arrow.png');

            }
          });
          }
          var maxY = this.maxScrollY - this.y;
          var self = this;
          if (maxY > -topSize && maxY < 0) {
            cbYyScroll.scrollTo(0, self.maxScrollY + topSize);
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
