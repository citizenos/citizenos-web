$(function () {
    window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

    var urlSearchParams = new URLSearchParams(window.location.search)
    var params = Object.fromEntries(urlSearchParams.entries())

    $('#search').on('change input', filter)
    $('#search').val(params.q)

    filter()

    function filter() {
        var search = $('#search').val().toLowerCase().split(' ').filter(x => !!x)

        plausible('Help', { props: { search: search.join(' ') } })

        $('li.topic-title').removeClass('topic-title-visible')
        $('li.topic-title').addClass('d-none')

        $('li.topic-title').each(function () {
            var link = $(this)
            var current = search.filter(function (s) {
                return link.data('search').includes(s)
            }).length === search.length

            if (current) {
                link.addClass('topic-title-visible')
                link.removeClass('d-none')
            }
        })

        $('.topic-block').addClass('d-none')
        $('.topic-title-visible').closest('.topic-block').removeClass('d-none')
    }
})
