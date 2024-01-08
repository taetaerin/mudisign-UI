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

