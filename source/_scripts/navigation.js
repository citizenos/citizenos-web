$(function () {
    $(document).on('click touchend', function () {
        $('.collapse').collapse('hide')
    })

    $('.select-language').click(function () {
        window.localStorage.setItem('language', $(this).data('language'))
    })
})
