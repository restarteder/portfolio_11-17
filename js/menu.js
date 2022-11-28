$(function(){

    var $header = $('header');
    var $subHeight;

    InEvent();

    // 메뉴 보여주는 효과
    function menuShow(){
        $(this).find('.nav__menu__content').stop().animate({'opacity':1},500,"easeOutCubic");
        $subHeight = $(this).find('.nav__menu__content').outerHeight();
        $header.stop().animate({'height':98+$subHeight+'px'},700,"easeOutCubic");
    }


    // 메뉴 글씨만 사라지는 효과
    function menuLetterHide(){
        $(this).find('.nav__menu__content').stop().animate({'opacity':0},500,"easeOutCubic");
    }
    
    // 메뉴 사라지는 효과
    function menuHide(){
        $header.stop().animate({'height':'98px'},700,"easeOutCubic");
    }

    // 효과 적용
    function InEvent(){
        $("#menu>div>ul>li").on('mouseenter',menuShow);
        $("#menu>div>ul>li").on('mouseleave',menuLetterHide);
        $header.on('mouseleave',menuHide);
    }
});