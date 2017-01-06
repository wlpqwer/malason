var goodTpl = require('../tpls/good.string');

// 定义视图
SPA.defineView('good', {
  	// 装载模板
  	html: goodTpl,
  	plugins: [
  		'delegated',{
  			name: 'avalon',
  			options: function(vm){
  				vm.good = {};
  			}
  		}
  	],

    bindEvents: {
    'show': function () {
    	var that = this;
    	var vm = this.getVM();

        var mySwiper = new Swiper('.swiper-container', {
            //autoplay: 2000,//可选选项，自动滑动
			//loop : true,
			//autoplayDisableOnInteraction : false,
			pagination : '.swiper-pagination',
			paginationType : 'bullets'
        });
        $.ajax({
        	type:"get",
        	url:"/api/allGoods.php",
        	data: {
        		id: that.param.id
        	},
        	success: function(res){
        		//console.log(res.data.items);
        		var json = res.data.items;
        		$(json).each(function(i){
        			//console.log($(this)[0].id);
        			if($(this)[0].id == that.param.id){
        				//console.log($(this)[0]);
        				vm.good = $(this)[0];
        			}
        		});
        	}
        });
      }
    },
    bindActions: {
    	"back": function(){
    		this.hide();
    	}
    }

});
