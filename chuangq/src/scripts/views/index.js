var indexTpl = require('../tpls/index.string');
// 定义视图
SPA.defineView('index', {
  	// 装载模板
  	html: indexTpl,
  	//定义插件
  	plugins: ["delegated"],
  	//装载子视图
  	modules : [{
  		name: "content",
  		container: "#index-container",
  		views: ['home', 'found', 'answers', 'mine'],
  		defaultTag: 'home'
  	}],
  	//绑定事件
  	bindActions: {
  		'switch': function(el,data){
  			this.modules.content.launch(data.name);
  			$('.index-footer p').eq($(el.el).index()).addClass('active')
        		.siblings().removeClass('active icon-wenyuda');
  		}
  	}

});
