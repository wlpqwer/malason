var answers0Tpl = require('../tpls/answers.string');

// 定义视图
SPA.defineView('answers', {
  	// 装载模板
  	html: answers0Tpl,
  	plugins: [{
    name: 'avalon',
    options: function (vm) {
      vm.cart = [];
    }
  },'delegated'],
  modules : [{
    name: "answer",
    container: "#ans",
    views: ['a1', 'a2', 'a3'],
    defaultTag: 'a1'
  }],
  bindActions:{
    'to.sha':function(){
      SPA.open('ans_xu')
    },
    'go.d':function(){
      SPA.open('click')
    },
    'ts':function(){
      SPA.open('search')
    },
    'swix':function(el,data){
      this.modules.answer.launch(data.name);
      $('.sf-ul1-li span').eq($(el.el).index()).addClass('active').
        siblings().removeClass('active');
    }
  },
  bindEvents: {
	   'show': function () {
      //  $("#ans .abox").height(window.document.body.clientHeight-90);
	    var vm = this.getVM();

    }

  }
})
