var usehelpTpl = require('../tpls/usehelp.string');

// 定义视图
SPA.defineView('usehelp', {
  	// 装载模板
  	html: usehelpTpl,
    //定义插件
    plugins: ['delegated'],
    bindActions: {
        'to.usba': function () {
            this.hide();
        }

    }

});
