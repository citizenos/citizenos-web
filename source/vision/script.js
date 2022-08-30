$(function () {
    $('#start-img .block-text').addClass('text-center')

    $('#awareness').removeClass('col-sm-6')
    $('#awareness .block-text').removeClass('col-sm-8')
    $('#awareness .block-text').removeClass('offset-sm-2')
    $('#awareness .block-text').addClass('col-sm-4')
    $('#awareness .block-text').addClass('p-5')
    $('#awareness .block-text').addClass('bg-white')
    $('#awareness .block-text').addClass('text-center')
    $('#awareness .block-text').addClass('offset-sm-1')
    $('#awareness .block-text').addClass('box-shadow')

    $('a[data-target="#video-popup"]').click(function () {
        $('#video-popup iframe').attr('src', $(this).attr('href'))
    })

    $('#video-popup').on('hidden.bs.modal', function () {
        $('#video-popup iframe').attr('src', '')
    })
})
