var res_qTpl=require('../tpls/res_q.string');
SPA.defineView("res_q",{
  html:res_qTpl,
  plugins:['delegated'],
  bindActions:{
      "to.re.b":function(){
        this.hide();
      }
  },
  bindEvents:{
   "show":function(){
     var lprSwiper = new Swiper('#choose_way', {
         loop: false,
         noSwiping : true,
         onSlideChangeStart: function(swiper){
           var index = swiper.activeIndex;
           $('.wayList span').eq(index).addClass('active').siblings().removeClass('active');
         }
       });

       $('.wayList span').click(function(){
         lprSwiper.slideTo($(this).index());
       })
   }
 }
})
