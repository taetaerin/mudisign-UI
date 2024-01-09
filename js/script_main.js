$(function () {
    $(".gnb li a").on('mouseenter focus', function () {
        var bar = $(this).position().left;
        var widNum = $(this).width();
        $('span.bar').css({ 'left': bar + 'px', 'width': widNum + 'px', "opacity": 1 });
    });

    $('.gnb li a').on('mouseleave', function () {
        $('span.bar').css({ 'left': 0, 'width': 0, "opacity": 0 });
    });
});


$(function() {
    $('.svgAni').find('path').each(function(i, path) {
        var length = path.getTotalLength();
        //alert(length) //1564.734130859375
    })
})

$(function() {
    $('.animate').scrolla({
        mobile: true, //모바일 버전 활성화
        once: true //스크롤시 딱 한번만 하고 싶을 때
    });
})


$(window).on('scroll resize', function(){
    var scrollTop = $(document).scrollTop();
    bgColor();
    function bgColor() {
        if(scrollTop > 1400) {
            $('body').addClass('on');
        }else {
            $('body').removeClass('on');
        }
        if(scrollTop > 2700) {
            $('body').removeClass('on');
        }
    }
})

