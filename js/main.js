$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        if($(window).scrollTop() < 0){
            $('.header').hide();
        }else{
            $('.header').show();
        }

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
  
    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

});

var typed = new Typed('.typing-text', {
    strings: ['wedding photographer', 'child photographer', 'nature photographer', 'fashion photographer'],
    typeSpeed:120,
    loop:true
});
  