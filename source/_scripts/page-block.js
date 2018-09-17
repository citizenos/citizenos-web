$(function () {
    $(window).resize(function () {
        $('.page-block').css('height', $(window).height() - $('nav').outerHeight(true) + 'px')
    })

    $(window).trigger('resize')
})
