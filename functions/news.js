const http = require('https')


const getMediumJson = async () => {
    return new Promise((resolve, reject) => {
        http.get('https://medium.com/@LanceUlanoff/latest?format=json', response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                var parsed = JSON.parse(body.replace('])}while(1);</x>', ''))
                resolve(parsed.payload.references.Post)
            })
        })
  })
}


exports.handler = async (event) => {
    const posts = await getMediumJson()
    var result = []

    for (let post in posts) {
        if (!posts.hasOwnProperty(post)) { continue }

        const p = posts[post]

        result.push({
            url: 'https://medium.com/s/story/' + p.uniqueSlug,
            title: p.title,
            text: p.content.subtitle,
            picture: 'https://miro.medium.com/fit/c/600/300/' + p.virtuals.previewImage.imageId
        })
    }

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
