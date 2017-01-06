var wen_listTpl=require('../tpls/wen_list.string');
SPA.defineView("wen_list",{
  html:wen_listTpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      },
      'g.list':function(){
        SPA.open('list')
      }
  },
  bindEvents:{
    'show':function(){
      var wenScroll = this.widgets.wenScroll;
      var topSize = 44;
      var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
      var foot = $('.foot img'),
          bottomImgHasClass = foot.hasClass('down');
          wenScroll.on('scroll', function () {
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
          wenScroll.on('scrollEnd', function () {
            var maxY = this.maxScrollY - this.y;
            var self = this;
            // 上拉加载
            if (this.y <= this.maxScrollY ) {
              foot.removeClass('up');
              $.ajax({
                async:false,
                url: '/chuangq/mock/yy.json',
                type: 'get',
                success: function (res) {
                  foot.attr('src', '/chaungq/img/ajax-loader.gif');
                  vm.yy.pushArray(res.data2);
                  $('.foot').hide();
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
                  wenScroll.scrollTo(0, -topSize);
                  head.removeClass('up');
                  head.attr('src', '/chuangq/img/arrow.png');
                  // setTimeout(function(){
                  //   $('.foot').hide();
                  // },1000);
                  vm.read=res.data.concat(vm.read);
                  spswiper2.updateSlidesSize();
                }
              });
          }

        });

    }
  }
})
