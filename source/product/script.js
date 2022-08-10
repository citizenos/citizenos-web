$(function () {
    $('#decision-img .block-text').addClass('text-center')

    $('#features-img .block-text').removeClass('col-sm-8')
    $('#features-img .block-text').addClass('col-sm-10')

    $('#case-study-1-img .block-text').removeClass('col-sm-8')
    $('#case-study-1-img .block-text').addClass('col-sm-10')

    $('#case-study-2-img .block-text').removeClass('col-sm-8')
    $('#case-study-2-img .block-text').addClass('col-sm-10')
    $('#case-study-2-img .block-text').removeClass('offset-sm-2')

    $('#flexibleformat').removeClass('col-sm-6')
    $('#flexibleformat .block-text').removeClass('col-sm-8')
    $('#flexibleformat .block-text').removeClass('offset-sm-2')
    $('#flexibleformat .block-text').addClass('col-sm-10')
    $('#flexibleformat .block-text').addClass('offset-sm-1')
    $('#flexibleformat .block-text').append($('#flexibleformat-blocks').html())
    $('#flexibleformat-blocks').remove()

    $('#options').removeClass('col-sm-6')
    $('#options .block-text').removeClass('col-sm-8')
    $('#options .block-text').removeClass('offset-sm-2')
    $('#options .block-text').addClass('col-sm-10')
    $('#options .block-text').addClass('offset-sm-1')
    $('#options .block-text').append($('#option-blocks').html())
    $('#option-blocks').remove()

    $('#stats').removeClass('col-sm-6')
    $('#stats .block-text h2').after($('#stats-blocks').html())
    $('#stats-blocks').remove()

    $('a[data-target="#video-popup"]').click(function () {
        $('#video-popup iframe').attr('src', $(this).attr('href'))
    })

    $('#video-popup').on('hidden.bs.modal', function () {
        $('#video-popup iframe').attr('src', '')
    })

    //- $('#how-videos').append($('#how-carousel'))
    //-
    //- $('a[href="#carousel-next"]').click(function () {
    //-     $('#how-carousel').carousel('next')
    //- })
    //-
    //- $('#how-carousel').on('slid.bs.carousel', function () {
    //-     var id = $('#how-carousel').find('.carousel-item.active').data('id')
    //-
    //-     $('#carousel-text').html($('#carousel-text-' + id).html())
    //- })
    //- $('#how-carousel').trigger('slid.bs.carousel')

    var statsSet = false
    var locale = $('html').attr('lang')

    $(window).on('resize scroll', function () {
        var elementTop = $('#stats').offset().top
        var elementBottom = elementTop + $('#stats').outerHeight()
        var viewportTop = $(window).scrollTop()
        var viewportBottom = viewportTop + $(window).height()

        if (!statsSet && elementBottom > viewportTop && elementTop < viewportBottom) {
            statsSet = true
            $.getJSON('/.netlify/functions/stats', function (data) {
                $('.stats-value').each(function () {
                    var id = $(this).data('id')
                    var value = data[id]

                    $(this).prop('Counter',0).animate({
                        Counter: value
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now).toLocaleString(locale))
                        }
                    })
                })
            })
        }
    })
})
