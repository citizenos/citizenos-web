$(function () {
    $(window).resize(function () {
        $('.block').css('min-height', $(window).height() - $('nav').outerHeight(true) + 'px')
    })

    $(window).trigger('resize')
})
