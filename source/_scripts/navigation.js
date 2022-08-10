$(function () {
    $('.content').on('click touchend', function () {
        $('.collapse').collapse('hide')
    })

    $('.select-language').click(function () {
        window.localStorage.setItem('language', $(this).data('language'))
    })

    $('a[href="https://app.citizenos.com"]').attr('href', 'https://app.citizenos.com/' + $('html').attr('lang') + '/')
})
