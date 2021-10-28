$(function () {
    $('#feedback-submit').click(function () {
        $('#feedback-form').addClass('d-none')
        $('#feedback-success').removeClass('d-none')

        $('#feedback-form form').submit()
    })
})
