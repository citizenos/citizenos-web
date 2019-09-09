const http = require('https')
const xml2js = require('xml2js')

const getMediumJson = async () => {
    return new Promise((resolve, reject) => {
        http.get('https://medium.com/feed/citizenos', response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                xml2js.parseStringPromise(body).then(function (result) {
                  resolve(result.rss.channel[0].items)
                })

            })
        })
  })
}


exports.handler = async (event) => {
    const posts = await getMediumJson()
    const result = posts.map(p => {
        try {
            const img = p['content:encoded'][0].split('<figure>')[1].split('</figure>')[0].split('src="')[1].split('"')[0]
        } catch (e) {
            const img = null
        }
        return {
            url: p.link.split('?source=rss')[0],
            title: p.title,
            // text: p.virtuals.subtitle,
            // picture: 'https://miro.medium.com/fit/c/600/300/' + p.virtuals.previewImage.imageId,
            picture: img,
            tags: p.category
        }
    })

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'max-age=300, must-revalidate'
        },
        body: JSON.stringify(posts)
    }

    return response
}
