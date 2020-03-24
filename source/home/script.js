$(function () {
    $('#video').removeClass('col-sm-6')

    $('.block.col-sm-4').removeClass('col-sm-6')
    $('.block-text.col-sm-8').addClass('col-sm-10')
    $('.block-text.col-sm-10').removeClass('col-sm-8')
    $('.block-text.col-sm-10').removeClass('.offset-sm-2')

    $('#meet .block-text').html($('#meet-blocks').html())
    $('#meet-blocks').remove()

    $('#team .block-text').addClass('offset-sm-2')
    $('#team .block-text').removeClass('col-sm-10')
    $('#team .block-text').addClass('col-sm-8')

    $('#partners .block-text').removeClass('col-sm-10')
    $('#partners .block-text').addClass('col-sm-8')

    // $(window).scroll(function () {
    //     $('.scroll-out').each(function () {
    //         var top = $(this).offset().top  - $(window).scrollTop() - $('nav').outerHeight(true)
    //
    //         if (top < 0) {
    //             $(this).css({ 'background-position': 'center ' + Math.pow(top, 2) * -0.005 + 'px' })
    //         }
    //     })
    //     $('.scroll-in').each(function () {
    //         var top = $(this).offset().top  - $(window).scrollTop() - $('nav').outerHeight(true)
    //
    //         if (top > 0) {
    //             $(this).css({ 'background-position': 'center ' + Math.pow(top, 2) * 0.0005 + 'px' })
    //         }
    //     })
    // })
    //
    // $(window).trigger('scroll')
})
