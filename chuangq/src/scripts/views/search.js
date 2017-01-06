var searchTpl = require('../tpls/search.string');

// 定义视图
SPA.defineView('search', {
  	// 装载模板
  	html: searchTpl,

    plugins: [{
	    name: 'avalon',
	    options: function (vm) {
	    	vm.search = [];
	    }
	},'delegated'],

    bindActions: {
      'ss':function(){
        this.hide()
      },
      's2':function(){
        SPA.open('sea_in')
      }
    },
    bindEvents: {
    	'show': function(){
    		var vm = this.getVM();
    		var $search = $(".input_box_q input");
        $search.focus(function(){

        })
    	}
    }

});
