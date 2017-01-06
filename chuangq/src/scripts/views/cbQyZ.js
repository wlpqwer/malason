var cbQyZTpl= require('../tpls/cbQyZ.string');

// 定义视图
SPA.defineView('cbQyZ', {
  	// 装载模板
  	html: cbQyZTpl,
  	//定义插件
  	plugins: ["delegated"],
    bindEvents:{
    'show':function(){
      var cbSwiperQyZ= new Swiper('#cbFoundContentPicLi-swiper', {
          loop: false,
          slidesPerView: 2.5,
          spaceBetween: 10,
          freeMode: true,
          paginationClickable: true,
        });
        $("#CbConFoun .container").height(window.document.body.clientHeight-77);
    }
  }
});
