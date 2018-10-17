const http = require('https')


const getMediumJson = async () => {
    return new Promise((resolve, reject) => {
        http.get('https://medium.com/citizenos/latest?format=json', response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                var parsed = JSON.parse(body.replace('])}while(1);</x>', ''))
                resolve(parsed.payload.posts)
            })
        })
  })
}


exports.handler = async (event) => {
    const posts = await getMediumJson()
    const result = posts.map(p => {
        return {
            url: 'https://medium.com/citizenos/' + p.uniqueSlug,
            title: p.title,
            text: p.virtuals.subtitle,
            picture: 'https://miro.medium.com/fit/c/600/300/' + p.virtuals.previewImage.imageId,
            tags: p.virtuals.tags.map(t => t.slug)
        }
    })

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'max-age=3600, must-revalidate'
        },
        body: JSON.stringify(result)
    }

    return response
}
