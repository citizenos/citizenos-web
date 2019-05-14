$(function () {
    $('#mailchimp-form').on('submit', function(e) {
        e.preventDefault()

        var email = $('#mailchimp-form input[name="EMAIL"]').val()

        if(email) {
            $.post('https://citizenos.com/.netlify/functions/newsletter', JSON.stringify({ email: email }), function (data) {
                console.log(data)
                $('#mailchimp').modal('hide')
                $('#mailchimp-form input[name="EMAIL"]').val('')
            }, 'json')
        }
    })
    $('#mailchimp').on('hide.bs.modal', function (e) {
        $('#mailchimp-form input[name="EMAIL"]').val('')
    })

    var subscribe = function () {
        $('#mailchimp').modal('show')
    }

    $('a[href="#subscribe"]').click(subscribe)

    if (window.location.hash === '#subscribe') {
        subscribe()
    }
})
