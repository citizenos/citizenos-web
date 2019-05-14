$(function () {
    $('#mailchimp-form').on('submit', function(e) {
        e.preventDefault()

        var email = $('#mailchimp-form input[name="EMAIL"]').val()

        if(email) {
            var data = {
                email: email
            }
            $.ajax({
                url : 'https://citizenos.com/.netlify/functions/newsletter',
                type: 'POST',
                data: JSON.stringify(data),
                contentType : 'application/json',
                success: function (data) {
                    console.log(data)
                    $('#mailchimp').modal('hide')
                    $('#mailchimp-form input[name="EMAIL"]').val('')
                },
                error: function (jXHR, textStatus, errorThrown) {
                    console.error(errorThrown)
                }
            })
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
