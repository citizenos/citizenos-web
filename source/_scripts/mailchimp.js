$(function () {
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault()

        var email = $('#newsletter-form input[name="EMAIL"]').val()

        if(email) {
            $.post('/.netlify/functions/newsletter', JSON.stringify({ email: email }), function (data) {
                console.log(data)

                $('#newsletter').modal('hide')
                $('#newsletter-form input[name="EMAIL"]').val('')
            }, 'json')
        }
    })

    $('#newsletter').on('shown.bs.modal', function (e) {
        $('#newsletter-form input[name="EMAIL"]').focus()
    })

    $('#newsletter').on('hidden.bs.modal', function (e) {
        $('#newsletter-form input[name="EMAIL"]').val('')
    })

    var subscribe = function () {
        $('#newsletter').modal('show')
    }

    $('a[href="#subscribe"]').click(subscribe)

    if (window.location.hash === '#subscribe') {
        subscribe()
    }
})
