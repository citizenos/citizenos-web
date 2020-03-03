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

    $.getJSON('/.netlify/functions/news', function (data) {
        var tag = 'technology'
        var news = []

        for (var i = 0; i < data.length; i++) {
            //- if (data[i].tags.indexOf(tag) > -1) {
            //-     news.push(data[i])
            //- }
            news.push(data[i])

            if (news.length === 3) {
                break
            }
        }

        for (var i = 0; i < news.length; i++) {
            $('#news-block-' + i + ' img').attr('src', news[i].picture)
            $('#news-block-' + i + ' h4').html(news[i].title)
            //- $('#news-block-' + i + ' p').html(news[i].text)
            $('#news-block-' + i + ' a').attr('href', news[i].url)
            $('#news-block-' + i).removeClass('d-none')
        }
    })


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
