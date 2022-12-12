$(function () {
    $('a.gray-box').hover(function() {
        $(this).find('img.img-blue').addClass('d-none')
        $(this).find('img.img-white').removeClass('d-none')
    }, function() {
        $(this).find('img.img-blue').removeClass('d-none')
        $(this).find('img.img-white').addClass('d-none')
    })
})
