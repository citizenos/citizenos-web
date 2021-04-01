$(function () {
    $('#video').removeClass('col-sm-6')

    $('.block.col-sm-4').removeClass('col-sm-6')
    $('.block-text.col-sm-8').addClass('col-sm-10')
    $('.block-text.col-sm-10').removeClass('col-sm-8')
    $('.block-text.col-sm-10').removeClass('.offset-sm-2')

    $('#meet .block-text').html($('#meet-blocks').html())
    $('#meet-blocks').remove()

    $('#team .block-text').addClass('offset-sm-2')
    $('#team .block-text').removeClass('col-sm-10')
    $('#team .block-text').addClass('col-sm-8')

    $('#in-media').removeClass('col-sm-6')
    $('#in-media .block-text').removeClass('col-sm-8')
    $('#in-media .block-text').removeClass('offset-sm-2')
    $('#in-media .block-text').addClass('col-sm-10')
    $('#in-media .block-text').addClass('offset-sm-1')
    $('#in-media .block-text a').attr('target', '_blank')

    $('#partners .block-text').removeClass('col-sm-10')
    $('#partners .block-text').addClass('col-sm-8')

    var locale = $('html').attr('lang')

    // $(window).scroll(function () {
    //     $('.scroll-out').each(function () {
    //         var top = $(this).offset().top  - $(window).scrollTop() - $('nav').outerHeight(true)
    //
    //         if (top < 0) {
    //             $(this).css({ 'background-position': 'center ' + Math.pow(top, 2) * -0.005 + 'px' })
    //         }
    //     })
    //     $('.scroll-in').each(function () {
    //         var top = $(this).offset().top  - $(window).scrollTop() - $('nav').outerHeight(true)
    //
    //         if (top > 0) {
    //             $(this).css({ 'background-position': 'center ' + Math.pow(top, 2) * 0.0005 + 'px' })
    //         }
    //     })
    // })
    //
    // $(window).trigger('scroll')

    //- var getBrowserLocale = function () {
    //-     var language
    //-     if (navigator.languages && navigator.languages.length) {
    //-         language = navigator.languages[0]
    //-     } else {
    //-         language = navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en'
    //-     }
    //-
    //-     language = language.substring(0, 2)
    //-
    //-     if (['en', 'et', 'ru', 'fi', 'fr'].indexOf(language) === -1) {
    //-         language = 'en'
    //-     }
    //-
    //-     return language
    //- }
    //-
    //- var getOtherLocalePath = function (locale) {
    //-     var otherLocalePaths = JSON.parse('!{ JSON.stringify(self.otherLocalePaths) }')
    //-     return otherLocalePaths[locale]
    //- }
    //-
    //- var savedLocale = window.localStorage.getItem('language')
    //- var browserLocale = getBrowserLocale()
    //-
    //- if (locale !== 'aa') {
    //-     if (!savedLocale) {
    //-         window.localStorage.setItem('language',  browserLocale)
    //-
    //-         if (browserLocale !== locale) {
    //-             window.location.replace(getOtherLocalePath(browserLocale) + '/')
    //-         }
    //-     } else if (savedLocale !== locale) {
    //-         window.location.replace(getOtherLocalePath(savedLocale) + '/')
    //-     }
    //- }

    $('#news').removeClass('col-sm-6')
    $('#news .block-text').removeClass('col-sm-8')
    $('#news .block-text').removeClass('offset-sm-2')
    $('#news .block-text').addClass('col-sm-10')
    $('#news .block-text').addClass('offset-sm-1')
    $('#news .block-text h2').after($('#news-blocks').html())
    $('#news-blocks').remove()
})
