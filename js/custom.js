$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $("nav").toggleClass("nav-active");
    });
    // header
    var nul = 0;
    $(window).on("scroll" , function(){
        $("header").toggleClass("hide", $(window).scrollTop()>nul);
        nul=$(window).scrollTop();
    });
    // them-switcher
    $(".switch").click(function(){
        $(".them-switcher").toggleClass("them-show");
    });
    $(".them-switcher ul li").click(function(){
       var color= $(this).css("background-color");
       var clas =$(this).attr("class");
        $(":root").css("--text-blue",color);
        $("html").attr("class","");
        $("html").addClass(clas);
    })
});
// couneter js
var counted = 0;
$(window).scroll(function() {

  var oTop = $('.value').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.value-count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 8000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 5;
  }

});

// accoridion
$(".accoridion-head").click(function(){
  $(this).parent(".accoridion-item").find(".accoridion-cotent").slideToggle();
  $(this).parent(".accoridion-item").prevAll(".accoridion-item").find(".accoridion-cotent").slideUp();
  $(this).parent(".accoridion-item").nextAll(".accoridion-item").find(".accoridion-cotent").slideUp();
})
    