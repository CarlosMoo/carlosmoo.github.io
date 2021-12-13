$(document).ready(function(){

    $('#removeicon').click(function(){
        if($('#removeicon').attr('class') == 'fas fa-bars' ){

            $('#removeicon').removeClass('fas fa-bars').addClass('fas fa-times-circle');
            $('.navegacion .menu').css({'left':'0px', 'transition': 'all 0.5s'});

        } else{

           $('#removeicon').removeClass('fas fa-times-circle').addClass('fas fa-bars');
            $('.navegacion .menu').css({'left':'-390px', 'transition': 'all 0.5s'});
       }
    });

});

$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#btn-top').fadeIn(1800);
      } else{
        $('#btn-top').fadeOut(1800);
      }
    });
  
    $("#btn-top").click(function(){
      $('html ,body').animate({scrollTop : 0},1800);
    });
  });

$(document).ready(function()
    {
    $('#slider1').tinycarousel();
});


  