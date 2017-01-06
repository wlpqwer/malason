var a2Tpl=require('../tpls/a2.string');
SPA.defineView("a2",{
  html:a2Tpl,
  plugins:['delegated'],
  bindActions:{
      "bk":function(){
        this.hide();
      },
      'res_q':function(){
        SPA.open('res_q0')
      }
  },
  bindEvents:{
    'show':function(){
      $("#ans .abox").height(window.document.body.clientHeight-90);
      var aScroll2 = this.widgets.aScroll2;
      var topSize = 35;
      var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
      var foot = $('.foot img'),
          bottomImgHasClass = foot.hasClass('down');
          aScroll2.on('scroll', function () {
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
          aScroll2.on('scrollEnd', function () {
            var maxY = this.maxScrollY - this.y;
            var self = this;
            // 上拉加载
            if (this.y <= this.maxScrollY ) {
              foot.removeClass('up');
              $.ajax({
                async:false,
                url: '/chuangq/mock/new.json',
                type: 'get',
                success: function (res) {
                  // foot.removeClass('up');
                  foot.attr('src', '/chuangq/img/ajax-loader.gif');
                  vm.read=res.data.concat(vm.read);
                  spswiper2.updateSlidesSize();
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
                  aScroll2.scrollTo(0, -topSize);
                  head.removeClass('up');
                  head.attr('src', '/chuangq/img/arrow.png');
                  vm.read=res.data.concat(vm.read);
                  spswiper2.updateSlidesSize();
                }
              });
          }

        });
      var sfanSwiper3 = new Swiper('#sf-a-sc1', {
          // spaceBetween: 30,
        onSlideChangeStart: function(swiper){
          var index = swiper.activeIndex;
          $('.sf-a-qu span').eq(index).addClass('active').siblings().removeClass('active');
        }
      });
      $('.kff span').on('tap', function () {
          sfanSwiper3.slideTo($(this).index());
          console.log($(this).index());
      });
    }

  }
})
