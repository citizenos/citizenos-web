$(function () {
    $('a.gray-box').hover(function() {
        $(this).find('img.img-blue').addClass('d-none')
        $(this).find('img.img-white').removeClass('d-none')
    }, function() {
        $(this).find('img.img-blue').removeClass('d-none')
        $(this).find('img.img-white').addClass('d-none')
    })

    var urlSearchParams = new URLSearchParams(window.location.search)
    var params = Object.fromEntries(urlSearchParams.entries())

    if (params.app) {
        $('nav, footer').remove()
        $('#help-content').removeClass(['mb-4', 'py-5'])
        $('#help-content').addClass(['py-3'])
        $('.content').addClass(['mt-0'])

        $('a[href^="/"]').each(function () {
            var url = $(this).attr('href') + '?app=true'
            $(this).attr('href', url)
        })

        var searchUrl = $('input#search').after('<input name="app" value="true" hidden><input type="submit" style="position:absolute;height:0px;width:0px;border:none;padding:0px;" hidefocus="true" tabindex="-1">')
    }

    window.addEventListener('message', function (e) {
        if (/citizenos\.com(:[0-9]{2,4})?$/.test(e.origin) && e.data === 'back') {
            window.history.back()
        }
    }, false)
})
