$(function () {
    $('#feedback-submit').click(function () {
        $('#feedback-form').addClass('d-none')
        $('#feedback-success').removeClass('d-none')

        var formValues = $('#feedback-form form').serialize()

        $.post('', formValues, function(data) {
            console.log(data)
        })
    })
})
