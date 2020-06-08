$(function () {
    $('article img').addClass('img-fluid')

    $('#top-stories').removeClass('col-sm-6')
    $('#top-stories .block-text').removeClass('col-sm-8')
    $('#top-stories .block-text').removeClass('offset-sm-2')
    $('#top-stories .block-text').addClass('col-sm-10')
    $('#top-stories .block-text').addClass('offset-sm-1')
    $('#top-stories .block-text').append($('#top-stories-blocks').html())
    $('#top-stories-blocks').remove()

    $('#all-stories').removeClass('col-sm-6')
    $('#all-stories .block-text').removeClass('col-sm-8')
    $('#all-stories .block-text').removeClass('offset-sm-2')
    $('#all-stories .block-text').addClass('col-sm-10')
    $('#all-stories .block-text').addClass('offset-sm-1')
    $('#all-stories .block-text').append($('#all-stories-blocks').html())
    $('#all-stories .block-text h2').remove()
    $('#all-stories-blocks').remove()

    $('#organizations').removeClass('col-sm-6')
    $('#organizations .block-text').removeClass('col-sm-8')
    $('#organizations .block-text').removeClass('offset-sm-2')
    $('#organizations .block-text').addClass('col-sm-4')
    $('#organizations .block-text').addClass('offset-sm-4')
    $('#organizations .block-text').addClass('text-center')


    $('.cat-link').click(function (e) {
        e.preventDefault()

        var cat = $(this).data('cat')

        $('.cat-link').removeClass('active')
        $(this).addClass('active')

        if (cat === 'all') {
            $('.cat-box').removeClass('d-none')
        } else {
            $('.cat-box').addClass('d-none')
            $('.cat-box[data-cat*="#' + cat + '#"]').removeClass('d-none')
        }
    })
})
