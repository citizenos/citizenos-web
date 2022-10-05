$(function () {
    $('#feedback-submit').click(function () {
        if(!$('#feedback-form input[name="email"]').val().trim() || !$('#feedback-form textarea[name="message"]').val().trim()) {
            return
        }

        $('#feedback-form').addClass('d-none')
        $('#feedback-success').removeClass('d-none')

        var formValues = $('#feedback-form form').serialize()

        $.post('', formValues, function(data) {
            console.log(data)
        })
    })

    $('#feedback-form input[name="email"], #feedback-form textarea[name="message"]').keyup(function() {
        if(!$('#feedback-form input[name="email"]').val().trim() || !$('#feedback-form textarea[name="message"]').val().trim()) {
            console.log('A');
            $('#feedback-submit').prop('disabled', true)
        } else {
            console.log('B');
            $('#feedback-submit').prop('disabled', false)
        }
    })
})
