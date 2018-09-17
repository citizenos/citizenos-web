$(function () {
    $(window).resize(function () {
        $('.page-block').css('min-height', $(window).height() - $('nav').outerHeight(true) - 30 + 'px')
    })

    $(window).trigger('resize')
})
