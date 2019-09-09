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
                try {
                    xml2js.parseStringPromise(body).then(function (result) {
                      resolve(result.rss.channel[0].item)
                    })
                } catch (e) {
                    console.log(body)
                    console.error(e)
                    resolve([])
                }

            })
        })
  })
}


exports.handler = async (event) => {
    const posts = await getMediumJson()
    const result = posts.map(p => {
        let img = null
        try {
            img = p['content:encoded'][0].split('<figure>')[1].split('</figure>')[0].split('src="')[1].split('"')[0]
        } catch (e) {

        }

        return {
            url: p.link[0].split('?source=rss')[0],
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
        body: JSON.stringify(result)
    }

    return response
}
