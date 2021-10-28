$(function () {
    $('#request-submit').click(function () {
        $('#request-form').addClass('d-none')
        $('#request-success').removeClass('d-none')

        var formValues = $('#request-form form').serialize()

        $.post('', formValues, function(data) {
            console.log(data)
        })
    })
})
