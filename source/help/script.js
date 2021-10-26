$(function () {
    $('a.gray-box').hover(function() {
        $(this).children('img.img-blue').addClass('d-none')
        $(this).children('img.img-white').removeClass('d-none')
    }, function() {
        $(this).children('img.img-blue').removeClass('d-none')
        $(this).children('img.img-white').addClass('d-none')
    })
})
