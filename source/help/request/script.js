$(function () {
    $('#request-submit').click(function () {
        if(!$('#request-form input[name="email"]').val().trim() || !$('#request-form textarea[name="message"]').val().trim()) {
            return
        }

        $('#request-form').addClass('d-none')
        $('#request-success').removeClass('d-none')

        var formValues = $('#request-form form').serialize()

        $.post('', formValues, function(data) {
            console.log(data)
        })
    })

    $('#request-form input[name="email"], #request-form textarea[name="message"]').keyup(function() {
        if(!$('#request-form input[name="email"]').val().trim() || !$('#request-form textarea[name="message"]').val().trim()) {
            $('#request-submit').prop('disabled', true)
        } else {
            $('#request-submit').prop('disabled', false)
        }
    })
})
