var homeTpl= require('../tpls/home.string');
// 定义视图
SPA.defineView('home', {
  	// 装载模板
  	html: homeTpl,
  	plugins: [{
  		name: 'avalon',
  		options: function(vm){
  			vm.read = [];
        vm.pro= [];
  			vm.pro1= [];
  			vm.banner = [];
  			vm.ft = [];
        vm.yy=[];
  		}
  	},'delegated'],
	bindActions: {
        'h.search': function () {
            SPA.open('search');
        },
        'h.l':function(){
            SPA.open('wen_list')
        },
        'w.list':function(){
          SPA.open('yycj'
          )
        },
        't.l1':function(el,data){
            // console.log(data.id);
          SPA.open('list1',{
            param:{
              id:data.id
            }
          })
        },
        't.l2':function(el,data){
            // console.log(data.id);
          SPA.open('list10',{
            param:{
              id:data.id
            }
          })
        },
        'goto.detail':function(el,data){
          SPA.open('list',{
            param:{
              id:data.id
            }
          });
        },
        'g.banner':function(el,data){
          SPA.open('list',{
            param:{
              id:data.id
            }
          })
        }

   },
  	bindEvents: {
  		"show": function(){
        var vm=this.getVM();
        // banner
        $.ajax({
          async:false,
          url:'/chuangq/mock/banner.json',
          type:'get',
          data:{},
          success:function(res){
            vm.banner=res.data;
          }
        })
        // four-title
        $.ajax({
          url:'/chuangq/mock/ft.json',
          type:'get',
          data:{},
          success:function(res){
            vm.ft=res.data;
          }
        })
        //获得vm精选阅读
        $.ajax({
          async:false,
          url:"/chuangq/mock/read.json",
          type:"get",
          data:{
            // type:more,
            // pageNo:1
          },
          success:function(res){
            // console.log(res.message);
            vm.read=res.data;
          }
        });
        // 金牌教练
        // var vm2=this.getVM();
        $.ajax({
          async:false,
          url:"/chuangq/mock/pro.json",
          type:"get",
          data:{},
          success:function(res){
            vm.pro=res.data;
          }
        });
        $.ajax({
          async:false,
          url:"/chuangq/mock/pro1.json",
          type:"get",
          data:{},
          success:function(res){
            vm.pro1=res.data;
          }
        });
        // 最新应用
        $.ajax({
          async:false,
          url:"/chuangq/mock/yy.json",
          type:"get",
          data:{},
          success:function(res){
            vm.yy=res.data
          }
        })
        var myScroll = this.widgets.myScroll;
        var topSize = 44;
        var head = $('.head img'),
            topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
            bottomImgHasClass = foot.hasClass('down');
            myScroll.on('scroll', function () {
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
            myScroll.on('scrollEnd', function () {
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
                    foot.attr('src', '/chuangq/img/ajax-loader.gif');
                    vm.yy.pushArray(res.data);
                  }
                });
              }else if (this.y >= 0) {
              head.attr('src', '/chuangq/img/ajax-loader.gif');
              // ajax下拉刷新数据
                $.ajax({
                  async:false,
                  url: '/chuangq/mock/read.json',
                  type: 'get',
                  success: function (res) {
                    myScroll.scrollTo(0, -topSize);
                    head.removeClass('up');
                    head.attr('src', '/chuangq/img/arrow.png');
                    vm.read=res.data.concat(vm.read);
                    spswiper2.updateSlidesSize();
                  }
                });
            }

          });

          var spswiper2 = new Swiper('#newswei', {
            slidesPerView: 2.1,
            paginationClickable: true,
            freeMode: true,
            spaceBetween:10
          });
          var spswiper3 = new Swiper('#swiper3', {
             slidesPerView: 2.5,
             spaceBetween:10,
             paginationClickable: true,
             freeMode: true
          });
          var spswiper4 = new Swiper('#swiper4', {
             slidesPerView: 2.8,
             spaceBetween:10,
             paginationClickable: true,
             freeMode: true
          });
  				var mySwiper1 = new Swiper('#home-swiper',{
            pagination: '.swiper-pagination',
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
	  				loop:true,
	  				pagination : '.swiper-pagination',
					  paginationClickable :true
	  			});
  		}
  	},
});
