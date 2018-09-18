$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $('html, body').css('background-color', $('#footer').css('background-color'))
        } else {
            $('html, body').css('background-color', '#FFFFFF')
        }
    })
})
