$(function () {
    $('#hactivist-community-2 .block-text').addClass('p-5')
    $('#hactivist-community-2 .block-text h2').addClass('mb-4')
    $('#hactivist-community-2 .block-text').addClass('bg-white')
    $('#hactivist-community-2 .block-text').addClass('offset-sm-1')
    $('#hactivist-community-2 .block-text').addClass('box-shadow')

    $('#hacktivist .block-text').removeClass('col-sm-8')
    $('#hacktivist .block-text').addClass('col-sm-10')
    $('#hacktivist .block-text').addClass('col-md-8')
    $('#hacktivist .block-text').addClass('offset-md-2')
    $('#hacktivist .block-text').addClass('offset-sm-1')
    $('#hacktivist .block-text').removeClass('offset-sm-2')

    $('#hacktivist .block-text').append($('#hacktivist-blocks').html())
    $('#hacktivist-blocks').remove()

    $('#chat .block-text').append($('#chat-blocks').html())
    $('#chat-blocks').remove()
})
