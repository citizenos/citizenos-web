$(function () {
    $(window).resize(function () {
        $('.page-block').css('min-height', $(window).height() - $('nav').outerHeight(true) + 'px')
    })

    $(window).trigger('resize')
})
