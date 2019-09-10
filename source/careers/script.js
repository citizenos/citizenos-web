$(function () {
    $('.open-career').click(function (e) {
        $('#careers').addClass('d-none')
        $($(this).attr('href')).removeClass('d-none')

        location.hash = $(this).attr('href')

        $(window).scrollTop(0)
        e.preventDefault()
    })

    $('.close-career').click(function (e) {
        $('.career').addClass('d-none')
        $('#careers').removeClass('d-none')

        location.hash = ''

        $(window).scrollTop(0)
        e.preventDefault()
    })

    if (location.hash && location.hash !== '#') {
        $('a[href="' + location.hash + '"]').click()
    }
})
