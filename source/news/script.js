$(function () {
    $('article img').addClass('img-fluid')

    $('#top-stories').removeClass('col-sm-6')
    $('#top-stories .block-text').removeClass('col-sm-8')
    $('#top-stories .block-text').removeClass('offset-sm-2')
    $('#top-stories .block-text').addClass('col-sm-10')
    $('#top-stories .block-text').addClass('offset-sm-1')
    $('#top-stories .block-text').append($('#top-stories-blocks').html())
    $('#top-stories-blocks').remove()

    $('#organizations').removeClass('col-sm-6')
    $('#organizations .block-text').removeClass('col-sm-8')
    $('#organizations .block-text').removeClass('offset-sm-2')
    $('#organizations .block-text').addClass('col-sm-4')
    $('#organizations .block-text').addClass('offset-sm-4')
    $('#organizations .block-text').addClass('text-center')
})
