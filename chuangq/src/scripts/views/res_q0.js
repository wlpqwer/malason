var res_q0Tpl=require('../tpls/res_q0.string');
SPA.defineView("res_q0",{
  html:res_q0Tpl,
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
