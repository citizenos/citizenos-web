$(function () {
    if (window.localStorage.getItem('cookies-accepted') !== 'true') {
        $('#kypsis').removeClass('d-none')
    }
    $('#kypsis button').click(function () {
        window.localStorage.setItem('cookies-accepted', 'true')
        $('#kypsis').remove()
    })
})
