var clickTpl=require('../tpls/click.string');
SPA.defineView("click",{
  html:clickTpl,
  plugins:['delegated'],
  bindActions:{
      "to.re.b":function(){
        this.hide();
      }
  },
  bindEvents:{
   "show":function(){
     var lprSwiper = new Swiper('#choose_way2', {
         loop: false,
         noSwiping : true,
         onSlideChangeStart: function(swiper){
           var index = swiper.activeIndex;
           $('.wayList span').eq(index).addClass('active').siblings().removeClass('active');
         }
       });

       $('.wayList span').click(function(){
         lprSwiper.slideTo($(this).index());
       });
       var textan=$('.textan').val();
       



   }
 }
})
