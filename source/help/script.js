$(function () {
    $('a.gray-box').hover(function() {
        var src = $(this).children('img').attr('src').replace('.svg', '-white.svg')
        $(this).children('img').attr('src', src)
    }, function() {
        var src = $(this).children('img').attr('src').replace('-white.svg', '.svg')
        $(this).children('img').attr('src', src)
    })
})
