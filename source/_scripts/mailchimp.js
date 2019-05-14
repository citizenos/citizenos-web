$(function () {
    $('#mailchimp-form').on('submit', function(e) {
        e.preventDefault()

        if($('#mailchimp-form input[name="EMAIL"]').val()) {
            $.ajax({
                url : $(this).attr('action'),
                type: 'POST',
                data: $(this).serialize(),
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
