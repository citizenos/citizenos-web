$(function () {
    var subscribe = function () {
        window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
            L.start({
                baseUrl: 'mc.us19.list-manage.com',
                uuid: 'ab576406496d96d9a8387879f',
                lid: 'd44f990ec5',
                uniqueMethods: true
            })

            document.cookie = 'MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
            document.cookie = 'MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
        })
    }

    $('a[href="#subscribe"]').click(subscribe)

    if (window.location.hash === '#subscribe') {
        subscribe()
    }
})
