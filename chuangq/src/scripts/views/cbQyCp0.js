var cbQyCp0Tpl = require('../tpls/cbQyCp0.string');
SPA.defineView('cbQyCp0', {
  	html: cbQyCp0Tpl,
    plugins: [{
  		name: 'avalon',
  		options: function(vm){
  			vm.cbcp = [];
  		}
  	},'delegated'],
  	bindActions: {
  		'go.cpdetail': function(el,data){
        console.log(data);
  			SPA.open('list10',{
          param:{
            id:data.id
          }
        })
  		},
      "back1":function(){
        this.hide()
      }
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
            vm.cbcp=res.data;
          }
        });

        $("#detail-wx .container").height(window.document.body.clientHeight-77);
          $("#CbConFoun .container").height(window.document.body.clientHeight-77);
        var cbCpScroll = this.widgets.cbQyScroll;
        var topSize = 35;
        var head = $('.head img'),
            topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
            bottomImgHasClass = head.hasClass('down');
            cbCpScroll.refresh();
            cbCpScroll.on('scroll', function () {

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

            cbCpScroll.on('scrollEnd', function () {
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

            }
            var maxY = this.maxScrollY - this.y;
            var self = this;
            if (maxY > -topSize && maxY < 0) {
              cbCpScroll.scrollTo(0, self.maxScrollY + topSize);
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
