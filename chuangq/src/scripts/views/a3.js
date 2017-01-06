var a3Tpl=require('../tpls/a3.string');
SPA.defineView("a3",{
  html:a3Tpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      }
  },
  bindEvents:{
    'show':function(){
      $("#ans .abox").height(window.document.body.clientHeight-90);
      var aScroll3 = this.widgets.aScroll3;
      var topSize = 35;
      var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
      var foot = $('.foot img'),
          bottomImgHasClass = foot.hasClass('down');
          aScroll3.on('scroll', function () {
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
        //   aScroll3.on('scrollEnd', function () {
        //     var maxY = this.maxScrollY - this.y;
        //     var self = this;
        //     // 上拉加载
        //     if (this.y <= this.maxScrollY ) {
        //       foot.removeClass('up');
        //       $.ajax({
        //         async:false,
        //         url: '/chuangq/mock/new.json',
        //         type: 'get',
        //         success: function (res) {
        //           // foot.removeClass('up');
        //           foot.attr('src', '/chuangq/img/ajax-loader.gif');
        //           vm.read=res.data.concat(vm.read);
        //           spswiper2.updateSlidesSize();
        //         }
        //       });
        //     }else if (this.y >= 0) {
        //     head.attr('src', '/chuangq/img/ajax-loader.gif');
        //     // ajax下拉刷新数据
        //       $.ajax({
        //         async:false,
        //         url: '/chuangq/mock/new.json',
        //         type: 'get',
        //         success: function (res) {
        //           aScroll3.scrollTo(0, -topSize);
        //           head.removeClass('up');
        //           head.attr('src', '/img/arrow.png');
        //           vm.read=res.data.concat(vm.read);
        //           spswiper2.updateSlidesSize();
        //         }
        //       });
        //   }
        //
        // });
    }

  }
})
